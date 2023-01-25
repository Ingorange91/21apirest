import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  spanish_Date(day:number, month:number, year:number){
  const mou=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Novembre','Diciembre'];
  const da=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
  // console.log("El mes recibido es:",mou[mouth] );
  // console.log("El dia recibido es:",da[day] );
  return `${da[day]} ${day} de ${mou[month]} del ${year}`;

  
  }
}


