// Variables Globales
var nombre = 'Pablo', edad = 28;

function imprimirEdad(nombre, edad){
    console.log(`${nombre} tiene ${edad} años! `);
}

imprimirEdad(nombre, edad);
imprimirEdad('Roberto', 50);
imprimirEdad('Mario', 32);

// Alcance de las funciones 

function imprimirNombre(nombre){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

// Funciones que retornan valores

