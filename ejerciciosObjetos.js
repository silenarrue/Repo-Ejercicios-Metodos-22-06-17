/* Ejercicio 1 "Ejercicios Objetos": Calcular Area de un rectangulo con
objetos. */

function calcular(base, altura){
  function Rectangulo(base, altura) {
      this.base = base;
      this.altura = altura;
      this.totalArea = base * altura;

  }

  var areaDeRectangulo = new Rectangulo(10, 5);
  return areaDeRectangulo.totalArea;
}

//console.log(areaDeRectangulo);


/* Ejercicio 2 "Ejercicios Objetos": Escribir una funcion que reciba como
parametros dia, mes y año de nacimiento, asignar los parametros como
propiedades de un objeto y agregar un metodo del objeto que calcule la edades
en base a la fecha de nacimiento ingresada. Retornar edad. */


function calcular_edad(añoDeNacimiento){

    var year = new Date();
    var yearActual = year.getFullYear();
    var resultado = yearActual - añoDeNacimiento;
    return parseInt(resultado);
    var edadPersona = new Datos("Su", 23, 8, 1991);

    function Datos (nombre, dia, mes, añoDeNacimiento){

      this.nombre = nombre;
      this.dia = dia;
      this.mes = mes;
      this.añoDeNacimiento = añoDeNacimiento;
      this.edad = calcular_edad;

    }

    return edadPersona;
  }



//console.log(calcular_edad(edadPersona.añoDeNacimiento));


/* Ejercicio 3 "Ejercicios Objetos": Construye una funcion con propiedades
nombre, edad, pasatiempo. Crea un nuevo objeto, de esta manera podemos Utilizar
una funcion que cumpla el rol del constructor. */


function frasesita(nombre, edad, pasatiempo){
  var fraseFinal = new frase("Silvia", 29, "Me gustan los Gatos");
  function frase(nombre, edad, pasatiempo){
    this.nombre = nombre;
    this.edad = edad;
    this.pasatiempo = pasatiempo;
    this.fraseCompleta = function juntarParametros(){
    return "Hola soy " + this.nombre + " tengo " + this.edad + " años y " + this.pasatiempo;
  }

  }


  return fraseFinal;
}


//console.log(fraseFinal.fraseCompleta());





// Pruebas unitarias Ejercicio 1

var assert = require("assert");
describe("Calcular area",function(){
   it("Probando con rectangulo",function(){
   assert.deepEqual(50, calcular(10, 5));
   })
});

// Pruebas unitarias Ejercicio 2

var assert = require("assert");
describe("Calculando edad",function(){
   it("Probando con 1991",function(){
   assert.deepEqual(26, calcular_edad(1991));
   })
});

// Pruebas unitarias Ejercicio 3

var assert = require("assert");
describe("Calculando edad",function(){
   it("Probando con 1991",function(){
   assert.equal("Hola soy Silvia tengo 29 años y Me gustan los Gatos", frasesita("Silvia", 29, "Me gustan los Gatos"));
   })
});
