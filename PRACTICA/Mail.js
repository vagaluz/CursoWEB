"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Mail;
}());
exports.default = Mail;
