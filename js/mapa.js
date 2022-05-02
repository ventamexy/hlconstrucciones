// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {

    const uluru = { lat: -25.363, lng: 131.044 };

    const map = new google.maps.Map(document.getElementById("mapa"), {
      zoom: 4,
      center: uluru,
    });

    const marker = new google.maps.Marker({
      position: uluru,
      map,
      title: "Uluru (Ayers Rock)",
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });

  }
  
  window.initMap = initMap;