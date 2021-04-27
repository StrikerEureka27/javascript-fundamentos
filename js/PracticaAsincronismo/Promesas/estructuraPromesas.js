const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Esta todo correcto!');
        }else{
            reject('Ups, algo salio mal!');
        }
    })
}

const somethingWillHappen2 = () =>{
    return  new Promise ((resolve, reject) => {
        if(true){
            setTimeout(()=>{
                resolve(true);
            }, 3000)
        }else{
            const error = new Error('Algo salio mal');
            reject(error);
        }
    })
}

// somethingWillHappen()
//     .then(response => console.log(response))
//     .catch(error => console.error(error))


// somethingWillHappen2()
//     .then(response => console.log(response))
//     .catch(error => console.error(error))

    Promise.all([somethingWillHappen(), somethingWillHappen2()])
        .then(response => {
            console.log('Arreglo de resultados' , response);
        })
        .catch(error => {
            console.error(error);
        });
