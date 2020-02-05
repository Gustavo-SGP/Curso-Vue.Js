Vue.component('autor', {
    props: ['nombre', 'edad'],
    mounthed() {
        /*Las props son accesibles desde "this" (proxy)
        console.log(this.nombre);*/
        console.log(typeof this.edad);
    },
    template: '<div><h1> {{ nombre }} </h1> <button @click="cambiarProp">Cambiar Prop</button></div>',
    methods: {
        cambiarProp() {     //Vue recomienda no hacer estos cambios en las props
            this.nombre = this.nombre.toUpperCase();
        },
    }
});

new Vue({
    el: 'main',
    data: {
        autor: 'Juan Andrés Meza',
    },
});