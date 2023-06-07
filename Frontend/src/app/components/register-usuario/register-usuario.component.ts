import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../service/usuario.service';
import { usuarioInterface } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-usuario',
  templateUrl: './register-usuario.component.html',
  styleUrls: ['./register-usuario.component.css', 'css/style.css','./lib/owlcarousel/assets/owl.carousel.min.css','./lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'],

})
export class RegisterUsuarioComponent {
  //objeto usuario
  usuario: usuarioInterface ={
    id_usuario:0,
    nombre: '',
    apellido: '',
    correo :'',
    contrasena: ''
  }
  

  constructor( private usuarioService: UsuarioService, private ruta:Router ){}

  guardarRegisterUsuario() {
    this.usuarioService.registerUsuario(this.usuario).subscribe(
      (data: any) => {
        // Registro exitoso
        alert('Registro exitoso');
        // Redirigir al usuario a otra página después del registro exitoso
        this.ruta.navigate(['/login-usuario']);
      },
      (error: any) => {
        // Manejar el error
        alert(error);
      }
    );
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

  navegarRegister(){
    this.ruta.navigate(['/register-usuario'])
  }

  
}
