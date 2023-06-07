import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetivoInterface } from 'src/app/model/objetivo';
import { ObjetivosServices } from '../service/objetivo.service';


@Component({
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.css','css/style.css', './lib/owlcarousel/assets/owl.carousel.min.css','./lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css']
})
export class ObjetivosComponent {
//interface
obj: ObjetivoInterface = {
  id_perfil: 0,
  preferencias: '',
  metas_de_salud: '',
  id_usuario: 0
}

constructor(private objService: ObjetivosServices, private ruta: Router){}


//metodos
guardarObjetivo(){
  this.objService.crearObjetivo(this.obj).subscribe(
    (datos: any) =>{
      alert('Creado correctamente')
      this.ruta.navigate(['/perfil'])
    },
    (error)=>{
      alert(error)
      this.ruta.navigate(['/objetivos'])
    }
  )
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

navegarSeguimiento(){
  this.ruta.navigate(['/seguimiento'])
}

navegarRegister(){
  this.ruta.navigate(['/register-usuario'])
}


}
