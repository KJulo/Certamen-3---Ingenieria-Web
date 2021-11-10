import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { EditService } from 'src/app/edit.service';
import { listaTareas, tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-tasks-screen',
  templateUrl: './tasks-screen.component.html',
  styleUrls: ['./tasks-screen.component.scss']
})
export class TasksScreenComponent implements OnInit {

  //tareas de ejemplo

  public products:any
  tareas = listaTareas;


  constructor() {

  }


  ngOnInit(): void {
  }

  eliminar(id:number){
    let index:any = this.tareas.find((tarea:tarea) => tarea._id === id);


    let indexReal:any = this.tareas.indexOf(index);
    this.tareas.splice(indexReal,1);
  }

}
