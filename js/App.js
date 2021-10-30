// Menú desplegable movil

const menu = document.getElementById('menu-principal');
const botonMenu = document.getElementById('barras-movil');


botonMenu.addEventListener( 'click', e => {

    e.preventDefault();

    const pro = menu.classList.toggle('slide-in');

    if( !pro ) {
        menu.classList.toggle('slide-out');
        setTimeout(() => {
            menu.classList.toggle('activo');
            menu.classList.toggle('slide-out');
        }, 700 );
    } else {
        menu.classList.toggle('activo');
    }

});