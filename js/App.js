// Menú desplegable movil

const menu = document.getElementById('menu-principal');
const botonMenu = document.getElementById('barras-movil');


botonMenu.addEventListener( 'click', e => {

    e.preventDefault();

    menu.classList.toggle('activo');

});