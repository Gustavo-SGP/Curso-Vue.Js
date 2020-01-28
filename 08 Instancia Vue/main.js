const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje: 'Instancia Vue 1',
    },
    methods: {
        alReves() {
            this.mensaje = this.mensaje.split('').reverse().join('');
        }
    },
    computed: {
        mensajeMayusculas() {
            return this.mensaje.toUpperCase();
        }
    }
});

const vm2 = new Vue({
    el:'#app',
    data: {
        mensaje: 'Instancia de Vue 2',
    }
});