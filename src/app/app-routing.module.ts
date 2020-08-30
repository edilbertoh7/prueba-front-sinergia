import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'imagenes', component: ImagenesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
