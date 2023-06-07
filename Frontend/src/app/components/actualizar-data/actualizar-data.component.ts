import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-data',
  templateUrl: './actualizar-data.component.html',
  styleUrls: ['./actualizar-data.component.css', 'css/style.css']
})
export class ActualizarDataComponent implements OnInit {
  nombre: string | undefined
  apellido: string | undefined



  constructor(private usuarioService: UsuarioService, private ruta: Router){}

  ngOnInit(): void {
    this.getUserData()
  }

  //metodos
  getUserData(){
    // Llamar al servicio para obtener los datos del usuario
    this.usuarioService.obtenerDatosUsuario().subscribe(user => {
      this.nombre = user.nombre
      this.apellido = user.apellido

    });
  }



  updateData(){
    const update = {
      nombre: this.nombre,
      apellido: this.apellido
    };
    //llamamos al servicio
    this.usuarioService.updateData(update).subscribe(response => {
      alert('Usuario actualizado con exito')
      console.log('Usuario actualizado correctamente', response);
      this.ruta.navigate(['/perfil'])
    }, error => {
      alert('Error en el proceso de actualizacion')
      this.ruta.navigate(['/actualizar-data'])
      console.error('Error al actualizar el usuario', error);
    });
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

  
  



