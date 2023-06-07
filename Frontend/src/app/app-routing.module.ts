import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos los componentes
import { RegisterUsuarioComponent } from './components/register-usuario/register-usuario.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { AboutComponent } from './components/about/about.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ServiceComponent } from './components/service/service.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ObjetivosComponent } from './components/objetivos/objetivos.component';
import { ActualizarDataComponent } from './components/actualizar-data/actualizar-data.component';
import { ActualizarContrasenaComponent } from './components/actualizar-contrasena/actualizar-contrasena.component';
import { UpdateGmailComponent } from './components/update-gmail/update-gmail.component';
import { DeleteComponent } from './components/delete/delete.component';
import { TableroComponent } from './components/tablero/tablero.component';



const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'register-usuario'},
  {path: 'register-usuario', component:RegisterUsuarioComponent},

  {path:'', pathMatch:'full', redirectTo:'login-usuario'},
  {path:'login-usuario', component:LoginUsuarioComponent},

  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},

  {path:'', pathMatch:'full', redirectTo:'contactanos'},
  {path:'contactanos', component:ContactanosComponent},

  {path:'', pathMatch:'full', redirectTo:'about'},
  {path:'about', component: AboutComponent},

  {path:'', pathMatch:'full', redirectTo:'precios'},
  {path:'precios', component: PreciosComponent},

  {path:'', pathMatch:'full', redirectTo:'service'},
  {path:'service', component: ServiceComponent},

  {path:'', pathMatch:'full', redirectTo:'seguimiento'},
  {path:'seguimiento', component: SeguimientoComponent},

  {path:'', pathMatch:'full', redirectTo:'perfil'},
  {path:'perfil', component: PerfilComponent},

  {path:'', pathMatch:'full', redirectTo:'objetivos'},
  {path:'objetivos', component: ObjetivosComponent},

  {path:'', pathMatch:'full', redirectTo:'actualizar-data'},
  {path:'actualizar-data', component: ActualizarDataComponent},

  {path:'', pathMatch:'full', redirectTo:'actualizar-contrasena'},
  {path:'actualizar-contrasena', component: ActualizarContrasenaComponent},

  
  {path:'', pathMatch:'full', redirectTo:'update-gmail'},
  {path:'update-gmail', component: UpdateGmailComponent},

  {path:'', pathMatch:'full', redirectTo:'delete'},
  {path:'delete', component: DeleteComponent},

  {path:'', pathMatch:'full', redirectTo:'tablero'},
  {path:'tablero', component: TableroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
