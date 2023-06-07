import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../components/service/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: UsuarioService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.esAutorizado()) {
      return true; // El usuario ha iniciado sesión, permite el acceso a la ruta
    } else {
      this.router.navigate(['/login-usario']); // El usuario no ha iniciado sesión, redirige a la página de inicio de sesión
      return false; // Bloquea el acceso a la ruta
    }
  }
}
