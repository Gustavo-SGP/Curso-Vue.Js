Vue.component('mis-tareas', {
template: `<p>Hacer la compra</p>`,
});

new Vue({
    el:'main',

    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                this.tareasAjax = response.data;
            });
    },

    data: {
        tareasAjax: [],
    }
});