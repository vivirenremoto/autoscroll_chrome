// iniciar variables
var interval_time = 1; // 1000 == 1 seg
var timer_scroll;

// scroll automatico al cargar la página
window.onload = function () {
    timer_scroll = setInterval(function () {
        var scroll_position = window.pageYOffset;
        scroll_position++;
        window.scrollTo(0, scroll_position);
    }, interval_time);
};


// desactivar el javascript cuando se llega al final de la página
window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        clearInterval(timer_scroll);
    }
};