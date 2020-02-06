import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: ''
  };

  paises = [
    { codigo: 'CL', nombre: 'Chile' },
    { codigo: 'CRI', nombre: 'Costa Rica' },
    { codigo: 'VE', nombre: 'Venezuela' },
    { codigo: 'EEUU', nombre: 'Estados Unidos' },
    { codigo: 'ES', nombre: 'España' }
  ];

  constructor() { }

  ngOnInit() {
  }

  guardar(formulary: NgForm) {

    console.log('formulario enviado', formulary);
    console.log('Valor', formulary.value);

    console.log('Usuario', this.usuario);

  }


}
