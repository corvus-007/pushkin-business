// Add it after jquery.magnific-popup.js and before first initialization code
$.extend(true, $.magnificPopup.defaults, {
  tClose: 'Закрыть (Esc)', // Alt text on close button
  tLoading: 'Загрузка...', // Text that is displayed during loading. Can contain %curr% and %total% keys
  gallery: {
    tPrev: 'Назад (Left arrow key)', // Alt text on left arrow
    tNext: 'Вперед (Right arrow key)', // Alt text on right arrow
    tCounter: '%curr% из %total%' // Markup for "1 of 7" counter
  },
  image: {
    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
  },
  ajax: {
    tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
  }
});

/*=====  End of Translating magnificPopup  ======*/

// Загрузка карты
function loadMapScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyC9a_UDjprd--E33HE4d9_S6I0yjvViR8o&callback=initializeMap";
  document.head.appendChild(script);
}

// Инициализация карты
function initializeMap() {
  var locationOffice = { lat: 53.239355, lng: 34.370966 };

  function createProp(defaultLocation) {
    return {
      center: defaultLocation,
      zoom: 16,
      streetViewControl: false,
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#ebe3cd"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#523735"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f1e6"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#c9b2a6"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#dcd2be"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#ae9e90"
        }]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#93817c"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#a5b076"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#447530"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f1e6"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#fdfcf8"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f8c967"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#e9bc62"
        }]
      }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e98d58"
        }]
      }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#db8555"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#806b63"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8f7d77"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ebe3cd"
        }]
      }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#b9d3c2"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#92998d"
        }]
      }]
    };
  }

  var mapProp = createProp(locationOffice);
  var map = new google.maps.Map(document.getElementById("location-map"), mapProp);
  var markerPriem = new google.maps.Marker({
    position: locationOffice,
    map: map,
    title: '«Пушкин Плаза»'
  });
}

document.addEventListener('DOMContentLoaded', function() {

  var invisibleHolder = document.querySelector('.invisible-holder');

  /*==================================
  =            Docs panel            =
  ==================================*/
  
  var triggerBtnDocsPanel = document.querySelector('.js-trigger-docs-panel');
  var docsPanel = document.querySelector('.docs-panel');
  var docsPanelClose = docsPanel.querySelector('.docs-panel__close');

  docsPanel.classList.add('docs-panel--closed');
  invisibleHolder.classList.add('invisible-holder--closed');

  if (docsPanel) {
    triggerBtnDocsPanel.addEventListener('click', togglePanel);
    docsPanelClose.addEventListener('click', togglePanel);
  }

  function togglePanel(event) {
    event.preventDefault();
    if (docsPanel.classList.contains('docs-panel--closed')) {
      docsPanel.classList.remove('docs-panel--closed');
      docsPanel.classList.add('docs-panel--opened');
      invisibleHolder.classList.remove('invisible-holder--closed');
      invisibleHolder.classList.add('invisible-holder--opened');
    } else {
      docsPanel.classList.remove('docs-panel--opened');
      docsPanel.classList.add('docs-panel--closed');
      invisibleHolder.classList.remove('invisible-holder--opened');
      invisibleHolder.classList.add('invisible-holder--closed');
    }
  }
  
  /*=====  End of Docs panel  ======*/
  
  var $locationMap = $('#location-map');
  var locationMapWrapper = document.querySelector('.location-map-wrapper');
  var jsLocationMapTrigger = document.querySelector('.js-location-map-trigger');


  if ($locationMap.length) {
    loadMapScript();

    jsLocationMapTrigger.addEventListener('click', function(event) {
      event.preventDefault();
      locationMapWrapper.classList.remove('location-map-wrapper--collapsed')
      locationMapWrapper.classList.add('location-map-wrapper--expanded')
    });
  }



  $('.js-trigger-inline-popup').magnificPopup({
    mainClass: 'popup-fade',
    removalDelay: 300
  });

  $('.js-trigger-image-popup').magnificPopup({
    type: 'image',
    image: {
      verticalFit: false
    },
    mainClass: 'popup-fade',
    removalDelay: 300
  });


  /*============================
  =            Tabs            =
  ============================*/

  $('.tabs').tabslet({
    animation: true
  });



  /*=============================
  =            Plans            =
  =============================*/

  var getPlacesInfo = $.getJSON('http://business.pushkin-plaza.ru/wp-content/themes/business-pushkin/scripts/places.json');

  getPlacesInfo.done(function(data) {
    var placesInfo = data;
    var plan = document.querySelector('.plan');
    var ballonPlace = document.querySelector('.ballon-place');
    var places = document.querySelectorAll('.place');

    Array.prototype.forEach.call(places, function(place) {
      var dataId = place.id;
      if (placesInfo[dataId].statusCode === '0') {
        place.classList.add('place--busy');
      }
    });

    $('body').on('click', function(event) {
      if (event.target.closest('.ballon-place')) {
        return;
      }

      if (event.target.classList.contains('place--busy')) {
        return;
      }

      if (!event.target.classList.contains('place')) {
        $(ballonPlace).hide();
        Array.prototype.forEach.call(places, function(place) {
          place.classList.remove('place--clicked');
        });
        return;
      }


      event.preventDefault();
      var place = event.target;
      var placeId = place.id;
      var placeInfo = placesInfo[placeId];

      var pointerPos = {
        x: event.pageX,
        y: event.pageY
      }

      document.querySelector('.ballon-place__area').textContent = placeInfo.area + 'м²';
      document.querySelector('.ballon-place__status').textContent = placeInfo.status;

      if (!place.classList.contains('place--clicked')) {
        Array.prototype.forEach.call(places, function(place) {
          place.classList.remove('place--clicked');
        });
        place.classList.add('place--clicked')
        $(ballonPlace).show();
      } else {
        place.classList.remove('place--clicked')
        $(ballonPlace).hide();
      }

      ballonPlace.style.left = pointerPos.x + 15 + 'px';
      ballonPlace.style.top = pointerPos.y + 15 + 'px';
    });
  });

  /*=====  End of Plans  ======*/




  /*==================================
  =            Input mask            =
  ==================================*/

  // Phone
  $('input[type="tel"]').inputmask("+7 (999) 999 99 99", {});

  /*=====  End of Input mask  ======*/

});
