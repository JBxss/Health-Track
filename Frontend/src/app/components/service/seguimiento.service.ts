import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {seguimientoInterface} from 'src/app/model/seguimiento'

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })


  export class SeguimientoService {
    //url
    Url = 'http://localhost:3090/healthTrack/tracking/create'

    //url para datos de los usuarios
    urlUsuario = 'http:3090/healthTrack/profile'
    

    constructor(private http:HttpClient){}

    //--metodo para crear un seguimiento
    crearSeguimiento(data:seguimientoInterface){
        return this.http.post(this.Url,data)
    }

    // Método para obtener los datos del seguimiento
  obtenerSeguimiento(id_seguimiento: number): Observable<any> {
    // Realiza una petición GET al servidor para obtener los datos del seguimiento
   const  url_seguimiento = `http://localhost:3090/healthTrack/tracking/tracking/${id_seguimiento}`
    return this.http.get(url_seguimiento);
  }
    
  
  }

