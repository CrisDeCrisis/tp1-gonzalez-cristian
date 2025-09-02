import type { IIdentificador } from "../interfaces/IIdentificable.js";
import type { Partido } from "./Partido.js";
import { Futbol } from "./Futbol.js";
import { Basquet } from "./Basquet.js";
import { v7 as uuidv7 } from "uuid";

export class Torneo implements IIdentificador {
  public readonly id: string = uuidv7();
  public nombre: string;
  private partidos: Partido[] = [];

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  programarPartido(partido: Partido) {
    // Validar cupo de jugadores antes de programar el partido
    const deporte = partido.deporte;
    let validador;

    if (deporte === "Futbol") {
      validador = new Futbol();
    } else if (deporte === "Basquet") {
      validador = new Basquet();
    } else {
      throw new Error("Deporte no soportado para validación de cupo");
    }

    if (
      !validador.validar(partido.local) ||
      !validador.validar(partido.visitante)
    ) {
      throw new Error(
        "Alguno de los equipos no cumple con el cupo válido de jugadores. El partido no puede programarse."
      );
    }

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
