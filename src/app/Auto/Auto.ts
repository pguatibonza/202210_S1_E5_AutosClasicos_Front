export class Auto {
  id:number;
  modelo: string;
  precio: any;
  caracteristicas: string;
  descripcion: string;
  anioLanzamiento: number;

  constructor(
    id:number,
    modelo: string,
    precio: any,
    caracteristicas: string,
    descripcion: string,
    anioLanzamiento: number,

){this.id = id;
  this.modelo = modelo;
  this.precio = precio;
  this.caracteristicas = caracteristicas;
  this.descripcion = descripcion;
  this.anioLanzamiento = anioLanzamiento;


}


}
