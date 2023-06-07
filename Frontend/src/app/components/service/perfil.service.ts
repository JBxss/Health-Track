import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { PerfilComponent } from '../perfil/perfil.component';
import {seguimientoInterface} from 'src/app/model/seguimiento'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })


  export class PerfilService{
  private perfilUrl = 'http://localhost:3090/healthTrack/profile'
   
   

    constructor(private http:HttpClient){}
    

   

  }