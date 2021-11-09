import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  estados = [
    { title: 'Iniciada', color: 'red'},
    { title: 'En proceso', color: 'yellow'},
    { title: 'Terminado', color: 'green'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
