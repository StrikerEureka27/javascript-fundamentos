// Objetos 
var pablo = {
    nombre: 'Pablo', 
    apellido: 'Caceros', 
    edad: 22
}

var jailyne = {
    nombre: 'Jailyne', 
    apellido: 'Matias', 
    edad: 22
}


function imprimirNombre(persona){
    // var nombre = persona.nombre
    var { nombre } = persona;
    console.log(persona.nombre.toUpperCase());
}

//imprimirNombre(pablo);

// Desestructurar objetos 

function infoPersona({nombre, edad}){
    console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
}

infoPersona(pablo);

// Parametros como referencia y como valor

function cumpleanios(persona){
    return {
        //Duplicar un objeto
        ...persona, 
        edad:  persona.edad + 1
    }
   
}

