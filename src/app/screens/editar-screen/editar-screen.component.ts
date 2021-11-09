import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-editar-screen',
  templateUrl: './editar-screen.component.html',
  styleUrls: ['./editar-screen.component.scss']
})
export class EditarScreenComponent implements OnInit {

  private edit:any = {
    titulo: "", estado: ""
  };

  constructor( private _servicio:EditService) {}

  ngOnInit(): void {
  }

  mandarDatos(){
    let titulo = (<HTMLInputElement>document.getElementById("titulo")).value;
  
    this._servicio.setEdit(titulo, this.edit.estado);
    console.log("Datos recibidos: ",titulo,", ",this.edit.estado);
  }
  
  setEstado(valor:any){
    this.edit.estado = valor;
    console.log(valor);
  }
}