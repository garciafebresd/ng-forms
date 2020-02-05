import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  usuario: Object = {
    nombre: '',
    apellido: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

  guardar(formulary: NgForm) {

    console.log('formulario enviado', formulary);
  }


}
