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

    let scrollYPosicionActual = $(this)[0].scrollingElement.scrollTop;
    if ( scrollYPosicionActual >= 200 ) {
        $(".navbar")[1].classList.add("menu-fijado");
    } else {
        $(".navbar")[1].classList.remove("menu-fijado");
    }

    var scrollY = $("window").context.scrollingElement;
    var alturaScrollY = scrollY.offsetHeight - scrollY.clientHeight;
    
    if ( alturaScrollY == scrollYPosicionActual ) {
        $(".irAbajo i").addClass("transform-r-180");
        $(".irAbajo").removeClass("irAbajo").addClass("irArriba");
    } else {
        $(".irAbajo i").removeClass("transform-r-180");
        $(".irArriba").removeClass("irArriba").addClass("irAbajo");
    }
    
});

$(document).on("click", ".irAbajo", function(){

    let scrollY = $("window").context.scrollingElement;
    let alturaScrollY = scrollY.offsetHeight - scrollY.clientHeight;
    window.scroll({
        top: alturaScrollY,
        behavior: 'smooth'
    });
    
});

$(document).on("click", ".irArriba", function(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});
