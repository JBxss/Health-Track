import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TableroService } from '../service/tablero.service';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css', "css/style.css"]
})
export class TableroComponent implements OnInit{
 perfil:any[] | undefined
  id_perfil:number | undefined
  user:any; //listado para el perfil

    constructor(private tableroService: TableroService, private ruta:Router){}

  ngOnInit(): void {
    this.getOneProfile()
  }

    getOneProfile(){
      if(this.id_perfil){
        this.tableroService.getUserPreferencias(this.id_perfil).subscribe(
          (datos: any) => {
            this.perfil = datos;
          },
          (error) => {
            console.error('Error al obtener los datos del seguimiento', error);
          }
        )
      }
    }


    naviganteCancelar(){
      this.ruta.navigate(['/perfil'])
    }

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
