const btnEmpezar = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const ULTIMO_NIVEL = 10;


class Juego {
    constructor (){
        // Al colocar el metodo en el constructor siempre que se crea el objeto jugar se inicializa. 
        this.inicializar(); 
        this.generarSecuencia();
        this.siguienteNivel();
    
    }

    inicializar(){
        this.toggleBtnEmpezar();
        btnEmpezar.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            celeste : celeste, 
            violeta : violeta, 
            naranja : naranja, 
            verde : verde
        }
    }

    toggleBtnEmpezar(){
        
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide');
        }else{
            btnEmpezar.classList.add('hide');
        }
    }

    generarSecuencia(){
        // Otra forma de escribir los arreglos
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4));
    }

    siguienteNivel(){
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventosClick();
    }

    transformarNumeroAColor(numero){
        switch(numero){
            case 0: 
                return 'celeste';
            case 1: 
                return 'violeta';
            case 2: 
                return 'naranja';
            case 3: 
                return 'verde';        
        }
    }

    transformarColorANumero(color){
        switch(color){
            case 'celeste': 
                return 0;
            case 'violeta': 
                return 1;
            case 'naranja': 
                return 2;
            case 'verde': 
                return 3;        
        }
    }

    iluminarSecuencia(){
        for(let i=0; i<this.nivel; i++){
            let color = this.transformarNumeroAColor(this.secuencia[i]);
            setTimeout(()=> this.iluminarColor(color), 1000*i);
        }
    }

    iluminarColor(colores){
        this.colores[colores].classList.add('light');
        setTimeout(()=> this.apagarColor(colores), 350);
    }

    apagarColor(colores){
        this.colores[colores].classList.remove('light');
    }

    agregarEventosClick(){
        // .bind(this) para no perder la referencia al this
        this.colores.celeste.addEventListener('click', this.elegirColor.bind(this));
        this.colores.verde.addEventListener('click', this.elegirColor.bind(this));
        this.colores.violeta.addEventListener('click', this.elegirColor.bind(this));
        this.colores.naranja.addEventListener('click', this.elegirColor.bind(this));

    }

    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor.bind(this));
        this.colores.verde.removeEventListener('click', this.elegirColor.bind(this));
        this.colores.violeta.removeEventListener('click', this.elegirColor.bind(this));
        this.colores.naranja.removeEventListener('click', this.elegirColor.bind(this));
    }

    elegirColor(ev){
        //console.log(ev);
        //console.log(this);
        const nombreColor = ev.target.dataset.color;
        const numeroColor = this.transformarColorANumero(nombreColor);
        this.iluminarColor(nombreColor);
        if(numeroColor===this.secuencia[this.subnivel]){
            this.subnivel++;
            if(this.subnivel===this.nivel){
                this.nivel++;
                this.eliminarEventosClick()
                if(this.nivel === (ULTIMO_NIVEL + 1)){
                    this.ganoElJuego();
                }else{
                    setTimeout(this.siguienteNivel.bind(this), 2000);
                }
            }
        }else{
            this.perdioElJuego();
        }
    }   

    ganoElJuego(){
        swal('Platzi', 'Felicitaciones ganaste el juego', 'success')
        // Swal devuelve una promesa 
        .then(this.inicializar.bind(this))
    }

    perdioElJuego(){
        swal('Platzi', 'Perdiste el juego', 'error')
        // Swal devuelve una promesa 
        .then(()=>{
            this.eliminarEventosClick()
            this.inicializar();
        })

    }

}
const empezarJuego = () => {
window.juego = new Juego();
}

