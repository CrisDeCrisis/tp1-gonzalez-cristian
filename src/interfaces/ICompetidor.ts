import type { Jugador } from "../models/Jugador.js";

export interface ICompetidor {
  nombre: string;
  listarIntegrantes(): Jugador[];
}
