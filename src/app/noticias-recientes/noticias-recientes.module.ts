import { NewComponent } from './components/new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneradorPostComponent } from './components/generador-post/generador-post.component';
import { Error404Component } from './../shared/Errores/error404/error404.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import { PaginationPipe } from './pipes/pagination.pipe';

const routes: Routes=[
  {path: '', component:NewsComponent},
  {path: 'noticia/:id', component: NewComponent},
  {path: 'generadorPost', component:GeneradorPostComponent},
  {path: 'noticia', component:NewComponent},
  {path: '**', pathMatch:'full', component:Error404Component}
]


@NgModule({
  declarations: [
    NewsComponent,
    GeneradorPostComponent,
    NewComponent,
    PaginationPipe
    
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class NoticiasRecientesModule { }
