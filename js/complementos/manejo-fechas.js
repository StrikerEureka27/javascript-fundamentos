// Hace cuantos días naciste 

const diasEntreFechas = (fecha1, fecha2)=>{
    const unDia = 1000*60*60 *24;
    const diferencia = Math.abs(fecha1-fecha2);
    return Math.floor(diferencia / unDia);
}

const hoy = new Date(); // Sacar la fecha de hoy
const nacimiento = new Date(1998, 9, 21);