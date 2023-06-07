import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { seguimientoInterface } from 'src/app/model/seguimiento';
import { SeguimientoService } from '../service/seguimiento.service';



@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css', 'css/style.css','./lib/owlcarousel/assets/owl.carousel.min.css','./lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css']
})
export class SeguimientoComponent {
  //objeto para crear el seguimiento
  Seguimiento: seguimientoInterface = {
    id_seguimiento: 0,
    fecha: new Date,
    alimentos: '',
    actividad_fisica: '',
    frecuencia_cardiaca: 0,
    peso: 0,
    presion_arterial: 0,
    id_usuario:0
    
  }
  seguimientos: seguimientoInterface[] = [];
  seguimientosPerfil:  seguimientoInterface[] = [];


  constructor( private seguimientoService:SeguimientoService ,private ruta:Router ){}

  //metodos 
  // guardarSeguimiento(){
  //   this.seguimientoService.crearSeguimiento(this.Seguimiento).subscribe(
      
  //     (datos:any) =>{
  //       this.seguimientos.push(this.Seguimiento)
  //       alert('Seguimiento completado correctamente')
  //       this.ruta.navigate(['/home'])
  //     },
  //     (error) => {
  //     alert('Error en el proceso del seguimiento'), error
  //     this.ruta.navigate(['/seguimiento'])
  //   }
 
  //   )
    
  // }
  guardarSeguimiento() {
    this.seguimientoService.crearSeguimiento(this.Seguimiento).subscribe(
      (datos: any) => {
        this.seguimientos.push(this.Seguimiento);
        alert('Seguimiento completado correctamente');
        this.ruta.navigate(['/perfil']); // Redirigir al perfil
  
        // No es necesario obtener los seguimientos aquí
      },
      (error) => {
        alert('Error en el proceso del seguimiento: ' + error);
        this.ruta.navigate(['/seguimiento']);
      }
    );
  }
  
  
  navegarHome(){
    this.ruta.navigate(['/home'])
  }
}
