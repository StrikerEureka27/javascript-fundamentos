// Las promesas son valores que aun no se conocen, tiene 3 estados: 
// [pending] ---> [fulfield] ---> .then(val=>...)
//           ---> [reject]   ---> .catch(err=>...)
// Las promesas son objetos: 

// Callbacks con JQuery consumiendo una API externa.

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const OPTS = { crossDomain: true };



const obtenerPerosonaje = function (id) {
    return new Promise((resolve, reject) => {
        const GLOBAL_URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $.get(GLOBAL_URL ,OPTS ,(personajes)=> { resolve(personajes) }).fail(()=> reject(id))
    })
} 


//Request en serie y deberian estar en paralelo para no consumir
// un numero muy grande  de recursos. 

const onError = (id) => console.log(`Sucedio un error al llamar al personaje ${id}`);


var ids = [1, 2, 3, 4 ,5 ,6, 7];
var promesas = ids.map((id) => obtenerPerosonaje(id));
Promise
    .all(promesas)
    .then(personajes => {
        personajes.forEach(personaje => {
            console.log(`Hola yo soy ${personaje.name}`)
        });
    })
    .catch( id => onError );



// for(var i=1; i<20; i++){
//     obtenerPerosonaje(i)
//     .then((personaje) => {
//     console.log(`Hola soy ${personaje.name}`);
//     return obtenerPerosonaje(i+1); // ¿Como encadenar variasm promesas? 
//     })

//     .catch(function(id){
//         console.log(`Sucedio un error al llamar al personaje ${id}`);
//     })
// }   