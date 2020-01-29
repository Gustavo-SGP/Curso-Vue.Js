Vue.component('mis-tareas', {
    template: `<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>`,

    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.tareas = response.data;
            });
    },

    data() {
        return {
            tareas: [],
            // tareasLocales: [
            //     { title: 'Hacer la compra' },
            //     { title: 'Aprender Vue' },
            //     { title: 'Aprender JavaScript ES6' },
            // ]
        }
    }
});

new Vue({
    el: 'main',

});