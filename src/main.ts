import { equiposFutbol } from "./constants/futbol/equiposFutbol.mock.js";
import { jugadoresFutbol } from "./constants/futbol/jugadoresFutbol.mock.js";
import { equiposBasquet } from "./constants/basquet/equiposBasquet.mock.js";
import { jugadoresBasquet } from "./constants/basquet/jugadoresBasquet.mock.js";
import { Futbol } from "./models/Futbol.js";
import { Basquet } from "./models/Basquet.js";
import { Torneo } from "./models/Torneo.js";
import { Partido } from "./models/Partido.js";

// Crear instancias de deportes
const futbol = new Futbol();
const basquet = new Basquet();

// Asignar jugadores a equipos de fútbol
equiposFutbol.forEach((equipo) => {
  const plantel = jugadoresFutbol[equipo.nombre];
  if (plantel) {
    plantel.forEach((jugador) => equipo.agregarJugador(jugador));
  }
});

// Asignar jugadores a equipos de básquet
equiposBasquet.forEach((equipo) => {
  const plantel = jugadoresBasquet[equipo.nombre];
  if (plantel) {
    plantel.forEach((jugador) => equipo.agregarJugador(jugador));
  }
});

// Validar cupos por deporte (deben tener la cantidad máxima por equipo)
console.log("\nValidación de cupos de equipos de Fútbol:");
equiposFutbol.forEach((equipo) => {
  const nombresJugadores = equipo
    .listarIntegrantes()
    .map((j) => j.nombre)
    .join(", ");
  console.log(
    `\nEquipo: ${equipo.nombre} 
    - Jugadores: [${nombresJugadores}] (${equipo.cantidad}) 
    - Cupo válido: ${futbol.validar(equipo)}`
  );
});

console.log("\nValidación de cupos de equipos de Básquet:");
equiposBasquet.forEach((equipo) => {
  const nombresJugadores = equipo
    .listarIntegrantes()
    .map((j) => j.nombre)
    .join(", ");
  console.log(
    `\nEquipo: ${equipo.nombre} 
    - Jugadores: [${nombresJugadores}] (${equipo.cantidad}) 
    - Cupo válido: ${basquet.validar(equipo)}`
  );
});

// Crear torneos con cupo para 4 equipos
const torneoFutbol = new Torneo("Torneo de Fútbol");
const torneoBasquet = new Torneo("Torneo de Básquet");

// Filtrar posibles undefined por seguridad de tipos
const equiposFutbolTorneo = equiposFutbol.slice(0, 4).filter(Boolean);
const equiposBasquetTorneo = equiposBasquet.slice(0, 4).filter(Boolean);

// Crear y jugar partidos (validando que los equipos sean del mismo deporte)
console.log("\nCreando y jugando partidos de Fútbol:\n");
try {
  if (equiposFutbolTorneo.length >= 4) {
    // const partidoF1 = new Partido(
    //   equiposFutbolTorneo[0] as any,
    //   equiposFutbolTorneo[0] as any,
    //   "Futbol"
    // );
    // Para probar que los equipos no pueden ser el mismo (local | visitante)
    // Se puede descomentar la linea de arriba, y comentar la linea de abajo
    const partidoF1 = new Partido(
      equiposFutbolTorneo[0] as any,
      equiposFutbolTorneo[1] as any,
      "Futbol"
    );
    partidoF1.jugar("2-1");
    torneoFutbol.programarPartido(partidoF1);
    // Mostrar información detallada del partido
    console.log(
      `Partido 1: ${partidoF1.local.nombre} vs ${partidoF1.visitante.nombre} | Resultado: ${partidoF1.resultado}`
    );
    console.log(
      `  Local: 
      [${partidoF1.local
        .listarIntegrantes()
        .map((j) => j.nombre)
        .join(", ")}]`
    );
    console.log(
      `  Visitante: 
      [${partidoF1.visitante
        .listarIntegrantes()
        .map((j) => j.nombre)
        .join(", ")}]`
    );

    const partidoF2 = new Partido(
      equiposFutbolTorneo[2] as any,
      equiposFutbolTorneo[3] as any,
      "Futbol"
    );
    partidoF2.jugar("0-0");
    torneoFutbol.programarPartido(partidoF2);
    console.log(
      `Partido 2: ${partidoF2.local.nombre} vs ${partidoF2.visitante.nombre} | Resultado: ${partidoF2.resultado}`
    );
    console.log(
      `  Local: 
      [${partidoF2.local
        .listarIntegrantes()
        .map((j) => j.nombre)
        .join(", ")}]`
    );
    console.log(
      `  Visitante: 
      [${partidoF2.visitante
        .listarIntegrantes()
        .map((j) => j.nombre)
        .join(", ")}]`
    );
  } else {
    console.error("No hay suficientes equipos de fútbol para el torneo.");
  }
} catch (e) {
  console.error(e);
}

console.log("\nCreando y jugando partidos de Básquet:\n");
try {
  if (equiposBasquetTorneo.length >= 4) {
    const partidoB1 = new Partido(
      equiposBasquetTorneo[0] as any,
      equiposBasquetTorneo[1] as any,
      "Basquet"
    );
    partidoB1.jugar("98-95");
    torneoBasquet.programarPartido(partidoB1);
    console.log(
      `Partido 1: ${partidoB1.local.nombre} vs ${partidoB1.visitante.nombre} | Resultado: ${partidoB1.resultado}`
    );
    console.log(
      `  Local: 
      [${partidoB1.local
        .listarIntegrantes()
        .map((j) => j.nombre)
        .join(", ")}]`
    );
    console.log(
      `  Visitante: 
      [${partidoB1.visitante
        .listarIntegrantes()
        .map((j) => j.nombre)
        .join(", ")}]`
    );

    const partidoB2 = new Partido(
      equiposBasquetTorneo[2] as any,
      equiposBasquetTorneo[3] as any,
      "Basquet"
    );
    partidoB2.jugar("110-102");
    torneoBasquet.programarPartido(partidoB2);
    console.log(
      `Partido 2: ${partidoB2.local.nombre} vs ${partidoB2.visitante.nombre} | Resultado: ${partidoB2.resultado}`
    );
    console.log(
      `  Local: 
      [${partidoB2.local
        .listarIntegrantes()
        .map((j) => j.nombre)
        .join(", ")}]`
    );
    console.log(
      `  Visitante: 
      [${partidoB2.visitante
        .listarIntegrantes()
        .map((j) => j.nombre)
        .join(", ")}]`
    );
  } else {
    console.error("No hay suficientes equipos de básquet para el torneo.");
  }
} catch (e) {
  console.error(e);
}

// Demostración de polimorfismo con validar()
console.log("\nDemostración de polimorfismo con validar():");

const deportes: any[] = [futbol, basquet];
const equiposDemo = [equiposFutbolTorneo[0], equiposBasquetTorneo[0]];
deportes.forEach((deporte, i) => {
  const equipo = equiposDemo[i];
  if (equipo) {
    console.log(
      ` - ¿${equipo.nombre} cumple cupo en ${deporte.nombre}?`,
      deporte.validar(equipo)
    );
  } else {
    console.log(`Equipo no disponible para ${deporte.nombre}`);
  }
});
