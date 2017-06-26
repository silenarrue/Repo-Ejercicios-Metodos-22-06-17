/* Ejercicio 1 "Ejercicios Objetos": Calcular Area de un rectangulo con
objetos. */

function Rectangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    this.TotalArea = base * altura;

}

var areaDeRectangulo = new Rectangulo(10, 5);

console.log(areaDeRectangulo);


/* Ejercicio 2 "Ejercicios Objetos": Escribir una funcion que reciba como
parametros dia, mes y año de nacimiento, asignar los parametros como
propiedades de un objeto y agregar un metodo del objeto que calcule la edades
en base a la fecha de nacimiento ingresada. Retornar edad. */

function calcular_edad(añoDeNacimiento){

    var year = new Date();
    var yearActual = year.getFullYear();
    var resultado = yearActual - añoDeNacimiento;
    return parseInt(resultado);

  }

function Datos (nombre, dia, mes, añoDeNacimiento){

  this.nombre = nombre;
  this.dia = dia;
  this.mes = mes;
  this.añoDeNacimiento = añoDeNacimiento;
  this.edad = calcular_edad;

}


var edadPersona = new Datos("Su", 23, 8, 1991);


console.log(calcular_edad(edadPersona.añoDeNacimiento));


/* Ejercicio 3 "Ejercicios Objetos": Construye una funcion con propiedades
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

console.log(fraseFinal.fraseCompleta());
