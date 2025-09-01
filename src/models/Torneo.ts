import type { IIdentificador } from "../interfaces/IIdentificable.js";
import type { Partido } from "./Partido.js";
import { v7 as uuidv7 } from "uuid";

export class Torneo implements IIdentificador {
  public readonly id: string = uuidv7();
  public nombre: string;
  private partidos: Partido[] = [];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  programarPartido(partido: Partido) {
    this.partidos.push(partido);
  }

  listarPartidos(): Partido[] {
    return this.partidos;
  }

  buscarPartido(id: string): Partido {
    const partido = this.partidos.find((partido) => partido.id === id);

    if (!partido) {
      throw new Error("No se encontraron partidos con ese ID");
    }

    return partido;
  }
}
