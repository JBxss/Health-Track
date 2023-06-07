import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguimientoService } from '../service/seguimiento.service';
import { seguimientoInterface } from 'src/app/model/seguimiento';
import { PerfilService } from '../service/perfil.service';
import { usuarioInterface } from 'src/app/model/usuario';
import { UsuarioService } from '../service/usuario.service';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css','css/style.css', 'lib/owlcarousel/assets/owl.carousel.min.css','lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css']
})
export class PerfilComponent implements OnInit{


  //obj para la data de seguimiento
  miGrafica: Chart | undefined;
  seguimientos: any[] | undefined;
  seguimientoI: seguimientoInterface[] = [];
  //id
  id_seguimiento: number  | undefined;

  //usuario
  usuarioI: usuarioInterface | undefined;

  //perfil
  perfil:any;
  constructor(private perfilService: PerfilService,private usuarioService:UsuarioService , private SeguimientoService: SeguimientoService ,private ruta:Router){
    this.miGrafica = {} as Chart;
  }

  ngOnInit(): void {
   this.obtenerDatosSeguimientos()
   this.obtenerDatosUsuario()
      
      // Crear la gráfica lineal
      const ctx = document.getElementById('miGrafica');
      if (ctx instanceof HTMLCanvasElement) {
         // Datos de la gráfica
       const datos = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: 'Ventas',
          data: [120, 80, 150, 200, 100],
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false
        }]
      };
  
      // Configuración de la gráfica
      const opciones = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
  
        this.miGrafica = new Chart(ctx, {
        type: 'line',
        data: datos,
        options: opciones
      });
      }
      
  
  }

  
  obtenerDatosUsuario() {
    this.usuarioService.obtenerDatosUsuario().subscribe(
      (datos: usuarioInterface) => {
        this.usuarioI = datos;
      },
      (error) => {
        if (error === 'Error en el servidor') {
          console.error('Error al obtener los datos del usuario', error);
        } else {
          console.error('Error en la solicitud HTTP', error);
        }
      }
    );
  }

  

  obtenerDatosSeguimientos() {
    if (this.id_seguimiento) {
      this.SeguimientoService.obtenerSeguimiento(this.id_seguimiento).subscribe(
        (datos: any) => {
          this.seguimientos = datos;
        },
        (error) => {
          console.error('Error al obtener los datos del seguimiento', error);
        }
      );
    }
  }

  

  navegarPerfil(){
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

  


}

