import { Injectable } from '@angular/core';
import { Libros } from '../models/Libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  libros: Libros [] = [];

  constructor() {
    this.libros = localStorage.getItem('libros') ? JSON.parse(localStorage.getItem('libros')!) : [];
  }

  getLibro(){
    return this.libros
  }

  guardarLibro(libro: Libros): void {
    this.libros.push(libro);
    console.log(this.libros)
    localStorage.setItem('libro', JSON.stringify(this.libros));
  }

  buscarLibro(codigo: number): Libros | null {
    return this.libros.find(libro => libro.isbn === codigo) || null;
  }

  editarLibro(formValue: Libros): void {
    const index = this.libros.findIndex(libro => libro.isbn === formValue.isbn);

    if (index !== -1) {
      this.libros[index] = formValue;
      localStorage.setItem('libro', JSON.stringify(this.libros));
    }
  }

  borrarLibro(formValue: Libros): void {
    const index = this.libros.findIndex(libros => libros.isbn === formValue.isbn);

    if (index !== -1) {
      this.libros.splice(index, 1);
      localStorage.setItem('libro', JSON.stringify(this.libros));
    }
  }
}
