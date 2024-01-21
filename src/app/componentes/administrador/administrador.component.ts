import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Libros } from '../../models/Libros';
import { LibrosService } from '../../services/libros.service';
import { LibroComponent } from '../libros/libros.component';


@Component({
    selector: 'app-administrador',
    standalone: true,
    templateUrl: './administrador.component.html',
    styleUrl: './administrador.component.css',
    imports: [FormsModule, LibroComponent, CommonModule]
})
export class AdministradorComponent implements OnInit {
  constructor(private librosService: LibrosService) {}

  libro: Libros|undefined;

  ngOnInit(): void {

  }

  onSubmit(formValue: LibroComponent){
    this.librosService.guardarLibro(formValue);
    console.log(formValue);

}
}

