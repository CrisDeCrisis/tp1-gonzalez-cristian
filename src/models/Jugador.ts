export class Jugador {
  public id: string;
  public nombre: string;
  public edad: number;
  public posicion: string;

  constructor(id: string, nombre: string, edad: number, posicion?: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion ? posicion : "No especificado";
  }

  toString(): void {
    console.log(`\nNombre del jugador: ${this.nombre}
Edad: ${this.edad}
Posición: ${this.posicion}    
    `);
  }
}
