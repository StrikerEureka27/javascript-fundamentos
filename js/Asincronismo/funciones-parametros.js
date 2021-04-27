
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(isDevFn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} `);
        // Si la funcion retorna algun valor sera true
        if(isDevFn){
            isDevFn(this.nombre, this.apellido);
        }
        
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

    saludar(isDevFn){
        // Podemos desestructurar para ahorrar lineas de codigo
        var {nombre, apellido} = this;
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador `);
         isDevFn(nombre,apellido,true);
    }

}


function responderSaludo(nombre, apellido, isDev){
    console.log(`Buen dia ${nombre} ${apellido}`);
    isDev===true ? console.log(`Genial ${nombre} no sabia que eras desarrollador!`) : '';
}


var sacha = new Persona('Sacha', 'Lifszyc', '1.80');
var erika = new Persona('Erika', 'Luna', '1.50');
var arturo = new Desarrollador('Arturo', 'Lopez', '1.81');

// Mandar funciones como parametro. 
//sacha.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);