class Direccion {
    private calle: string;
    private numero: string;
    private piso: string;
    private letra: string;
    private codigoPostal: string;
    private poblacion: string;
    private provincia: string;
  
    constructor(
      calle: string,
      numero: string,
      piso: string,
      letra: string,
      codigoPostal: string,
      poblacion: string,
      provincia: string
    ) {
      this.calle = calle;
      this.numero = numero;
      this.piso = piso;
      this.letra = letra;
      this.codigoPostal = codigoPostal;
      this.poblacion = poblacion;
      this.provincia = provincia;
    }
  
    public getCalle(): string {
      return this.calle;
    }
  
    public getNumero(): string {
      return this.numero;
    }
  
    public getPiso(): string {
      return this.piso;
    }
  
    public getLetra(): string {
      return this.letra;
    }
  
    public getCodigoPostal(): string {
      return this.codigoPostal;
    }
  
    public getPoblacion(): string {
      return this.poblacion;
    }
  
    public getProvincia(): string {
      return this.provincia;
    }
  }
  
  export default Direccion;
  