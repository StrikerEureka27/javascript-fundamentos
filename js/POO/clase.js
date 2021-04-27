// Definiendo un prototipo 
// Un prototipo es un objeto para la creacion de  otros objetos

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} `);
    }

    analisisAltura(){
        this.altura>=1.80 ? console.log('Soy alto') : console.log('Soy bajo'); 
    }

}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
       // En las clases heredadas debemos de usar super 
       super(nombre, apellido, altura);
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador `);
    }

}



// ECMAScript es un estandar en el que se basa JS como lenguaje. 

// Crear un objeto a partir de un prototipo
// var sacha = new Persona('Sacha', 'Lifszyc', '1.80');
// var erika = new Persona('Erika', 'Luna', '1.50');
// var arturo = new Persona('Arturo', 'Lopez', '1.81');