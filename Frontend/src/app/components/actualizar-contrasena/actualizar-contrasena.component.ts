import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { actualizarContrasena } from 'src/app/model/actualizarContrasena';



@Component({
  selector: 'app-actualizar-contrasena',
  templateUrl: './actualizar-contrasena.component.html',
  styleUrls: ['./actualizar-contrasena.component.css', 'css/style.css']
})
export class ActualizarContrasenaComponent {
contrasena: string | undefined;
newContrasena: string | undefined;


  constructor(private usuarioServive: UsuarioService, private ruta:Router){}

  actualizarContrasena() {
    if (this.contrasena && this.newContrasena) {
      this.usuarioServive.updateContrasena(this.contrasena, this.newContrasena)
        .subscribe(
          response => {
            // Actualización exitosa, realizar acciones adicionales si es necesario
            alert('Contraseña actualizada correctamente')
            this.ruta.navigate(['/perfil'])
            console.log('Contraseña actualizada correctamente');
            // Limpiar los campos del formulario
            this.contrasena = '';
            this.newContrasena = '';
          },
          error => {
            // Manejar el error de actualización
            console.error('Error al actualizar la contraseña:', error);
            // Restablecer los campos del formulario si es necesario
            this.contrasena = '';
            this.newContrasena = '';
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

  navegarSeguimiento(){
    this.ruta.navigate(['/seguimiento'])
  }

  navegarRegister(){
    this.ruta.navigate(['/register-usuario'])
  }
}


