// Callbacks con XMLHttpRequest

const API = 'https://rickandmortyapi.com/api/character/';


// Funcion para traer la informacion de nuestra API
const fetchData = (url_api, callback) => {
    var xml= new XMLHttpRequest();
    // [Que vamos a hacer] [De donde] [Asincrono?]         
    xml.open('GET', url_api, true);
    xml.onreadystatechange = function (event) {
        /** los estados que puede tener son:
        estado 0: inicializado
        estado 1: cargando
        estado 2: ya se cargó
        estado 3: ya hay información
        estado 4: solicitud completa */
        if(xml.readyState === 4){ // Si se completo la operacion 
            if(xml.status===200){
                callback(null, JSON.parse(xml.responseText)); 
                /* ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
                ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
                ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
                ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
                ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.*/
            }else{
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    xml.send();
}


fetchData(API, (error1, data1) =>{
    if(error1) return console.error(error1);
        fetchData(API + data1.results[0].id, (error2, data2) =>{
            //console.log(data1.results[0].id);
            if(error2) return console.error(error2);
                fetchData(data2.origin.url, (error3, data3) => {
                    if(error3) return console.error(error3);
                    console.log(data1.info.pages);
                    console.log(data2.name);
                    console.log(data3.dimension);
                })
        });
    })
