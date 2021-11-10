import { Injectable } from '@angular/core';

import { tarea, actualizarDatos } from 'src/app/models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private edit:any = {
    id: "",titulo: "", estado: ""
  };


  private tasks:any = [
    {titulo: "asdad", estado: "Iniciado"},
    {titulo: "asdad", estado: "Iniciado"},
    {titulo: "asdad", estado: "En proceso"},
    {titulo: "asdad", estado: "En proceso"},
    {titulo: "asdad", estado: "Terminado"}
  ]

  constructor() {}

  setEdit(id:any, titulo:any, estado:any){
    this.edit.id = id;
    this.edit.titulo = titulo;
    this.edit.estado = estado;
    actualizarDatos(id, titulo, estado);
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
