Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                    <a href="#" @click="ocultarWidget">Cerrar</a>
                    <slot name="header">Hola</slot>
                </header>
                <div class="alerta__contenido">
                    <slot> <!-- solo puede haber un slot sin nombre -->
                        Lorem ipsum dolor sit amet <!-- texto por defecto -->
                    </slot>
                </div>
                <footer class="alerta__footer">
                    <slot name="footer">Texto del footer</slot>
                </footer>
            </section>`,
    methods: {
        ocultarWidget() {
            // Lanzar evento
            this.$emit('ocultar'); //'ocultar' es un evento custom, como @click, pero ivnetado
        }
    },
});

new Vue({
    el: 'main',
    data: {
        mostrarExito: false,
        mostrarError: false,
        mostrarAdvertencia: false,
    }
});