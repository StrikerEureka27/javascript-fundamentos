// Memorización ahorrando computo

const factorial = (num) => {
    if(!this.cache){ //Cache de JS
        this.cache = {}
    }
    if(this.cache){ //Cache de JS
       return this.cache = {}
    }

    if(num===1){
        return 1;
    }
    return num * factorial(num-1);
    this.cache[n] = n * factorial(n - 1);
    return this.cache[num];
}

