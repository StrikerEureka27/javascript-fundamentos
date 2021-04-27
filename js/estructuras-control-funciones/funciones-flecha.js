var pablo = {
    nombre: 'Pablo', 
    apellido: 'Caceros', 
    edad: 10, 
    ingeniero: true, 
    cocionero: false, 
    cantante: false, 
    dj: false,
    guitarrista: false, 
    drone: true
}

function imprimirProfesiones(persona){
    console.log(` ${persona.nombre} se dedica a: \n`);
    if(persona.ingeniero){
        console.log('Ingeniero');
    }
    if(persona.cocionero){
        console.log('Cocinero');
    }
    if(persona.cantante){
        console.log('Cantante');
    }
    if(persona.dj){
        console.log('Djs');
    }
    if(persona.guitarrista){
        console.log('Guitarrista');
    }
    if(persona.drone){
        console.log('Piloto de dron');
    }
}

const MAYORIA_EDAD = 18;

// Arrow functions

// const esMayorDeEdad = (persona) => {
//     return persona.edad >=MAYORIA_EDAD;
// }

const esMayorDeEdad = ({edad}) => edad >=MAYORIA_EDAD;




function analisisEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(` ${persona.nombre} es mayor de edad! `);
    }else{
        console.log(` ${persona.nombre} es menor de edad! `);
    }
}


const permitirAcceso = persona => !esMayorDeEdad(persona) ? 'ACEPTADO' : 'DENEGADO';