Vue.component('contrasena', {
    props: ['contrasena'],
    template: `<input :value="contrasena" @input="comprobarContrasena($event.target.value)">`,
    methods: {
        comprobarContrasena(contrasena) {
            this.$emit('input', contrasena);
        }
    }
});

new Vue({
    el: 'main',
    data: {
        contrasena: 'es3Es653!*&__',
    },
});