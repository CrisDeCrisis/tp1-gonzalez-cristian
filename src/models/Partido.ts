import type { IIdentificador } from "../interfaces/IIdentificable.js";
import type { TDeporte } from "../types/TDeporte.js";
import { v7 as uuidv7 } from "uuid";

export class Partido implements IIdentificador {
  public readonly id: string = uuidv7();
  public local: string;
  public visitante: string;
  public deporte: TDeporte;
  public resultado?: string = "Próxima fecha";

  constructor(local: string, visitante: string, deporte: TDeporte) {
    if (local === visitante) {
      throw new Error("El equipo local y el visitante deben ser distintos.");
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
