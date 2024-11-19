mapboxgl.accessToken = 'pk.eyJ1IjoieW9vYmlubGVlMTEyOSIsImEiOiJjbTF0aTFjY3UwMnY2Mm1wcmxwaGZnYjY4In0.4lghlXlYgdBO0f9huUEt4A';

const map = new mapboxgl.Map({
  container: 'yoobin', // container id
  style: 'mapbox://styles/yoobinlee1129/cm3hkt7r9005o01r28ngk4jjp', // replace this with your style URL
  center: [-122.42285, 37.76869],
  zoom: 13,
  pitch: 30.00,
  bearing: 0.00,
  minZoom: 13

});

map.on('load', function () {

	map.addSource('restaurantSource',{
        'type':'vector',
        'url': 'mapbox://yoobinlee1129.af9hz93z'
      });

	map.addLayer({
        'id':'restaurantLayer',
        'type':'circle',
        'source':'restaurantSource',
        'source-layer':'Historical_Restaurant_Inspect-2loddt',
        'paint':{
			'circle-opacity': 0.3,
			'circle-color':
				['step',
					['to-number', ['get', 'inspection_score']],
					'#aaaaaa',  
					45, '#440154',  // (45 - 80)
					80, '#3b528b',  // (80 - 85)
					85, '#21908d',  // (85 - 90)
					90, '#5dc963',  // (90 - 95)
					95, '#fde725'   // (95 - 100)
					]
        }
  });

	console.log("My name is Yoobin");

	map.on('mouseenter', 'restaurantLayer', (e) => {
        console.log(e.features[0]['properties']['business_name']);
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;

    });


})