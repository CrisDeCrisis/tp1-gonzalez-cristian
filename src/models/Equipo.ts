import type { ICompetidor } from "../interfaces/ICompetidor.js";
import type { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
  public nombre: string;
  private jugadores: string[] = [];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  get cantidad() {
    return this.jugadores.length;
  }

  agregarJugador(jugador: Jugador): void {
    this.jugadores.push(jugador.nombre);
  }

  listarIntegrantes(): string[] {
    return this.jugadores;
  }

  toString(): void {
    console.log(`\nNombre del equipo: ${this.nombre}
Jugadores: ${this.jugadores.join(", ")}
    `);
  }
}
