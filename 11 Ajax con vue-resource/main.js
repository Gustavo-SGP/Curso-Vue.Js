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
            this.$http.get(this.url)
                .then((respuesta) => {
                    console.log(respuesta);
                });
        }
    }
});