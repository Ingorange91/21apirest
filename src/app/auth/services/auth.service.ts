
import { HttpClient } from '@angular/common/http';
import { AuthOutput, AuthInput } from './../models/auth.login';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url=environment.rutes.apiGoogle;
  key=environment.firebaseConfig.apiKey;

constructor(private http:HttpClient, private cookieservice:CookieService ) { }//Se tiene que inyectar en el app ya que es el resopnsable de cargar todos los elementos

  login(data:AuthInput):Observable<AuthOutput>{
    return this.http.post<AuthOutput>(`${this.url}//v1/accounts:signInWithPassword?key=${this.key}`, data).pipe(
      map(res=> {
        this.authSuccess(res.idToken, res.localId)
        
        return res;
      })
    )//fin pipe
  }

  authSuccess(idToken:string, localId:string){
    let date=new Date()
    this.cookieservice.put('token',idToken, {expires: "12/30/2022", secure:true, httpOnly:true});
    this.cookieservice.put('localid',localId, {expires: "12/30/2022", secure:true, httpOnly:true});    
  }

  getIdToken(){
    return this.cookieservice.get('token');
    
  }

  getlocalId(){
    return this.cookieservice.get('localid');
  }

  logOut(){
    this.cookieservice.remove('token');
    this.cookieservice.remove('localid');
  }

  /*********************************************************************** */  
  /*********************************************************************** */
  /*IMPLEMENTACION DE FIRE BASE COMO ORIGINALMETE SE MANEJARIA SIN SER UNA API REST*/
  /*********************************************************************** */  
  /*********************************************************************** */

  loginFirebase(){}

  




}


