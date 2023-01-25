import { contactUsRes } from './../models/contactUs.interface';
import { contactUsInput } from '../models/contactUs.interface';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  key=environment.firebaseConfig.apiKey;
  db=environment.firebaseConfig.databaseURL;
  apiBase='https://identitytoolkit.googleapis.com';
  constructor(private http:HttpClient) {     
    
  }

  CreateMessage(query:contactUsInput): Observable<contactUsRes>{    
    return this.http.post<contactUsRes>(`${this.db}/Mensajes.json`, query);
   }

   shortString(){
     return "cortando textro";
     
   }

  

   
}
