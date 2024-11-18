var config = {
    style: 'mapbox://styles/yoobinlee1129/cm2xiieup00i601pagbxe2x78',
    accessToken: 'pk.eyJ1IjoieW9vYmlubGVlMTEyOSIsImEiOiJjbTF0aTFjY3UwMnY2Mm1wcmxwaGZnYjY4In0.4lghlXlYgdBO0f9huUEt4A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: "New York State's Circular Economy of Deconstruction and Building Material Reuse",
    subtitle: "Mapping New York State's deconstruction and building material reuse network, capturing key players in the circular economy",
    byline: 'By Yoobin Lee',
    para1: "The construction and demolition (C&D) industry generates a significant portion of waste worldwide, but the circular economy offers a sustainable alternative through the reuse of building materials. In New York State, deconstruction—carefully dismantling buildings to salvage materials—has emerged as an important practice to divert waste from landfills and reduce the demand for new raw materials. However, the ecosystem surrounding this practice, including material recovery facilities, reuse centers, and secondary markets, remains fragmented and underutilized.",
    para2: "Pellentesque imperdiet quam dolor, a dapibus mauris accumsan ac. Vivamus elementum purus eget ex rhoncus ullamcorper. Donec nibh justo, tristique eu malesuada convallis, sagittis in tellus. Duis vitae laoreet metus, id hendrerit nisi. Quisque a urna dapibus diam porta ullamcorper. Nam bibendum sem vitae vulputate feugiat. Suspendisse vel pulvinar massa. Suspendisse potenti.",
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. Images from <a href="https://thebridgebk.com/red-hook-after-sandy-flourishing-but-vulnerable/">The Bridge</a> and <a href="https://unsplash.com/photos/aerial-photo-of-city-buildings-0V6DmTuJaIk">Unsplash</a>.',
    chapters:[
      {

                id: 'slug-style-id',
                alignment: 'left',
                hidden: false,
                title: 'The Costs of Demolition',
                image: 'images/costofdemolitioninfographic.png',
                description: '',
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
                id: 'interlude',
                alignment: 'center',
                hidden: false,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
                image: 'images/Central_NYS_map.png',
                location: {
                  center: [-73.97615, 40.71901],
                  zoom: 14.84,
                  pitch: 48,
                  bearing: 142.44,
                },
            },
            {
                id: 'second-identifier',
                alignment: 'right',
                hidden: false,
                title: 'Title',
                image: 'images/sandyredhook.jpg',
                description: 'description',
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
