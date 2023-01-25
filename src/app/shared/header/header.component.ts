import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public showMenu:boolean = false;
  public itemsLink=[
    {
    nombre: 'INICIO',
    icon:'fa-solid fa-house',
    rute:''
    },

    {
      nombre: 'NOTICIAS',
      icon:'fa-solid fa-newspaper',
      rute:'noticias'
    },

    {
      nombre: 'TALLERES',
      icon:'fa-solid fa-clipboard-list',
      rute:'talleres'
    },

    {
      nombre: 'CALIFICACIONES',
      icon:'fa-solid fa-arrow-up-1-9',
      rute:'calificaciones'
    },

    {
      nombre: 'CONTACTANOS',
      icon:'fa-solid fa-location-dot',
      rute:'contactanos'
    },
]

  ngOnInit(): void {
  }
  
  openAndCloseMenu(): void{
    this.showMenu=!this.showMenu;
  }

  changeStateNav(){
    this.showMenu=false;
  }

}
