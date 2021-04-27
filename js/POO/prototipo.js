// Definiendo un prototipo 
// Un prototipo es un objeto para la creacion de  otros objetos

// Para hacer la herencia de protitipos a la vieja escuela de js
function heredaDe(prototipoHijo, prototipoPadre){
        var fn = function () { }
        fn.prototype = prototipoPadre.prototype;
        prototipoHijo.prototype = new fn;
        prototipoHijo.prototype.constructor = prototipoHijo;
}


function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    console.log('Me ejecuto');
}

Persona.prototype.analisisAltura = function(){
    this.altura>1.80 ? 'Soy alto' : 'Soy bajo'; 
}

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} `)
}

// Herencia prototipal

function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador `)
}


// ECMAScript es un estandar en el que se basa JS como lenguaje. 

// Crear un objeto a partir de un prototipo
// var sacha = new Persona('Sacha', 'Lifszyc', '1.80');
// var erika = new Persona('Erika', 'Luna', '1.50');
// var arturo = new Persona('Arturo', 'Lopez', '1.81');