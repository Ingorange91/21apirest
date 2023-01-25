import { newInput } from '../../models/noticiasRecientes.interface';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  datos:Array<any>=[];//Aqui tendremos que delcarar que la incializacion se realizara con array ya que de otra forma marcara el error object object
  id:Array<String>=[];
  page:number=0;
  currentPage:number=1;
  pagination=0;
  constructor(private newservice:NewsService) {
    
    
    
   }
 
  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(){
    let value=this.newservice.getAllData().subscribe(res=>{
      let temp =Object.values(res).reverse();
      
      this.datos=temp; 

      let identifier=Object.keys(res).reverse();
      this.id=identifier;
      
    })  
    
  }

  next(){
    this.page+=5;
    this.currentPage+=1
    
  
  }

  pre(){
    if(this.page>0){
      this.page-=5;
      this.currentPage-=1
    }
  }

  Pagination(value:number){
    let temp=Math.ceil(value/5);
    this.pagination=temp;
    
  }

  

   
}
 
