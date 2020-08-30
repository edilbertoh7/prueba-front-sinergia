import { Component, OnInit } from '@angular/core';
import { ImagenNameService } from 'src/app/services/imagen.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  imagenes: any[];

  constructor( private imagenesService: ImagenNameService) { }

  ngOnInit() {
    this.imagenes = this.imagenesService.getimagenes();
    // console.log(this.imagenes);


  }

}
