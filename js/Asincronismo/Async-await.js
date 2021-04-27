// Async-await es de las mejores maneras de realizar asincronismo en JS


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


const onError = (id) => console.log(`Sucedio un error al llamar al personaje ${id}`);


const obtenerPerosonajes = async () => {
    var ids = [1, 2, 3, 4 ,5 ,6, 7];
    var promesas = ids.map((id) => obtenerPerosonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.table(personajes);
        personajes.forEach(personaje => {
            console.log(`Hola yo soy ${personaje.name}`)
        });
    } catch (id) {
        onError(id);
    }
}


obtenerPerosonajes();



