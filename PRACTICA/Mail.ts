class Mail {
    private tipo: string;
    private direccion: string;
  
    constructor(tipo: string, direccion: string) {
      this.tipo = tipo;
      this.direccion = direccion;
    }
  
    public getTipo(): string {
      return this.tipo;
    }
  
    public getDireccion(): string {
      return this.direccion;
    }
  }
  
  export default Mail;
  