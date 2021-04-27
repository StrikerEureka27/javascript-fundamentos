var signo = prompt('Cual es tu signo: ');
var lowSigno = signo.toLowerCase();


switch(lowSigno){
    case 'sagitario':
        console.log('Atravesará algunos momentos donde la intranquilidad podría arrebatarle muchos de los éxitos que le ha costado demasiado trabajo conseguir. Evite que suceda.');
        break;
    case 'aries':
        console.log('En este día, deberá buscar refugio en el plano espiritual y tener presente que los contratiempos de hoy se diluirán mañana. Relájese que todo mejorará.');
        break;
    case 'tauro':
        console.log('Durante este día, recibirá más de una propuesta interesante que le dará esperanzas y fuerzas para continuar en sus objetivos. Escoja las más conveniente.');
        break;
    case 'geminis':
        console.log('Nunca se olvide que debe mantener siempre la serenidad frente a los inconvenientes que uno vive, ya que será su mejor antídoto para combatir la incertidumbre.');
        break;
    case 'cancer':
        console.log('Aproveche el día al máximo, ya que contará con los suficientes impulsos para resolver todos los asuntos que hace tiempo posterga. Tome coraje y comience hoy.');
        break;       
    default: 
        console.log('No existe en la base de datos');
        break;             
}