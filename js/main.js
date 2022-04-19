window.addEventListener("load", function() {

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

    $(document).on("mouseover", ".filtr-item", function() {
        let barraImagen = $(this)[0].childNodes[3];
        barraImagen.classList.add("barra-baja-activa");
    });
      
    $(document).on("mouseout", ".filtr-item", function() {
        let barraImagen = $(".filtr-item .barra-baja");
        barraImagen.removeClass("barra-baja-activa").addClass("barra-baja");
    });

    // Movimiento scroll
    // $(window).scroll(function() {
    //     let scrollY = $(this)[0].scrollY;
    //     console.log(scrollY);
    // });

});