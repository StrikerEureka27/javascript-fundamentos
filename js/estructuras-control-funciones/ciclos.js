// Ciclos for

var pablo = {
    nombre: 'Pablo',
    apellido: 'Caceros', 
    edad: 22, 
    peso: 75
}

const DIAS_ANIOS = 365;
const INCREMENTO = 0.2;
const DECREMENTO = 0.3;

console.log(`Al inicio del año ${pablo.nombre} pesa ${pablo.peso}kg! `);

const aumentarPeso = (persona) => persona.peso += INCREMENTO;
const disminuirPeso = (persona) => persona.peso -= DECREMENTO;

for(var i=0; i<=DIAS_ANIOS; i++){
    var random = Math.random();
    if(random<0.25){
        aumentarPeso(pablo);
    }else if(random<0.5){
        disminuirPeso(pablo);
    }
}


console.log(`Al final del año ${pablo.nombre} pesa ${pablo.peso.toFixed(2)}kg! `);

