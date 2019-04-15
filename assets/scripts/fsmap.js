var locations = [
    ['<h4>Fort George</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#fortgeorge">\
    Learn More</button>', 40.858444, -73.927673],

    ['<h4>20 W 53 ST ENT</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#20w53">\
    Learn More</button>', 40.761041, -73.977397],

    ['<h4>40 Tehama</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#40tehama">\
    Learn More</button>', 40.644932, -73.982342],

    ['<h4>43 Tenants Corp</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#43tenants">\
    Learn More</button>', 40.734262, -73.994629],

    ['<h4>Castle Village</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#castle">\
    Learn More</button>', 40.852225, -73.940125],

    ['<h4>Cast Iron</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#castiron">\
    Learn More</button>', 40.733094, -73.991922],

    ['<h4>3117 Broadway</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#3117bway">\
    Learn More</button>', 40.813686, -73.960502],

    ['<h4>South Gate</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#sgate">\
    Learn More</button>', 40.754974, -73.964862 ],

    ['<h4>353 Beach Street</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#beach">\
    Learn More</button>', 40.720890, -74.008450],

    ['<h4>100 United Nations Plaza</h4><p>LED Lighting</p><br>\
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#unplaza">\
    Learn More</button>', 40.753376, -73.967784]
  ];




function initMap() {


  var styledMapType = new google.maps.StyledMapType(
           [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "# "
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
],
            {name: 'Styled Map'});

 var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11.3,
      center: new google.maps.LatLng(40.764876, -73.950348),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

// 40.733094, -73.991922

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    var icon= {
      // url: 'https://image.ibb.co/eJJ5XS/FSlogo.png'
      url: 'https://image.ibb.co/iTGFmn/rsz_1globeloc.png'


    }
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon:icon
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
      map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
    }
}


