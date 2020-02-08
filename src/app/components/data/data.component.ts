import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  formulary: FormGroup;

  usuario: object = {
    nombrecompleto: {
      nombre: 'Daniel',
      apellido: 'Garcia'
    },
    correo: 'garciafebresd@gmail.com',
    //    pasatiempos: ['correr', 'dormir', 'comer']
    pasatiempos: ['correr']
  };

  constructor() {
    this.formulary = new FormGroup({

      nombrecompleto: new FormGroup({
        nombre: new FormControl('',
          [Validators.required, Validators.minLength(5)]
        ),
        apellido: new FormControl('',
          [Validators.required, Validators.minLength(5), this.noGarcia]
        )
      }),
      correo: new FormControl('',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]
      ),
      pasatiempos: new FormArray([
        new FormControl('', Validators.required)
      ]),
      username: new FormControl('', [Validators.required], [this.existeUsuario]),
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl()
    });

    this.formulary.controls.password2.setValidators([Validators.required, this.noIgual.bind(this.formulary)]);

    this.formulary.controls.username.valueChanges.subscribe((data) => {
      console.log(data);
    });

    this.formulary.controls.username.statusChanges.subscribe((data) => {
      console.log(data);
    });

    ///SETEA VALORES AL FORMULARIO
    //this.formulary.setValue(this.usuario);
  }


  agregarPasatiempo() {
    (this.formulary.controls.pasatiempos as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  noGarcia(control: FormControl): { [s: string]: boolean } {

    if (control.value === "garcia") {
      return {
        nogarcia: true
      };
    }
    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {

    if (control.value !== this.controls.password1.value) {
      return {
        nogarcia: true
      };
    }
    return null;
  }


  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'garciafebresd') {
          resolve({ existe: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });

    return promesa;
  }

  guardar() {

    console.log(this.usuario);
    console.log(this.formulary.value);
    console.log(this.formulary);

    this.formulary.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: ''
    });

  }


}
