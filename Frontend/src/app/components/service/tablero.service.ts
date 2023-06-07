import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
  })


  export class TableroService{
    //ver las preferencias
    api_perfil = 'http://localhost:3090/healthTrack/profile/profile'


    constructor(private http:HttpClient){}

    //preferencias de un usuario
    getUserPreferencias(id_perfil:number){
        const url = `http://localhost:3090/healthTrack/profile/profile/${id_perfil}`
        return this.http.get(url)
    }


    
  }