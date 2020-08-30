import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styles: []
})
export class ImagenesComponent {

  mostrar = true;
  categoria = '';
  categorias = [
    { 'nombre' : 'science'},
    { 'nombre' : 'education'},
    { 'nombre' : 'people'},
    { 'nombre' : 'feelings'},
    { 'nombre' : 'computer'},
    { 'nombre' : 'building'}
  ];
  imagenes = '';

  buscarcategorias(event: any){
    this.categoria = event.target.value;
  }

  buscarimagen(termino: string){

    if ( termino != '' && this.categoria == '')
    {
      var URL = '&q='+termino;
    }
    else if(termino=='' && this.categoria != '')
    {
      var URL = '&category='+this.categoria;
    }
    else if(termino!='' && this.categoria!='')
    {
      var URL = '&q='+termino+'&category='+this.categoria;
    }
    else
    {
      var URL = '';
    }

    axios.get('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&lang=es'+URL)
    .then((response)=> {

      this.imagenes = response.data.hits;
      //console.log(this.imagenes);

    });

  }
  // funcion para mostrar u ocultar los dettalles de la imagen
  ocultar(event: any){

    if ( event.target.nextSibling.classList.contains('d-none'))
    {
      event.target.nextSibling.className='card-body';
    }
    else {
      event.target.nextSibling.className='card-body d-none';
    }
  }
}
