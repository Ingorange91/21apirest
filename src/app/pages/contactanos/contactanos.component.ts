import { contactUsInput, contactUsRes } from './../models/contactUs.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.sass']
})
export class ContactanosComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private contactusservice:ServicesService, private router:Router) { 
    
    this.frmContactUs=this.formbuilder.group({
      name:['', [Validators.required, Validators.pattern(/^[a-z A-Z]*$/)]],
      email:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9-_]*@[a-zA-Z]*.com$/)]],
      phone:['', [Validators.minLength(10), Validators.pattern(/^[1-9]*$/), Validators.minLength(10), Validators.maxLength(10)]],
      description:['', Validators.required]
    })
  }
  frmContactUs:FormGroup;

  ngOnInit(): void {
  }

  contactUs(){    
    if(this.frmContactUs.valid){

      let new_message:contactUsInput;
      new_message={
        name:this.frmContactUs.value.name,
        phone:this.frmContactUs.value.phone,
        email:this.frmContactUs.value.email,
        description:this.frmContactUs.value.description,
        read:false,
        date:new Date()
      }

      this.contactusservice.CreateMessage(new_message).subscribe({

        
        next:() => alert("Se ha registrado el mensaje con exito recibiras respuesta en tu correo electronico"),
        error:()=> this.ErrorMessage(),
        complete:()=> console.log("Se termino la ejecucion correctamente")
        
        
      })
      this.router.navigate(['']);

    }
    else{this.frmContactUs.markAllAsTouched();}
    
  }

  public ErrorMessage(){
    alert("Error al intentar enviar el formulario por favor intentelo mas tarde");
    this.router.navigate(['/']);
  }
}
