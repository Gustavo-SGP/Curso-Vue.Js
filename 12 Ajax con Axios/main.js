new Vue({
    el: 'main',

    mounted() {
        this.cargarPersonas();
    },

    data: {
        personas: [],
        url: 'https://randomuser.me/api/?results=500'
    },

    methods: {
        cargarPersonas() {
            // this.$http.get(this.url)
            //     .then((respuesta) => {
            //         this.personas = respuesta.body.results;
            //     });

            axios.get(this.url)
                .then((respuesta) => {
                    this.personas = respuesta.data.results;
                });
        }
    }
});