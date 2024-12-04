const $abrir = document.querySelector(".abrir");
const $cerrar = document.querySelector(".cerrar");
const $nav = document.querySelector(".nav");

function abrir() {
    $nav.classList.add("nav-visible");
    $abrir.classList.add("ocultar-boton");
    $cerrar.classList.remove("ocultar-boton");
}

function cerrar() {
    $nav.classList.remove("nav-visible");
    $abrir.classList.remove("ocultar-boton");
    $cerrar.classList.add("ocultar-boton");
}

$cerrar.addEventListener("click", cerrar);
$abrir.addEventListener("click", abrir);