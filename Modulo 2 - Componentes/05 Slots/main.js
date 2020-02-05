Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                    Hola
                </header>
                <div class="alerta__contenido">
                    <slot>
                        Lorem ipsum dolor sit amet
                    </slot>
                </div>
                <footer class="alerta__footer">
                    Texto del footer
                </footer>
            </section>`,
});

new Vue({
    el: 'main',
});