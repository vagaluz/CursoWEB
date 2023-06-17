"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
// Crear registros de personas
var direccion1 = new Direccion_1.default("Calle 123", "1", "A", "", "28001", "Madrid", "Madrid");
var direccion2 = new Direccion_1.default("Avenida 456", "2", "B", "", "08001", "Barcelona", "Barcelona");
var direccion3 = new Direccion_1.default("Avenida Piox 12", "1", "B", "", "41012", "Pamplona", "Navarra");
var mail1 = new Mail_1.default("Personal", "juan@example.com");
var mail2 = new Mail_1.default("Trabajo", "juanperez@example.com");
var mail3 = new Mail_1.default("Personal", "maria@example.com");
var telefono1 = new Telefono_1.default("Móvil", "234556789");
var telefono2 = new Telefono_1.default("Trabajo", "875654321");
var telefono3 = new Telefono_1.default("Móvil", "678590123");
var persona1 = new Persona_1.default("Juan", "Mendez", 40, "12345678A", "01/01/1993", "Azul", "Hombre", [direccion1], [mail1], [telefono1], "");
var persona2 = new Persona_1.default("María Gregoria", "González", 30, "87654321B", "05/06/1995", "Verde", "Mujer", [direccion2], [mail2], [telefono2], "");
var persona3 = new Persona_1.default("Carlos Daniel", "Sánchez", 20, "56789012C", "10/11/1980", "Rojo", "Hombre", [direccion3], [mail3], [telefono3], "");
// Mostrar registros en la consola
console.log(persona1);
console.log(persona2);
console.log(persona3);
// Modificar un registro de persona por DNI y agregar nueva dirección, mail y teléfono
var dniBusqueda = "12345678A";
var personaEncontrada;
for (var _i = 0, _a = [persona1, persona2, persona3]; _i < _a.length; _i++) {
    var persona = _a[_i];
    if (persona.getDNI() === dniBusqueda) {
        personaEncontrada = persona;
        break;
    }
}
if (personaEncontrada) {
    // Hacer algo con la persona encontrada
}
else {
    // No se encontró ninguna persona con el DNI especificado
}
if (personaEncontrada) {
    var nuevaDireccion = new Direccion_1.default("Calle Nueva 456", "4", "", "28002", "Madrid", "Madrid", "Madrid");
    var nuevoMail = new Mail_1.default("Trabajo", "juanperez@example.org");
    var nuevoTelefono = new Telefono_1.default("Casa", "555555555");
    personaEncontrada.agregarDireccion(nuevaDireccion);
    personaEncontrada.agregarMail(nuevoMail);
    personaEncontrada.agregarTelefono(nuevoTelefono);
}
// Mostrar los registros modificados en la consola
console.log(persona1);
console.log(persona2);
console.log(persona3);
