// Es una funcion que recuerda el estado de las clsas cuando es invocada. 

function crearSaludo(finalDeFrase) { // Funcion generadora
    return function (nombre){
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('Che');
const saludoMexicano = crearSaludo('wey');
const saludoColombiano = crearSaludo('parce');


saludoArgentino('Pablo');
saludoMexicano('Pablo');
saludoColombiano('Pablo');