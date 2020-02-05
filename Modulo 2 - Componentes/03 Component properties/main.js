Vue.component('autor', {
    props: ['nombre'],
    template: '<h1> {{ nombre }} </h1>',
});

new Vue({
    el: 'main',
    data: {
        autor: 'Juan Andrés Meza',
    },
});