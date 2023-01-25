import { newInput } from './../../models/noticiasRecientes.interface';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {

  constructor(private newservice:NewsService, private activaterouter:ActivatedRoute) { }
  urlParams:String="";
  query:Array<any>=[];


  ngOnInit(): void {
    this.loadNew();
    
  }

  loadNew(){
    let resultado=this.activaterouter.params.subscribe(params =>{
      let res=params['id'];
      this.urlParams=res;//Se manda al siguiente servicio para que busque el registro
      
      
    });

    this.newservice.getOne(this.urlParams).subscribe(result=>{
      this.query.push(result);      
      
    }) 
  }
}
