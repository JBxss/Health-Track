import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', 'css/style.css', 'lib/owlcarousel/assets/owl.carousel.min.css','lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css']
})


export class HomeComponent {
  
  constructor( private ruta:Router ){}

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


