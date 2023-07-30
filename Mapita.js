async function initMap() {
    const { Map, Marker } = await google.maps.importLibrary("maps");
  
    const centerLatLng = { lat: 4.911399172777014, lng: -73.91654363987425 };
    const map = new Map(document.getElementById("map"), {
      center: centerLatLng,
      zoom: 14,
    });
  
    // Agregar un marcador en la ubicación del centro
    const marker = new Marker({
      position: centerLatLng,
      map: map,
      title: "Aerodrone Colombia",
    });
  }
  
  initMap();