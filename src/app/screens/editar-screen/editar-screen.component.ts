import { Component, OnInit } from '@angular/core';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-editar-screen',
  templateUrl: './editar-screen.component.html',
  styleUrls: ['./editar-screen.component.scss']
})
export class EditarScreenComponent implements OnInit {

  constructor( private _servicio:EditService) {
    
  }

  ngOnInit(): void {
  }

}
