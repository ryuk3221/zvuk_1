function init() {
  let map = new ymaps.Map('map', {
    center: [55.75229400669603,37.62340324255365],
    zoom: 10,
  });

  let placemark = new ymaps.Placemark([55.67257506906082,37.73403899999996], {}, {
    iconLayout: 'default#image',
    iconImageHref: '',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0]
  });
  
  map.geoObjects.add(placemark);
  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable(['scrollZoom']);
};
ymaps.ready(init);