import { AuthInput } from './../../models/auth.login';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  

  constructor(private frombuilder:FormBuilder, private authservice:AuthService) { 
    this.frmLogin=this.frombuilder.group({
      user:['',Validators.required],//correo institucional
      password:['', Validators.required]
    })
  }
  
  frmLogin:FormGroup;
  ngOnInit(): void {
  }

  login(){
    let loginData:AuthInput;
    loginData={
      email:this.frmLogin.value.user,
      password:this.frmLogin.value.password,
      returnSecureToken:true
    };
    
    this.authservice.login(loginData).subscribe(res=>{
      console.log(res);
      
    })
  }

}
