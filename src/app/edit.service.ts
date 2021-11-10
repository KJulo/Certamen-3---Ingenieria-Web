import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private edit:any = {
    titulo: "", estado: ""
  };




  private tasks:any = [
    {titulo: "", estado: ""},
    {titulo: "asdad", estado: "asdads"}
  ]

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

  getTasks(){
    return this.tasks;
  }

  setTasks(task:any){
    this.tasks.append(task);
  }
}
