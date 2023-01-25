import { NewsService } from './../../noticias-recientes/services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  datos:Array<any>=[]
  short:Array<String>=[];
  constructor(private newservice: NewsService) { }

  ngOnInit(): void {
    this.start();
  }
  start(){
    this.newservice.getLastFive().subscribe(res=>{ 
      
      let temp:Array<any>=Object.values(res).reverse();//poner reverse
      this.datos=temp;
    })

  }

}
