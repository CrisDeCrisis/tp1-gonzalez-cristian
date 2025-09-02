import type { IIdentificador } from "../interfaces/IIdentificable.js";
import type { TDeporte } from "../types/TDeporte.js";
import type { Equipo } from "./Equipo.js";
import { v7 as uuidv7 } from "uuid";

export class Partido implements IIdentificador {
  public readonly id: string = uuidv7();
  public local: Equipo;
  public visitante: Equipo;
  public deporte: TDeporte;
  public resultado?: string = "Próxima fecha";

  constructor(local: Equipo, visitante: Equipo, deporte: TDeporte) {
    if (local === visitante) {
      throw new Error("El equipo local y el visitante deben ser distintos.");
    }

    if (local.deporte !== deporte || visitante.deporte !== deporte) {
      throw new Error(
        "Los equipos deben pertenecer al mismo deporte del partido."
      );
    }

    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
  }

  jugar(resultado: string) {
    this.resultado = resultado;
  }

  toString(): void {
    console.log(`
    Local: ${this.local}, 
    Visitante: ${this.visitante}, 
    Deporte: ${this.deporte}, 
    Resultado: ${this.resultado}`);
  }
}
