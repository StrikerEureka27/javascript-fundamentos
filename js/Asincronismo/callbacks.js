// Callbacks con JQuery consumiendo una API externa.

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const OPTS = { crossDomain: true };

// const obtenerData = (data) => {
//     console.log(`Hola soy ${data.name}`);
// }

// const obtenerPerosonajePorId = (id, data) => {
//     const GLOBAL_URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
//     $.get(GLOBAL_URL,OPTS,obtenerData);
// } 
// Request utilizando JQUERY
// Callback es una funcion que se va a ejecutar en algun futuro
// $.get(LUKE_URL,OPTS,obtenerData);


// ¿Como podemos ordenar estas peticiones a placer?

const obtenerPerosonajePorIdMejorada = (id,callback) => {
    const GLOBAL_URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(GLOBAL_URL,OPTS, (data) => {
        console.log(` ${id} Hola soy ${data.name}`);
    });
    callback ? callback() : '';
} 

// No llegan en orden ya que dependen de la velocidad de respuesta del servidor
// A esto se le conoce como Asincronismo
obtenerPerosonajePorIdMejorada(1, function(){
    obtenerPerosonajePorIdMejorada(2, function(){
        obtenerPerosonajePorIdMejorada(3)
    })
})

// ***MALA PRACTICA CALLBACKS HELL*** 

//Manejo de errores con callbacks



