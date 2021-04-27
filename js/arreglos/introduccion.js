var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72, 
    libros: 43

}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    libros: 32
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    libros: 43
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71, 
    libros: 98
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    libros: 32
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros: 65
}

var personas = [sacha, alan, martin, dario, vicky];

for(var i=0; i<personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} ${persona.altura}`);
}

personas.forEach(persona => {
    console.log(`${persona.nombre} ${persona.altura}`);
});


// Se pueden filtrar de dos maneras  

const esAlta = ({altura}) => altura>1.8
var personasAltas1 = personas.filter(esAlta);

const esBaja = ({altura}) => altura<1.8
var personasBajas = personas.filter(esBaja);

const pasarAlturaCms = ({altura}) => altura*100
var personaCms = personas.map(pasarAlturaCms);

var personasAltas = personas.filter(function(persona){
    return persona.altura > 1.8
});

// Reducir un arreglo

const reducer = (acum, persona) => acum + persona.libros;
var totalLibros = personas.reduce(reducer, 0);