
    import Direccion from "./Direccion";
    import Mail from "./Mail";
    import Telefono from "./Telefono";
    
    class Persona {
      private nombre: string;
      private apellidos: string;
      private edad: number;
      private dni: string;
      private cumpleanios: string;
      private colorFavorito: string;
      private sexo: string;
      private direcciones: Direccion[];
      private mails: Mail[];
      private telefonos: Telefono[];
      private notas: string;
    
      constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        dni: string,
        cumpleanios: string,
        colorFavorito: string,
        sexo: string,
        direcciones: Direccion[],
        mails: Mail[],
        telefonos: Telefono[],
        notas: string
      ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanios = cumpleanios;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
      }
    
      public getNombre(): string {
        return this.nombre;
      }
    
      public getApellidos(): string {
        return this.apellidos;
      }
    
      public getEdad(): number {
        return this.edad;
      }
    
      public getDNI(): string {
        return this.dni;
      }
    
      public getCumpleanios(): string {
        return this.cumpleanios;
      }
    
      public getColorFavorito(): string {
        return this.colorFavorito;
      }
    
      public getSexo(): string {
        return this.sexo;
      }
    
      public getDirecciones(): Direccion[] {
        return this.direcciones;
      }
    
      public getMails(): Mail[] {
        return this.mails;
      }
    
      public getTelefonos(): Telefono[] {
        return this.telefonos;
      }
    
      public getNotas(): string {
        return this.notas;
      }
    
      public setDirecciones(direcciones: Direccion[]): void {
        this.direcciones = direcciones;
      }
    
      public setMails(mails: Mail[]): void {
        this.mails = mails;
      }
    
      public setTelefonos(telefonos: Telefono[]): void {
        this.telefonos = telefonos;
      }
    
      public agregarDireccion(direccion: Direccion): void {
        this.direcciones.push(direccion);
      }
    
      public agregarMail(mail: Mail): void {
        this.mails.push(mail);
      }
    
      public agregarTelefono(telefono: Telefono): void {
        this.telefonos.push(telefono);
      }
    }
    
    export default Persona;
    

  