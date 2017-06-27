/* Ejercicio 1 "Manipulacion de Arreglos": Determina la multiplicacion de los
numeros del array e incluyendo num. Utilizando el metodo Reduce. */

//var multiplicacion = [4, 4, 5, 12]

function multi (arreglo, num){
  var multiplicacion = arreglo.reduce(function(acc, val) {

      return acc * val;

  }, num);

  return multiplicacion;
}



//document.write(multiplicacion);


/* Ejercicio 2 "Manipulacion de Arreglos": Tenemos un array que contiene
diversos numeros de celular. Utilizar el metodo Filter para quedarte solo
con los numeros validos. */

//var arrayNumbers = [784123123, 355676784, 3423543554];

function array2 (arrayNumbers){
  var filtered = arrayNumbers.filter(function(filtro) {
      var numStringFirst = filtro.toString().slice(0, 3);
      var numStringLast = filtro.toString().slice(-3);
      var num = 784;
      if (numStringFirst == num || numStringLast == num) {
          return filtro;
      }

  });
  return filtered;
}


//document.write(filtered);


/* Ejercicio 3 "Manipulacion de Arreglos": Queremos saber que numeros del array
son multiplos de 7. Utilizar el metodo forEach. */

//var array = [7, 21, 44, 80, 77, 35];

function array3(array){
  var multiplos = [];

  array.forEach(function(num) {
      if (num % 7 == 0) {
          multiplos.push(num);
      }
  });
  return multiplos;
}


//document.write(multiplos);


/* Ejercicio 4 "Manipulacion de Arreglos": Desarrolle una funcion que reciba un
arreglo y retorne un arreglo con el doble de cada una de las posiciones,
incrementando en 1. */

//var numbers = [2, 5, 7, 2, 3, 8, 10];

function array4(numbers){
  var doubles = numbers.map(function(x) {
      return x * 2 + 1;
  });
  return doubles;
}

//document.write(doubles);


/* Ejercicio 5 "Manipulacion de Arreglos": Desarrolle una funcion que reciba un
arreglo con temperaturas en Celsius y retorne un arreglo con las temperaturas
en grados Fahrenheit. Utiliza el metodo Map. */

//var celsius = [1, 5, 10, 15];

function array5(celsius){
  var toFahrenheit = celsius.map(function(c) {
      var resultado = (c * 1.8) + 32;
      return resultado.toFixed(1);
  });
  return toFahrenheit;
}


//document.write(toFahrenheit);


/* Ejercicio 6 "Manipulacion de Arreglos": Desarrolle una funcion que reciba un
arreglo y retorne el producto de sus elementos. */

//var arrMultiplicacion = [1, 2, 3, 4];

function multiplicacion(array) {

    var totalFinal = 1;

    for (var i = 0; i < array.length; i++) {

        totalFinal = array[i] * totalFinal;

    }

    return totalFinal;

}

//document.write(multiplicacion(arrMultiplicacion));


/* Ejercicio 7 "Manipulacion de Arreglos": Escriba una funcion que reciba un
arreglo de n posiciones, en cada una de estas posiciones esta una edad, debe
retornar los años de nacimiento de solo aquellas edades pares que sean
mayores de 18 años. */

//var ages = [20, 16, 89, 6];

function array6(ages){
  var years = ages.map(function(y) {

      var current_date = new Date()
      var cmm = current_date.getFullYear()

      if (y > 18) {

          return cmm - y;
      }

  });
  return years;
}

//document.write(years);


//Pruebas unitarias 1

var assert = require("assert");
describe("Multiplicacion de Arreglo",function(){
   it("Probando con este [4, 4, 5, 12] arreglo y este numero 9",function(){
   assert.equal(8640, multi([4, 4, 5, 12], 9));
   })
});

//Pruebas unitarias 2

var assert = require("assert");
describe("Filtrando telefonos",function(){
   it("Probando con este [784123123, 355676784, 3423543554] y este numero 784",function(){
   assert.deepEqual([784123123, 355676784], array2([784123123, 355676784, 3423543554]));
   })
});

// Pruebas unitarias 3

var assert = require("assert");
describe("Encontrar multiplos de 7",function(){
   it("Probando con este [7, 21, 44, 80, 77, 35] arreglo",function(){
   assert.deepEqual([7,21,77,35], array3([7, 21, 44, 80, 77, 35]));
   })
});

// Pruebas unitarias 4

var assert = require("assert");
describe("Recorrer el arreglo retornando el doble de cada elemento incrementando 1",function(){
   it("Probando con este [2, 5, 7, 2, 3, 8, 10] arreglo",function(){
   assert.deepEqual([5,11,15,5,7,17,21], array4([2, 5, 7, 2, 3, 8, 10]));
   })
});

// Pruebas unitarias 5

var assert = require("assert");
describe("Retornar un array de grados Celsius en Fahrenheit",function(){
   it("Probando con este [1, 5, 10, 15] arreglo",function(){
   assert.deepEqual([33.8,41.0,50.0,59.0], array5([1, 5, 10, 15]));
   })
});

// Pruebas unitarias 6

var assert = require("assert");
describe("Retornar el producto de todo un arreglo",function(){
   it("Probando con este [1, 2, 3, 4] arreglo",function(){
   assert.equal(24, multiplicacion([1, 2, 3, 4]));
   })
});

// Pruebas unitarias 7

var assert = require("assert");
describe("Retornar los años de nacimiento de las edades mayores a 18",function(){
   it("Probando con este [20, 16, 89, 6] arreglo",function(){
   assert.deepEqual([1997,,1928,], array6([20, 16, 89, 6]));
   })
});
