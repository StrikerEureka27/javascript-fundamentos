var edad = 27;

edad += 1;
edad -= 2;

console.log(edad);

var precioVino = 200.3;
var total = Math.round(precioVino *100 *3) /100;

// Pasamos a string e indicamos el # de decimales.
var totalStr = total.toFixed(3);
var total2 = parseFloat(totalStr);


