new Vue({
    el: 'main',
    data: {
        tareas: [
            { titulo: 'Hacer la compra', completado: false },
            { titulo: 'Aprender Vue', completado: false },
            { titulo: 'Aprender Firebase', completado: false },
            { titulo: 'Dominar ES6', completado: false },
            { titulo: 'Salir a correr', completado: false },
        ]
    },

    methods: {
        completarTarea(tarea) {
            tarea.completado = !tarea.completado;
        }
    }
});