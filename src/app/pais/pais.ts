export class Pais {
  id: number;
  nombre: string;
  latitud: any;
  longitud: any;

  constructor(id: number,nombre: string,lat: any,
              lon: any){
    this.id = id;
    this.nombre = nombre;
    this.latitud = lat;
    this.longitud =  lon;
  }
}
