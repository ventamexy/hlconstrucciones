window.addEventListener("load", function() {

    // Selección de opción del menú en base a la sección actual.
    let pagina = window.location.pathname;
    if ( pagina != "/" ) {

        let arrayAhref = $("#navbarNavDarkDropdown li a");
        arrayAhref.removeClass("item-activo");
        for (var i = 0; i < arrayAhref.length; i++) {
            let elemento = arrayAhref[i];
            if ( elemento.pathname == pagina ) {
                elemento.classList.add("item-activo");
                // --- Se agrega la clase para no mostrar el borde inferior del elemento.
                contenedorPadre = elemento.parentNode;
                contenedorPadre.classList.add("background-color-none");
                return;
            }
            
        }

    }

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

// --- Prevent default
$(document).on("click", ".contenedor-servicios li a", function() {
    $(this)[0].preventDefault;
});

// Item activo

// $(document).on("mouseover", "#navbarNavDarkDropdown ul li a", function(){
//     let elementoA = $(this);
//     let contenedorPadre = null;
//     if ( elementoA[0].className == "item-activo" ) {
//         contenedorPadre = elementoA[0].parentNode;
//         contenedorPadre.classList.add("background-color-none");
//     }
// });

// Galeria

// $(document).on("mouseover", ".img-galeria", function() {
//     let barraImagen = $(this)[0].childNodes[3];
//     barraImagen.classList.remove("barra-baja");
//     barraImagen.classList.add("barra-baja-activa");
// });
  
// $(document).on("mouseout", ".img-galeria", function() {
//     let barraImagen = $(".img-galeria .barra-baja-activa");
//     barraImagen.removeClass("barra-baja-activa").addClass("barra-baja");
// });