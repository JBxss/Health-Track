import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuarioInterface } from 'src/app/model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { HttpClient } from '@angular/common/http';
import { LoginUsuario } from 'src/app/model/login';


@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css', 'css/style.css', './lib/owlcarousel/assets/owl.carousel.min.css','./lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css']
})
export class LoginUsuarioComponent {
  usuarioLogin: LoginUsuario = {
    correo: '',
    contrasena: ''
  }


  
  //token
  private isAutorizado = false;
  

  api_login = 'http://localhost:3090/healthTrack/login-usuario'



  constructor( private usuarioService: UsuarioService,  private ruta:Router, private http:HttpClient ){
    
    
  }

  loginUsuario(){
    this.usuarioService.loginUsuario(this.usuarioLogin).subscribe(
      (res) =>{
        const token = res.jwt;
        console.log(token)
        //guardamos el token
        localStorage.setItem('token', token);
        alert('Bienvenido')
        this.ruta.navigate(['/seguimiento'])
      },
      (error) =>{
        alert('Error en el proceso de login')
        console.error(error)
        this.ruta.navigate(['/login-usuario'])
      }
    )
  }
  
  // login(): void {
  //   const credentials = { correo: this.correo, contrasena: this.contrasena }
  //   this.http.post<any>(this.api_login, credentials).subscribe(
  //     (response) => {
  //       const token = response.jwt;
  //       console.log(token)
  //       // Guarda el token en el almacenamiento local o en una cookie
  //       localStorage.setItem('token', token);
  //       alert('Bienvenido')
  //       // Redirige al perfil del usuario
  //       this.ruta.navigate(['/seguimiento'])
  //       // Puedes usar el enrutador de Angular para navegar a la página del perfil
  //     },
  //     (error) => {
  //       console.log(error.message);
  //       alert('status')
  //       this.ruta.navigate(['/login-usuario'])
  //       // Manejo del error de inicio de sesión
  //     }
  //   );
  // }

  
  navegarLogin(){
    this.ruta.navigate(['/login-usuario'])
  }

  navegarHome(){
    this.ruta.navigate(['/home'])
  }

  navegarContactanos(){
    this.ruta.navigate(['/contactanos'])
  }

  navegarAbout(){
    this.ruta.navigate(['/about'])
  }

  navegarPrecios(){
    this.ruta.navigate(['/precios'])
  }

  navegarServicios(){
    this.ruta.navigate(['/service'])
  }

  navegarSeguimiento(){
    this.ruta.navigate(['/seguimiento'])
  }

  navegarRegister(){
    this.ruta.navigate(['/register-usuario'])
  }
}
