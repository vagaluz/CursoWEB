"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanios, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    Persona.prototype.getCumpleanios = function () {
        return this.cumpleanios;
    };
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.getMails = function () {
        return this.mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setDirecciones = function (direcciones) {
        this.direcciones = direcciones;
    };
    Persona.prototype.setMails = function (mails) {
        this.mails = mails;
    };
    Persona.prototype.setTelefonos = function (telefonos) {
        this.telefonos = telefonos;
    };
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    return Persona;
}());
exports.default = Persona;
