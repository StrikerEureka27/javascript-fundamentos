var x = 4, y ='4';

x==y // True 
x===y // False

var pablo =  {
    nombre: 'Pablo'
}

/* Como lo estamos igualando al mismo espacio de memoria 
   por lo tanto la referencia es igual y es true
*/ 
var otraPersona = pablo;

var otraPersona2 = {
    ...pablo
}
