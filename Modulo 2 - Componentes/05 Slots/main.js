Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
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
});

new Vue({
    el: 'main',
});