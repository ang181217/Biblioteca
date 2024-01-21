import { Component, Input, ViewEncapsulation, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from '../administrador/administrador.component';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [CommonModule, AdministradorComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LibroComponent {
  libros = signal<LibroComponent[]>([]);
  idLibro: any;
  titulo: any;
  autor: any
  anioDePublicacion: any;
  genero: any;
  cantidadDisponible: any;
  isbn: any;
  Libros: any;


  constructor(private librosService: LibrosService) {
    const libros: LibroComponent[]  = [

       {
          idLibro: 123,
          titulo: 'Demian',
          autor: 'Hermann Hesse',
          anioDePublicacion: 1919,
          genero: 'Novela',
          cantidadDisponible: 6,
          isbn: 12345,
        }
      ];

const nuevosLibros = this.librosService.getLibro();

this.Libros = new Set([...this.Libros, ...nuevosLibros])

    }

  }

