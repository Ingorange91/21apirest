
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';



const routes:Routes=[
  {path:'', component:LoginComponent},
  {path:'forgot', component: ForgotPasswordComponent}
]


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    
      
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      
    
  ],
  exports:[
    RouterModule
  ]
})
export class AuthModule { }
