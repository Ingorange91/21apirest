import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscribir-alumno',
  templateUrl: './inscribir-alumno.component.html',
  styleUrls: ['./inscribir-alumno.component.css']
})

export class InscribirAlumnoComponent {
  frmInscripcion:FormGroup;

  constructor(private formbuilder:FormBuilder){
    this.frmInscripcion=this.formbuilder.group({
      
    })
  }
  inscribir(){
    
  }
}
