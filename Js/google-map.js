var google;

function init() {

    var myLatlng = new google.maps.LatLng(-29.3151, 27.4869);

    var mapOptions = {
        zoom: 12,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }
        ]
    };

    var mapElement = document.getElementById('map');

    if (mapElement) {
        new google.maps.Map(mapElement, mapOptions);
    }
}

window.addEventListener('load', init);