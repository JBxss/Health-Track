import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUsuarioComponent } from './components/register-usuario/register-usuario.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
//formsmodule
import { FormsModule } from '@angular/forms';
//hhtp
import { HttpClientModule } from '@angular/common/http';
//componentes
import { HomeComponent } from './components/home/home.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { PreciosComponent } from './components/precios/precios.component';
import { PaginasComponent } from './components/paginas/paginas.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { ActualizarDataComponent } from './components/actualizar-data/actualizar-data.component';
import { ActualizarContrasenaComponent } from './components/actualizar-contrasena/actualizar-contrasena.component';
import { UpdateGmailComponent } from './components/update-gmail/update-gmail.component';
import { DeleteComponent } from './components/delete/delete.component';
import { TableroComponent } from './components/tablero/tablero.component';



@NgModule({
  
  declarations: [
    AppComponent,
    RegisterUsuarioComponent,
    LoginUsuarioComponent,
    HomeComponent,
    ContactanosComponent,
    AboutComponent,
    ServiceComponent,
    PreciosComponent,
    PaginasComponent,
    SeguimientoComponent,
    PerfilComponent,
    ObjetivosComponent,
    ActualizarDataComponent,
    ActualizarContrasenaComponent,
    UpdateGmailComponent,
    DeleteComponent,
    TableroComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
