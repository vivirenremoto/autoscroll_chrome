// iniciar variables
var interval_time = 20; // milisegundos (1000 == 1 seg)
var start_scroll = 4; // segundos
var timer_scroll;

// scroll automatico al cargar la página
setTimeout(function () {
    timer_scroll = setInterval(function () {
        var scroll_position = window.pageYOffset;

        scroll_position++;
        window.scrollTo(0, scroll_position);
    }, interval_time);

}, (start_scroll * 1000));


// desactivar el javascript cuando se llega al final de la página
window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        clearInterval(timer_scroll);
    }
};