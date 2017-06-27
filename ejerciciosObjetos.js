//                ********Aqui empieza Objetos I*********


/* Ejercicio 1 Objetos I: Calcular Area de un rectangulo con
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


/* Ejercicio 2 Objetos I: Escribir una funcion que reciba como
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


/* Ejercicio 3 Objetos I : Construye una funcion con propiedades
nombre, edad, pasatiempo. Crea un nuevo objeto, de esta manera podemos Utilizar
una funcion que cumpla el rol del constructor. */


function frase(nombre, edad, pasatiempo){
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.fraseCompleta = function juntarParametros(){
  return "Hola soy " + this.nombre + " tengo " + this.edad + " años y " + this.pasatiempo;
}

}

var fraseFinal = new frase("Silvia", 29, "Me gustan los Gatos");

//console.log(fraseFinal.fraseCompleta());



//                ********Aqui empieza Objetos II*********



/* Ejercicio 1 Objetos II */

function suma(numInicial, numFinal) {
  var objeto = {

      inicio: numInicial,
      fin: numFinal,
      metodo:function(){
        var resultado = 0;
        for (var i = objeto.inicio; i <= objeto.fin; i++) {
            resultado += i;

        }
return resultado;
      }
  }
return objeto.metodo();
}

//return suma(objeto.inicio, objeto.fin);


/* Ejercicio 2 Objetos II */

function datosCoder(nombre, edad, ocupacion, genero) {
function Coder(nombre, edad, ocupacion, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.genero = genero;
    this.mensajeFinal = function mensaje(edad) {
        if (edad > 18) {
            return "You are Awesome!!";
        } else {
            return "Upsiiii!!";
        }
    }
}

    var coderMensaje = new Coder("Tamara", 22, "Estudiante Laboratoria", "Femenino");
    return coderMensaje.mensajeFinal(coderMensaje.edad);
}


/* Ejercicio 3 Objetos II*/

//var arr = [6, 5, 4, 3, 2, 1];

function concatenar(arr) {
    var texto = {
        propiedad1: 6,
        propiedad2: 5,
        propiedad3: 4,
        propiedad4: 3,
        propiedad5: 2,
        propiedad6: 1,
    }
    var texto = {};
    for (var i = 1; i <= arr.length; ++i) {
        texto["propiedad" + i] = arr[i - 1];
    }
    var resultado = "";
    Object.getOwnPropertyNames(texto).forEach(function(propiedad) {

        resultado += propiedad + ' -> ' + texto[propiedad] + ";";

    });
    resultado = resultado.slice(0, -1);
return resultado;
}


/* Ejercicio 4 Objetos II*/

function clinica(nombre, apellido, edad, genero, ciudad, pais){
  function clinicaLab(nombre, apellido, edad, genero, ciudad, pais) {

      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.genero = genero;
      this.ciudad = ciudad;
      this.pais = pais;
      this.fichaPaciente = function(nombre, apellido, edad, pais) {
          return "Nombre: " + this.nombre + " " + this.apellido + " ," + "Edad: " + this.edad + " ," + "Pais: " + this.pais;
      }

  }

  var paciente = new clinicaLab("Blanca", "Perez", 23, "Femenino", "Santiago", "Chile");

  return paciente.fichaPaciente(paciente.nombre, paciente.apellido, paciente.edad, paciente.pais);
}








//          ********Aqui empieza pruebas unitarias Objetos I*********



// Pruebas unitarias Ejercicio 1 Objetos I

var assert = require("assert");
describe("Calcular area",function(){
   it("Probando con rectangulo",function(){
   assert.deepEqual(50, calcular(10, 5));
   })
});

// Pruebas unitarias Ejercicio 2 Objetos I

var assert = require("assert");
describe("Calculando edad",function(){
   it("Probando con 1991",function(){
   assert.deepEqual(26, calcular_edad(1991));
   })
});

// Pruebas unitarias Ejercicio 3 Objetos I

var assert = require("assert");
describe("Calculando edad",function(){
   it("Probando con 1991",function(){
   assert.equal("Hola soy Silvia tengo 29 años y Me gustan los Gatos", frase("Silvia", 29, "Me gustan los Gatos"));
   })
});


//          ********Aqui empieza pruebas unitarias Objetos II*********



//Pruebas unitarias ejercicio 1 Objetos II


describe("Suma valores de un objeto",function(){
   it("Probando con este objeto objeto{inicio: 1, fin: 10}",function(){
   assert.equal(55, suma(1, 10));
 });
});

//Pruebas unitarias ejercicio 2 Objetos II

var assert = require("assert");
describe("Retornar un mensaje segun la edad",function(){
   it("Probando con estos datos: Tamara, 22, Estudiante Laboratoria, Femenino",function(){
   assert.equal("You are Awesome!!", datosCoder(22));
   })
});

//Pruebas unitarias ejercicio 3 Objetos II

var assert = require("assert");
describe("Concatenar un objeto",function(){
   it("Probando con este objeto texto = {propiedad1: 6,propiedad2: 5,propiedad3: 4,propiedad4: 3,propiedad5: 2,propiedad6: 1,}",function(){
   assert.equal(concatenar([6, 5, 4, 3, 2, 1]), "propiedad1 -> 6;propiedad2 -> 5;propiedad3 -> 4;propiedad4 -> 3;propiedad5 -> 2;propiedad6 -> 1");
   })
});

//Pruebas unitarias ejercicio 4 Objetos II

describe("REtorna una propiedad del objeto",function(){
   it("Probando con este objeto paciente = new clinicaLab(Blanca, Perez, 23, Femenino, Santiago, Chile)",function(){
   assert.equal(clinica("Blanca", "Perez", 23, "Femenino", "Santiago", "Chile"), "Nombre: Blanca Perez ,Edad: 23 ,Pais: Chile");
   })
});
