import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Usuario {
  nombre: string;
  apellido: string;
  email: string;
  pais: string;
  sexo: string;
  acepta: false;
}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  usuario: Usuario = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  paises = [
    { codigo: 'CL', nombre: 'Chile' },
    { codigo: 'CRI', nombre: 'Costa Rica' },
    { codigo: 'VE', nombre: 'Venezuela' },
    { codigo: 'EEUU', nombre: 'Estados Unidos' },
    { codigo: 'ES', nombre: 'España' }
  ];

  sexos: string[] = [
    'Hombre', 'Mujer', 'Indefinido'
  ]

  constructor() { }

  ngOnInit() {
  }

  guardar(formulary: NgForm) {

    console.log('formulario enviado', formulary);
    console.log('Valor', formulary.value);

    console.log('Usuario', this.usuario);

  }


}
