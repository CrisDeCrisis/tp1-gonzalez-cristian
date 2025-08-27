import type { ICompetidor } from "../interfaces/ICompetidor.js";
import type { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
  public nombre: string;
  private jugadores: string[] = [];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  agregarJugador(jugador: Jugador): void {
    this.jugadores.push(jugador.nombre);
  }

  listarIntegrantes(): string[] {
    return this.jugadores;
  }

  toString(): void {}
}
