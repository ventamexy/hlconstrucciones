window.addEventListener("load", function(){
    // Selección de opción del menú en base a la sección actual.
    let pagina = window.location.pathname;
    let arrayAhref = $("#navbarNavDarkDropdown li a");
    for (var i = 0; i < arrayAhref.length; i++) {
        let elemento = arrayAhref[i];
        if ( elemento.pathname == pagina ) {
            elemento.classList.add("item-activo");
            return;
        }
    }
});