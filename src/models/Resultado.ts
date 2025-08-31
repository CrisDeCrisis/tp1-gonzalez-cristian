export class Resultado {
  public golesLocal: number;
  public golesVisitante: number;

  constructor(golesLocal: number, golesVisitante: number) {
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }

  toString(): void {
    console.log(`
    Resultado: 
        Local ${this.golesLocal} - ${this.golesVisitante} Visitante
    `);
  }
}
