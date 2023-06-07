import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioInterface } from 'src/app/model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css', 'css/style.css','css/bootstrap.min.css', './lib/owlcarousel/assets/owl.carousel.min.css','./lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css']
})
export class LoginUsuarioComponent {
  correo!: string;
  contrasena!: string;
  
  constructor( private usuarioService: UsuarioService, private router:Router){}



  loginUsuario(){
      const credenciales = {
        correo: this.correo,
        contrasena: this.contrasena
      };

      this.usuarioService.loginUsuario(credenciales).then(response =>{
        //almacenamos el token en localstore
        localStorage.setItem('token', response.jwt);
        //redireccionamos a la pagina index
        this.router.navigate(['/register-usuario'])
      })
      .catch(error =>{
        console.error('Error en el proceso del login',error);
        
      })

      
  }

}
