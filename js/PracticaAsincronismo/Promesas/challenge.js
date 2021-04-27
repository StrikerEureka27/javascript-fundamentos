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


fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(error => console.log(error));

