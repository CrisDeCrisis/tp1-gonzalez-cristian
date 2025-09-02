import type { ICompetidor } from "../interfaces/ICompetidor.js";
import type { TDeporte } from "../types/TDeporte.js";
import type { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
  public nombre: string;
  public deporte: TDeporte;
  private jugadores: Jugador[] = [];

  constructor(nombre: string, deporte: TDeporte) {
    if (deporte !== "Basquet" && deporte !== "Futbol") {
      throw new Error("Deporte no válido.");
    }

    this.nombre = nombre;
    this.deporte = deporte;
  }

  get cantidad() {
    return this.jugadores.length;
  }

  agregarJugador(jugador: Jugador): void {
    this.jugadores.push(jugador);
  }

  listarIntegrantes(): Jugador[] {
    return this.jugadores;
  }

  toString(): void {
    console.log(`
    Nombre del equipo: ${this.nombre}
    Jugadores: ${this.jugadores.map((jugador) => jugador.toString()).join(", ")}
    `);
  }
}
