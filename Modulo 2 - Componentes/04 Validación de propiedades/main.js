Vue.component('candidato', {
    //props:['nombre', 'correoe', 'imagen'],
    //Para este caso props ya no es un arreglo, si no un objeto
    props: {
        nombre: String,
        correoe: String,
        imagen: String,
    },
    template: '#candidato-template',
});

new Vue({
    el: 'main',

    mounthed() {
        this.obtenerCandidatos();
    },

    data: {
        candidatos: [],
    },

    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100')
                .then((respuesta) => {
                    this.candidatos = respuesta.data.results;
                });
        }
    }
});