import type { TDeporte, TMaxPorEquipo } from "../types/TDeporte.js";
import type { Equipo } from "./Equipo.js";

export abstract class Deporte {
  public nombre: TDeporte;
  public maxPorEquipo: TMaxPorEquipo;

  constructor(nombre: TDeporte, maxPorEquipo: TMaxPorEquipo) {
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
  }

  abstract validar(equipo: Equipo): boolean;
}
