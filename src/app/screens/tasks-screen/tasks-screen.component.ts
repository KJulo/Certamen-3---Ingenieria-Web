import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';
import { listaTareas } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-tasks-screen',
  templateUrl: './tasks-screen.component.html',
  styleUrls: ['./tasks-screen.component.scss']
})
export class TasksScreenComponent implements OnInit {

  //tareas de ejemplo

  public products:any
  tareas = listaTareas;
  constructor(private editService: EditService) {
    this.products = this.editService.getTasks();
  }


  ngOnInit(): void {
  }

}
