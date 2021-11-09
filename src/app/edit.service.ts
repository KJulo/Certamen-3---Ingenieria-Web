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

  getEdit(){
    return this.edit;
  }
}
