/* ejercicio : Multiplos
crear un metodo esMultiplo con 2 parametros que devuelva el valor logico de
verdadero o falso segun si el primer numero que se indique como
parametro es igual del segundo.
recuerde que la operacion mod permite saber si el resto de una division es cero. */

let parametro1: number = Number(prompt(" ingrese primer numero"));
let parametro2: number = Number(prompt("ingrese segundo numero"));

function esMultiplo(parametro1: number, parametro2: number) {
  if (parametro1 % parametro2) {
    return true;
  } else {
    return false;
  }
}

console.log(
  "el numero" + "",
  parametro1 + " es multiplo de" + "",
  parametro2 + "",
  "?",
  esMultiplo(parametro1, parametro2)
);
