
const doSomethingAsync = () => {
    return new Promise((resolve, reject)=>{
        (true) 
        ? setTimeout(()=> resolve('Hacer algo Async') ,3000) 
        : reject(new Error('Error, algo salio mal'))
    })
}

const doSomething = async()=>{
    const some = await doSomethingAsync();
    console.log(some);
}

doSomething();

const anotheFunction = async () =>{
    try {
        const some = await doSomethingAsync();
    } catch (error) {
        console.error(error);
    }
}

//doSomething();
anotheFunction();
