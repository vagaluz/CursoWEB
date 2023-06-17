"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    return Telefono;
}());
exports.default = Telefono;
