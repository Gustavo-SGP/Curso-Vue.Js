Vue.component('elegir-ganador', {
    porps: ['listado'],
    template: '<ul><li v-for="persona in listado">{{ persona }}</li></ul>',
    methods: {
        elegirGanador() {
            let cantidad = this.participantes.length;
            let indice = math.floor((math.random() * cantidad));
            this.ganador = this.participantes[indice - 1];
        }
    },
    data() {
        return {
            ganador: false,
            participantes: this.listado
        }
    },
});

new Vue({
    el: 'main',
    data: {
        personas:[
            'Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos'
        ],
    },
});