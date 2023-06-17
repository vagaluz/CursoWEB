import Persona from "./Persona";
import Direccion from "./Direccion";
import Mail from "./Mail";
import Telefono from "./Telefono";

// Crear registros de personas
const direccion1 = new Direccion("Calle 123", "1", "A", "", "28001", "Madrid", "Madrid");
const direccion2 = new Direccion("Avenida 456", "2", "B", "", "08001", "Barcelona", "Barcelona");
const direccion3 = new Direccion("Avenida Piox 12", "1", "B", "", "41012", "Pamplona", "Navarra");

const mail1 = new Mail("Personal", "juan@example.com");
const mail2 = new Mail("Trabajo", "juanperez@example.com");
const mail3 = new Mail("Personal", "maria@example.com");

const telefono1 = new Telefono("Móvil", "234556789");
const telefono2 = new Telefono("Trabajo", "875654321");
const telefono3 = new Telefono("Móvil", "678590123");

const persona1 = new Persona(
  "Juan",
  "Mendez",
  40,
  "12345678A",
  "01/01/1993",
  "Azul",
  "Hombre",
  [direccion1],
  [mail1],
  [telefono1],
  ""
);

const persona2 = new Persona(
  "María Gregoria",
  "González",
  30,
  "87654321B",
  "05/06/1995",
  "Verde",
  "Mujer",
  [direccion2],
  [mail2],
  [telefono2],
  ""
);

const persona3 = new Persona(
  "Carlos Daniel",
  "Sánchez",
  20,
  "56789012C",
  "10/11/1980",
  "Rojo",
  "Hombre",
  [direccion3],
  [mail3],
  [telefono3],
  ""
);

// Mostrar registros en la consola
console.log(persona1);
console.log(persona2);
console.log(persona3);

// Modificar un registro de persona por DNI y agregar nueva dirección, mail y teléfono
const dniBusqueda = "12345678A";

let personaEncontrada: Persona | undefined;
for (const persona of [persona1, persona2, persona3]) {
  if (persona.getDNI() === dniBusqueda) {
    personaEncontrada = persona;
    break;
  }
}

if (personaEncontrada) {
  // Hacer algo con la persona encontrada
} else {
  // No se encontró ninguna persona con el DNI especificado
}


if (personaEncontrada) {
  const nuevaDireccion = new Direccion("Calle Nueva 456", "4", "", "28002", "Madrid", "Madrid", "Madrid");
  const nuevoMail = new Mail("Trabajo", "juanperez@example.org");
  const nuevoTelefono = new Telefono("Casa", "555555555");

  personaEncontrada.agregarDireccion(nuevaDireccion);
  personaEncontrada.agregarMail(nuevoMail);
  personaEncontrada.agregarTelefono(nuevoTelefono);
}

// Mostrar los registros modificados en la consola
console.log(persona1);
console.log(persona2);
console.log(persona3);

