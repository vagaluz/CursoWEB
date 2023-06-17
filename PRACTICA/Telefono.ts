class Telefono {
    private tipo: string;
    private numero: string;
  
    constructor(tipo: string, numero: string) {
      this.tipo = tipo;
      this.numero = numero;
    }
  
    public getTipo(): string {
      return this.tipo;
    }
  
    public getNumero(): string {
      return this.numero;
    }
  }
  
  export default Telefono;
  