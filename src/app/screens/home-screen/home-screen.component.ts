import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditService } from 'src/app/edit.service';
import { listaTareas, tarea } from 'src/app/models/tarea.model';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  formulario:FormGroup;
  opciones = ["Iniciado", "En proceso", "Terminado"]
  estado:boolean = false;
  tareas = listaTareas;

  constructor(public FormB:FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.formulario = this.FormB.group({
    titulo: ["", [Validators.required]],
    estado: ["", [Validators.required, Validators.pattern("[^0]+")]]
    })
  }

  ngOnInit(): void {
  }

  validacion(){
    this.estado=true;

    let datos:tarea={
      "_id": this.tareas.length,
      "titulo": this.formulario.get("titulo")?.value,
      "estado": this.formulario.get("estado")?.value
    }
      this.tareas.push(datos);
      console.log(this.tareas);
      this.router.navigate(['tasks'])
  }

  limpiar(){
    this.formulario.reset();
  }

}
