var nombre = 'Pablo', apellido = ' Caceros';

var nombreMay = nombre.toUpperCase();
var apellido = apellido.toLowerCase();

var primeraLetra = nombre.charAt(0);
var longitud = nombre.length;

var nombreCompleto = nombre + apellido;

//String interpolation - interpolacion de texto 

var nombreCompletoInterpolado = `${nombre} ${apellido} `;
var str = nombre.substr(1, 2);

var res = nombre.charAt(nombre.length-1);
console.log(nombre.length-1);
console.log('La ultima letra de tu nombre es: ' + res );

