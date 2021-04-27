const API = 'https://rickandmortyapi.com/api/character/';


const fetchData = (url_api) => {
    return new Promise((resolve, reject) =>{
        var xml= new XMLHttpRequest();
        xml.open('GET', url_api, true);
        xml.onreadystatechange = function(event){
            if(xml.readyState === 4) {
                xml.status===200 
                ? resolve(JSON.parse(xml.responseText)) 
                : reject(new Error('Error', url_api));
            } 
        }
        xml.send();
    })
}

const anotherFuntion = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch (error) {
        console.error(error)
    }
}


anotherFuntion(API);
