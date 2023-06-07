import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { actualizarGmail } from 'src/app/model/actualizarGmail';


@Component({
  selector: 'app-update-gmail',
  templateUrl: './update-gmail.component.html',
  styleUrls: ['./update-gmail.component.css' , "css/style.css"]
})
export class UpdateGmailComponent implements OnInit{
  updateGmailCampos: actualizarGmail = {
    correo: '',
    contrasena: ''
  }

  correo: string|undefined
  contrasena:string|undefined


  ngOnInit(): void {
    this.getDatosEmail()
  }

  constructor(private usuarioService: UsuarioService, private ruta:Router){}

  //metodos
  getDatosEmail(){
    //obtenemos los datos
    this.usuarioService.obtenerDataGmail().subscribe(user =>{
      this.correo = user.correo,
      this.contrasena = user.contrasena
     
    })
  }

  updateGmail(){
    const update = {
      correo: this.correo,
      contrasena: this.contrasena
     
     
    };
    //llamamos al servicio
    this.usuarioService.updateGmail(update).subscribe(response => {
      alert('Gmail actualizado con exito')
      console.log('Usuario actualizado correctamente', response);
      this.ruta.navigate(['/perfil'])
    }, error => {
      alert('Error al actualizar')
      console.error('Error al actualizar el usuario', error);
    });
  }

 

  navegarPerfil(){
    this.ruta.navigate(['/perfil'])
  }

  
  naviganteCancelar(){
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
