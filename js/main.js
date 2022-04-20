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

});

// Movimiento scroll
$(document).on("scroll", function() {
    let scrollY = $(this)[0].scrollingElement.scrollTop;
    if ( scrollY >= 200 ) {
        $(".navbar")[1].classList.add("menu-fijado");
    } else {
        $(".navbar")[1].classList.remove("menu-fijado");
    }
});

$(document).on("click", ".irAbajo", function(){
    let alturaScrollY = $("window").context.scrollingElement.offsetHeight;
    window.scroll({
        top: alturaScrollY,
        behavior: 'smooth'
    });
});
