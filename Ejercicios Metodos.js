/* Ejercicio 1 "Manipulacion de Arreglos": Determina la multiplicacion de los
numeros del array e incluyendo num. */

var multiplicacion = [4, 4, 5, 12].reduce(function(acc, val) {

    return acc * val;

}, 9);

document.write(multiplicacion);
