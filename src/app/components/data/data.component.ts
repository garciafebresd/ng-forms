import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  formulary: FormGroup;

  usuario: object = {
    nombreCompleto: {
      nombre: 'Daniel',
      apellido: 'Garcia'
    },
    correo: 'garciafebresd@gmail.com'
  };

  constructor() {
    this.formulary = new FormGroup({
      nombre: new FormControl('',
        [Validators.required, Validators.minLength(5)]
      ),
      apellido: new FormControl('',
        [Validators.required, Validators.minLength(5)]
      ),
      correo: new FormControl('',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      ),
    });
  }

  guardar() {

    console.log(this.usuario);
    console.log(this.formulary.value);
    console.log(this.formulary);
  }
}
