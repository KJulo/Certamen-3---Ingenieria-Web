import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private edit:any = {
    titulo: "", estado: ""
  };

  constructor() {
    console.log("servicio funcionando");
  }

  obtenerDatos(){
    
  }

  setEdit(titulo:any, estado:any){
    this.edit.titulo = titulo;
    this.edit.estado = estado;
  }

  getEdit(){
    return this.edit;
  }
}
