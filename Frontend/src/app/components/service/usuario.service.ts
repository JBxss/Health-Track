import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { usuarioInterface } from 'src/app/model/usuario';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { actualizarGmail } from 'src/app/model/actualizarGmail';
import { LoginUsuario } from 'src/app/model/login';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //register 
  Api_url_register = 'http://localhost:3090/healthTrack/register-usuario'
  //login
  Api_url_login = 'http://localhost:3090/healthTrack/login-usuario'

  //datos del usuario
  Api_url_Datos = 'http://localhost:3090/healthTrack/perfil'

  //actualizar data
  Api_actualizar_data = 'http://localhost:3090/healthTrack/update-data'

  //actualizar contrasena
  Api_actualizar_contrasena = 'http://localhost:3090/healthTrack/update-contrasena'

  //actualizar email
  Api_actualizar_gmail = 'http://localhost:3090/healthTrack/update-gmail'

  //delete
  Api_Delete = 'http://localhost:3090/healthTrack/delete'

  constructor( private http:HttpClient, private ruta: Router ) { }
    
  loginUsuario(data:LoginUsuario): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.Api_url_login, data)
  }

  registerUsuario(data: usuarioInterface): Observable<any> {
    return this.http.post(this.Api_url_register, data).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          return throwError('Error en la información proporcionada');
        } else {
          return throwError('Error en el servidor');
        }
      })
    );
  }

 
  obtenerDatosUsuario(): Observable<usuarioInterface> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get<usuarioInterface>(`${this.Api_url_Datos}`, { headers });
  }

  obtenerDataGmail():Observable<actualizarGmail>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.patch<actualizarGmail>(this.Api_actualizar_gmail, {headers})
  }

  //delete
  eliminarUsuario(token: string, contrasena:string) {
    const url = `${this.Api_Delete}`;
    
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
      body:{
        contrasena
      }
    };

    return this.http.delete(url, options);
  }
  
  //actualizar data
  updateData(user:any): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    //realiazamos el patch
    return this.http.patch<any>(this.Api_actualizar_data, user,{headers} )
  }

  //updateEmail
  updateGmail(user:any):Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    //patch
    return this.http.patch<any>(this.Api_actualizar_gmail, user, {headers})
  }

  //actualizar contrasena
  updateContrasena(contrasena: string, newContrasena: string): Observable<any>{

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const body = {
      contrasena :  contrasena,
      newContrasena : newContrasena
    };

    return this.http.patch<any>(this.Api_actualizar_contrasena, body, {headers}).pipe(
      catchError((error: HttpErrorResponse) =>{
        if(error.status === 400){
          return throwError('Error en la informacion proporcionada')
        }else{
          return throwError('Error en el servidor')
        }
      })
    )

    //realizamos el patch
    
  }

  navegarPerfil(){
    this.ruta.navigate(['/perfil'])
  }


}
