import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';
import { listaTareas, tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-tasks-screen',
  templateUrl: './tasks-screen.component.html',
  styleUrls: ['./tasks-screen.component.scss']
})
export class TasksScreenComponent implements OnInit {


  public products:any
  tareas = listaTareas;


  constructor() {

  }


  ngOnInit(): void {
  }

  eliminar(id:number){

  }

}
