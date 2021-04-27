//Ciclos while 

var pablo = {
    nombre: 'Pablo',
    apellido: 'Caceros', 
    edad: 22, 
    peso: 75
}

const DIAS_ANIOS = 365;
const INCREMENTO = 0.2;
const DECREMENTO = 0.3;
const META = pablo.peso - 3;

console.log(`Al inicio del año ${pablo.nombre} pesa ${pablo.peso}kg! `);

const aumentarPeso = (persona) => persona.peso += INCREMENTO;
const disminuirPeso = (persona) => persona.peso -= DECREMENTO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

var dias = 0;

while(pablo.peso>META){
    if(comeMucho()){
        aumentarPeso(pablo);
    }
    if(realizaDeporte()){
        disminuirPeso(pablo);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} dias hasta que ${pablo.nombre} llego a la meta!  `);




