import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificacionesComponent } from './pages/calificaciones/calificaciones.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { IndexComponent } from './pages/index/index.component';
import { TalleresComponent } from './pages/talleres/talleres.component';
import { Error404Component } from './shared/Errores/error404/error404.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'noticias', loadChildren:() => import('./noticias-recientes/noticias-recientes.module').then(res => res.NoticiasRecientesModule)},
  {path: 'talleres', component: TalleresComponent},
  {path: 'calificaciones', component:CalificacionesComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'login', loadChildren:() => import('./auth/auth.module').then(res => res.AuthModule)},
  {path: '**', pathMatch:'full', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
