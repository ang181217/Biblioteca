import { Routes } from '@angular/router';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { LibroComponent } from './componentes/libros/libros.component';

export const routes: Routes = [
  {
    path:'',
    component: AdministradorComponent
  },
  {
    path:'Biblioteca',
    component: LibroComponent
  }
];