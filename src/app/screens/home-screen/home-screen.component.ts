import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  formulario:FormGroup;
  opciones = ["Iniciado", "En proceso", "Terminado"]
  estado:boolean = false;

  constructor(public FormB:FormBuilder) {
    this.formulario = this.FormB.group({
    titulo: ["", [Validators.required]],
    estado: ["", [Validators.required, Validators.pattern("[^0]+")]]
    })
  }

  ngOnInit(): void {
  }

  validacion(){
    this.estado=true;
    let datos:any=[{
      "titulo": this.formulario.get("nombre")?.value,
      "estado": this.formulario.get("correo")?.value
    }]
  }

  limpiar(){
    this.formulario.reset();
  }

}
