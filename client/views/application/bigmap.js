if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  })
};



function vueCarte(address)
{
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      GoogleMaps.maps.exampleMap.instance.setCenter(results[0].geometry.location);
      GoogleMaps.maps.exampleMap.instance.setZoom(10);
    }
  });
};

Template.body.helpers({
  exampleMapOptions: function() {
    // Vérification que l'API GoogleMaps est bien lancée
    if (GoogleMaps.loaded()) {
      // Initialisation des options de la carte
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8,
        zoomControl: false,
        streetViewControl: false,
        draggable: false,
        mapTypeControl: false,
        scrollwheel: false
      };
    }
  }
});
