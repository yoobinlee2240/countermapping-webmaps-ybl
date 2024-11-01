var config = {
    style: 'mapbox://styles/yoobinlee1129/cm2xiieup00i601pagbxe2x78',
    accessToken: 'pk.eyJ1IjoieW9vYmlubGVlMTEyOSIsImEiOiJjbTF0aTFjY3UwMnY2Mm1wcmxwaGZnYjY4In0.4lghlXlYgdBO0f9huUEt4A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'How Hurricane Sandy Threatened Public and Affordable Housing in New York City in the Fall of 2012',
    byline: 'By Yoobin Lee',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. Images from <a href="https://thebridgebk.com/red-hook-after-sandy-flourishing-but-vulnerable/">The Bridge</a> and <a href="https://unsplash.com/photos/aerial-photo-of-city-buildings-0V6DmTuJaIk">Unsplash</a>.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'New York City',
            image: 'images/nycpic.jpg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.',
            location: {
                center: [-73.96400, 40.77468],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses, Brooklyn, New York City',
            image: 'images/sandyredhook.jpg',
            description: 'Red Hook Houses, Brooklyn’s largest public housing complex, faced severe flooding and extended power outages during Hurricane Sandy in 2012. Residents endured weeks without electricity, heat, and running water, highlighting the vulnerability of public housing to extreme weather events.',
            location: {
                center: [-74.00971, 40.67556],
                zoom: 15.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
