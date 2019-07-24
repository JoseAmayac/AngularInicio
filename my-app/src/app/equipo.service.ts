import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[] = [
    {
      nombre:'Harbey',
      especialidad:'Gallinas',
      descripcion:'Es el chupador de culos de gallinas'
    },
    {
      nombre:'Fernanda',
      especialidad:'Leche',
      descripcion:'Es la que permite que tomemos leche en la casa'
    }
  ]
  constructor() { 
    console.log("Funcionando")
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerUnEquipo(i){
    return this.equipo[i];
  }
}
