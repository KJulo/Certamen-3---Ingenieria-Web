import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditService } from 'src/app/edit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-screen',
  templateUrl: './editar-screen.component.html',
  styleUrls: ['./editar-screen.component.scss']
})
export class EditarScreenComponent implements OnInit {

  id:any;

  formulario:FormGroup;
  opciones = ["Iniciado", "En proceso", "Terminado"]
  estado:boolean = false;

  constructor(private _servicio:EditService, public FormB:FormBuilder, private ruta:ActivatedRoute, private router: Router) {
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];

    })
    this.formulario = this.FormB.group({
    titulo: ["", [Validators.required]],
    estado: ["", [Validators.required, Validators.pattern("[^0]+")]]
    })

  }

  ngOnInit(): void {
  }

  mandarDatos(){
    let id = this.id;
    let titulo = (<HTMLInputElement>document.getElementById("titulo")).value;
    let estado = (<HTMLInputElement>document.getElementById("estados")).value;
    this._servicio.setEdit(id, titulo, estado);
    this.router.navigate(['tasks'])
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
