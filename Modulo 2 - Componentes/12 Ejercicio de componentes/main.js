Vue.component('usuarios', {
    template: '#usuarios-template',  //Template para crear el componente en el html
    mounted() {     //Capturar cuando esté montado
        axios.get('https://randomuser.me/api/?results=500')     //Obteniendo 500 usuarios desde la API
            .then((datos) => {      //Promesa
                const listado = datos.data.results.map((usuario) => { //Listado de usuarios
                    return {
                        nombre: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
                        correoe: usuario.email,
                        foto: usuario.picture.medium, 
                    }
                });
                this.usuarios = listado; //Carga con los usuarios del listado al arreglo de data()
            });
    },

    data() {
        return {
            usuarios: [],
        }
    }
});

new Vue({
    el: 'main',
});