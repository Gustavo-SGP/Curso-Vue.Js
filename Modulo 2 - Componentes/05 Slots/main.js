Vue.component('alerta', {
    props: ['tipo', 'posicion'],
    template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                    Hola
                </header>
                <div class="alerta__contenido">
                    Lorem ipsum dolor sit amet
                </div>
                <footer class="alerta__footer">
                    Texto del footer
                </footer>
            </section>`,
});

new Vue({
    el: 'main',
});