import { Equipo } from "../../models/Equipo.js";

// 8 equipos de básquet, cada uno con 5 jugadores
export const equiposBasquet: Equipo[] = [
  new Equipo("Chicago Bulls", "Basquet"),
  // En caso de probar validacion de deporte
  // Descomentar la linea de abajo, y comentar la linea de arriba
  // new Equipo("Chicago Bulls", "Futbol"),
  new Equipo("Los Angeles Lakers", "Basquet"),
  new Equipo("Boston Celtics", "Basquet"),
  new Equipo("Golden State Warriors", "Basquet"),
  new Equipo("San Antonio Spurs", "Basquet"),
  new Equipo("Miami Heat", "Basquet"),
  new Equipo("Houston Rockets", "Basquet"),
  new Equipo("New York Knicks", "Basquet"),
];
