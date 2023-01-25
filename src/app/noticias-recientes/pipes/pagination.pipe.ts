import { NewsComponent } from './../components/news/news.component';
import { NewsService } from './../services/news.service';
import { newInput, newOutput } from './../models/noticiasRecientes.interface';
import { Pipe, PipeTransform } from '@angular/core';
//import { NewsComponent } from '../components/news/news.component';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  constructor(private newservice:NewsService, private newscomponent:NewsComponent){

  }

  transform(data: Object, page:number=0 ): any{

    let conversion=Object.values(data);
    let show:Array<String>= conversion.slice(page, page + 5);//Se convierte array para poder aplicarle el slice
    this.newscomponent.Pagination(conversion.length);
    
    let objecto=Object.assign([], show);//Se vuelve a convertir a objecto para poder recorrerlo en el ngfor

    return objecto;
  }

}
