import { environment } from './../../../environments/environment';
import { newInput, newsRes, newOutput } from './../models/noticiasRecientes.interface';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  db=environment.firebaseConfig.databaseURL;
  limitPage:Number=0;
  
  constructor(private http:HttpClient) { }

  getAllData():Observable<newOutput>{
    return this.http.get<newOutput>(`${this.db}/Post.json`);
  }

  getLastFive():Observable<String>{
    return this.http.get<String>(`${this.db}/Post.json?orderBy="$key"&startAt="1"&limitToLast=5&print=pretty`);//limitToLast es para iniciar las consultas desde la ultimo ingreso en la db
  }

  getOne(id:String):Observable<newInput>{   
    
    return this.http.get<newInput>(`${this.db}/Post/${id}.json`);
  }

  newPost(query:newInput):Observable<newsRes>{
    return this.http.post<newsRes>(`${this.db}/Post.json`, query);
  }

  cutText(){
    let texto="texto de prueba para hacer un chequeo de tipos";

    return texto.slice(0,10);
  }

 

  sizeChain(value:number){    
    this.limitPage=Math.ceil(value/5);
    //console.log(this.limitPage);    
    return this.limitPage;
    
  }


}
