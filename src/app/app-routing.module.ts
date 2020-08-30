import { RouterModule, Routes } from '@angular/router';

import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'imagenes', component: ImagenesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'imagenes' }
];

export const appRouting = RouterModule.forRoot(routes);


