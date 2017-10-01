class App{

    constructor(){

        this.$map = $("#map");

        this.main = null;
    }

   getMyPosition(){
        var that = this;
        navigator.geolocation.getCurrentPosition(function(position){
            that.myPos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            that.map.setCenter(that.myPos);
        });
    }

    initMap(){
        this.map = new google.maps.Map(this.$map[0], {
            center: {lat: 10, lng: 10},
            zoom: 8,
            styles:[
            {elementType: 'geometry', stylers: [{color: '#f4a460'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#a52a2a'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#a52a2a'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#05581D'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#05581D'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#a52a2a'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffff00'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#5f9ea0'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            } 
            ]
        });
        this.getMyPosition();
        this.main();
    }


}