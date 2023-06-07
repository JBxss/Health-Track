import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';




@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css', 'css/style.css']
})
export class DeleteComponent {
  mostrarDialogo: boolean = false;
  contrasena: string = '';

  constructor(private usuarioService: UsuarioService, private ruta:Router){}

  confirmarEliminarUsuario() {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.mostrarDialogo = true;
    }
  }

  eliminarUsuario() {
    const token = localStorage.getItem('token'); // Obtén el token de autenticación del almacenamiento local o de donde lo estés guardando
  
    if (token) { // Verifica si el token no es nulo
      this.usuarioService.eliminarUsuario(token, this.contrasena).subscribe(
        () => {
          // Realizar cualquier acción necesaria después de eliminar al usuario
          alert('Cuenta borrada con exito')
          this.ruta.navigate(['/register-usuario'])
          console.log('Usuario eliminado con éxito');
        },
        (error) => {
          // Manejar el error en caso de que ocurra durante la eliminación del usuario
          console.error('Error al eliminar el usuario:', error);
        }
      );
    } else {
      console.error('Token no disponible');
    }
  
    this.mostrarDialogo = false;
    this.contrasena = '';
  }
  
  
  
  navigatePerfil(){
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
