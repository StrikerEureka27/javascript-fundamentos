//Las estructuras de datos inmutables nos permiten desasernos del efecto de lado. 

const sacha = {
    nombre: 'Sacha', 
    apellido: 'lifszyc', 
    edad: 28
}

const cumpleanios = persona => ({
    ...persona, 
    edad: persona.edad + 1
})
