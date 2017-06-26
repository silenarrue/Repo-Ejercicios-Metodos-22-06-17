/* Ejercicio 1 "Manipulacion de Arreglos": Determina la multiplicacion de los
numeros del array e incluyendo num. Utilizando el metodo Reduce. */

var multiplicacion = [4, 4, 5, 12].reduce(function(acc, val) {

    return acc * val;

}, 9);

document.write(multiplicacion);


/* Ejercicio 2 "Manipulacion de Arreglos": Tenemos un array que contiene
diversos numeros de celular. Utilizar el metodo Filter para quedarte solo
con los numeros validos. */

var arrayNumbers = [784123123, 355676784, 3423543554];


var filtered = arrayNumbers.filter(function(filtro) {
    var numStringFirst = filtro.toString().slice(0, 3);
    var numStringLast = filtro.toString().slice(-3);
    var num = 784;
    if (numStringFirst == num || numStringLast == num) {
        return filtro;
    }

});

document.write(filtered);


/* Ejercicio 3 "Manipulacion de Arreglos": Queremos saber que numeros del array
son multiplos de 7. Utilizar el metodo forEach. */

var array = [7, 21, 44, 80, 77, 35];
var multiplos = [];

array.forEach(function(num) {
    if (num % 7 == 0) {
        multiplos.push(num);
    }

});

document.write(multiplos);


/* Ejercicio 4 "Manipulacion de Arreglos": Desarrolle una funcion que reciba un
arreglo y retorne un arreglo con el doble de cada una de las posiciones,
incrementando en 1. */

var numbers = [2, 5, 7, 2, 3, 8, 10];
var doubles = numbers.map(function(x) {
    return x * 2 + 1;
});

document.write(doubles);


/* Ejercicio 5 "Manipulacion de Arreglos": Desarrolle una funcion que reciba un
arreglo con temperaturas en Celsius y retorne un arreglo con las temperaturas
en grados Fahrenheit. Utiliza el metodo Map. */

var celsius = [1, 5, 10, 15];
var toFahrenheit = celsius.map(function(c) {
    var resultado = (c * 1.8) + 32;
    return resultado.toFixed(1);
});

document.write(toFahrenheit);


/* Ejercicio 6 "Manipulacion de Arreglos": Desarrolle una funcion que reciba un
arreglo y retorne el producto de sus elementos. */

var arrMultiplicacion = [1, 2, 3, 4];

function multiplicacion(array) {

    var totalFinal = 1;

    for (var i = 0; i < array.length; i++) {

        totalFinal = array[i] * totalFinal;

    }

    return totalFinal;

}

document.write(multiplicacion(arrMultiplicacion));


/* Ejercicio 7 "Manipulacion de Arreglos": Escriba una funcion que reciba un
arreglo de n posiciones, en cada una de estas posiciones esta una edad, debe
retornar los años de nacimiento de solo aquellas edades pares que sean
mayores de 18 años. */

var ages = [20, 16, 89, 6];
var years = ages.map(function(y) {

    var current_date = new Date()
    var cmm = current_date.getFullYear()

    if (y > 18) {

        return cmm - y;
    }

});

document.write(years);
