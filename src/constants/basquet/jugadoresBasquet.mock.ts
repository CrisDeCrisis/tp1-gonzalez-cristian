import { Jugador } from "../../models/Jugador.js";

// Planteles emblemáticos de 8 equipos de básquet (NBA)
export const jugadoresBasquet: Record<string, Jugador[]> = {
  "Chicago Bulls": [
    new Jugador("Michael Jordan", 35, "Escolta"),
    new Jugador("Scottie Pippen", 33, "Alero"),
    new Jugador("Dennis Rodman", 37, "Ala-Pívot"),
    new Jugador("Ron Harper", 35, "Base"),
    new Jugador("Luc Longley", 30, "Pívot"),
  ],
  "Los Angeles Lakers": [
    new Jugador("Magic Johnson", 32, "Base"),
    new Jugador("Kobe Bryant", 28, "Escolta"),
    new Jugador("James Worthy", 29, "Alero"),
    new Jugador("Pau Gasol", 30, "Ala-Pívot"),
    new Jugador("Shaquille O'Neal", 28, "Pívot"),
  ],
  "Boston Celtics": [
    new Jugador("Bob Cousy", 34, "Base"),
    new Jugador("John Havlicek", 32, "Escolta"),
    new Jugador("Larry Bird", 33, "Alero"),
    new Jugador("Kevin McHale", 32, "Ala-Pívot"),
    new Jugador("Bill Russell", 36, "Pívot"),
  ],
  "Golden State Warriors": [
    new Jugador("Stephen Curry", 31, "Base"),
    new Jugador("Klay Thompson", 29, "Escolta"),
    new Jugador("Andre Iguodala", 33, "Alero"),
    new Jugador("Draymond Green", 29, "Ala-Pívot"),
    new Jugador("Andrew Bogut", 30, "Pívot"),
  ],
  "San Antonio Spurs": [
    new Jugador("Tony Parker", 30, "Base"),
    new Jugador("Manu Ginóbili", 32, "Escolta"),
    new Jugador("Kawhi Leonard", 27, "Alero"),
    new Jugador("Tim Duncan", 35, "Ala-Pívot"),
    new Jugador("David Robinson", 36, "Pívot"),
  ],
  "Miami Heat": [
    new Jugador("Tim Hardaway", 32, "Base"),
    new Jugador("Dwyane Wade", 28, "Escolta"),
    new Jugador("LeBron James", 29, "Alero"),
    new Jugador("Chris Bosh", 30, "Ala-Pívot"),
    new Jugador("Alonzo Mourning", 34, "Pívot"),
  ],
  "Houston Rockets": [
    new Jugador("Kenny Smith", 31, "Base"),
    new Jugador("Clyde Drexler", 33, "Escolta"),
    new Jugador("Robert Horry", 28, "Alero"),
    new Jugador("Otis Thorpe", 32, "Ala-Pívot"),
    new Jugador("Hakeem Olajuwon", 34, "Pívot"),
  ],
  "New York Knicks": [
    new Jugador("Walt Frazier", 32, "Base"),
    new Jugador("Allan Houston", 30, "Escolta"),
    new Jugador("Latrell Sprewell", 29, "Alero"),
    new Jugador("Charles Oakley", 34, "Ala-Pívot"),
    new Jugador("Patrick Ewing", 35, "Pívot"),
  ],
};
