const vm = new Vue({
    el: 'main',
    data: {
        laborales:['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'], 
        tareas: [
            {nombre: 'Hacer la compra', propiedad: 'baja'},
            {nombre: 'Aprender Vue y Firebase', propiedad: 'alta'},
            {nombre: 'Ir al gimnacio', propiedad: 'alta'},
        ],
        persona: {
            nombre: 'Juan',
            profesion: 'dev',
            ciudad: 'Valencia',
        }
    },
});