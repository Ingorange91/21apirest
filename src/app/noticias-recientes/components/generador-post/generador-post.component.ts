import { Router } from '@angular/router';
import { DateService } from './../../../shared/services/date.service';
import { NewsService } from '../../services/news.service';
import { newInput } from '../../models/noticiasRecientes.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generador-post',
  templateUrl: './generador-post.component.html',
  styleUrls: ['./generador-post.component.sass']
})
export class GeneradorPostComponent implements OnInit {

  
  constructor(private frmGenerar: FormBuilder, private newservice: NewsService, private dateservice:DateService, private router:Router) {
    this.frmGenerarPost=this.frmGenerar.group({
      tittle:['', Validators.required],
      text:['',Validators.required],
      image:['assets/img/',Validators.required]

    })
   }
   frmGenerarPost:FormGroup;

  ngOnInit(): void {
  }

  GenerarPost(){
    if(this.frmGenerarPost.valid){
      
      let year=new Date().getFullYear();
      let month=new Date().getMonth();
      let day=new Date().getDay()-1;
      let hour= new Date().getHours();
      let minutes=new Date().getMinutes();
      let currentTime=`${hour}:${minutes}`;

      let currentDate=this.dateservice.spanish_Date(day, month, year); 
      

      let new_Post: newInput;
      new_Post={
        tittle:this.frmGenerarPost.value.tittle,
        text:this.frmGenerarPost.value.text,
        img:this.frmGenerarPost.value.image,
        date:currentDate,
        time:currentTime
      }
      

      this.newservice.newPost(new_Post).subscribe({
        next:()=> this.success() ,
        error:(error)=> "Error al publicar el post intentalo mas tarde si el error persiste contacta al administrador del sitio",
        complete:()=> "Publicacion exitosa"
        
      })


    }
    else{
      this.frmGenerarPost.markAllAsTouched();
    }
    
  }

  success(){
    alert("Post generado correctamente seras redireccionado a noticias");
    this.router.navigate(['noticias']);
    
  }
  
}
