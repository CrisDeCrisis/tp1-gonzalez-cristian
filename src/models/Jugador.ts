import { v7 as uuidv7 } from "uuid";
import type { IIdentificador } from "../interfaces/IIdentificable.js";

export class Jugador implements IIdentificador {
  public readonly id: string = uuidv7();
  public nombre: string;
  public edad: number;
  public posicion: string;

  constructor(nombre: string, edad: number, posicion?: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion ? posicion : "No especificado";
  }

  toString(): void {
    console.log(`
    Nombre del jugador: ${this.nombre}
    Edad: ${this.edad}
    Posición: ${this.posicion}
    `);
  }
}
