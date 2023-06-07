import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable,catchError,throwError  } from "rxjs";
import { ObjetivoInterface } from "src/app/model/objetivo";
import { HttpErrorResponse } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
  })

  export class ObjetivosServices {
    //crear objetivos
    url = 'http://localhost:3090/healthTrack/profile/create'


    constructor(private ruta: Router, private http:HttpClient){}


    crearObjetivo(data:ObjetivoInterface): Observable<any>{
        return this.http.post(this.url, data).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 400) {
                  return throwError('Error en la información proporcionada');
                } else {
                  return throwError('Error en el servidor');
                }
              })
        )
    }

    navegarPerfil(){
        this.ruta.navigate(['/perfil'])
    }

  }