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
    //para2: "Pellentesque imperdiet quam dolor, a dapibus mauris accumsan ac. Vivamus elementum purus eget ex rhoncus ullamcorper. Donec nibh justo, tristique eu malesuada convallis, sagittis in tellus. Duis vitae laoreet metus, id hendrerit nisi. Quisque a urna dapibus diam porta ullamcorper. Nam bibendum sem vitae vulputate feugiat. Suspendisse vel pulvinar massa. Suspendisse potenti.",
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. Images from <a href="https://thebridgebk.com/red-hook-after-sandy-flourishing-but-vulnerable/">The Bridge</a> and <a href="https://unsplash.com/photos/aerial-photo-of-city-buildings-0V6DmTuJaIk">Unsplash</a>.',
    chapters:[
      {

                id: 'slug-style-id',
                alignment: 'center',
                hidden: false,
                title: 'The Costs of Demolition',
                image: 'images/costofdemolitioninfographic.png',
                description: 'This mapping effort will: 1) Reveal gaps in infrastructure. 2) Highlight opportunities for growth. 3) Convey the importance of expanding the reuse of building materials to meet sustainability goals.The key message is that strengthening this ecosystem can lead to significant environmental and economic benefits while supporting local communities in reducing waste and promoting resource efficiency.',


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
                description: 'This mapping effort will: 1) Reveal gaps in infrastructure. 2) Highlight opportunities for growth. 3) Convey the importance of expanding the reuse of building materials to meet sustainability goals.The key message is that strengthening this ecosystem can lead to significant environmental and economic benefits while supporting local communities in reducing waste and promoting resource efficiency.',
                image: 'images/scccpmap1.png',
                location: {
                  center: [-73.97615, 40.71901],
                  zoom: 14.84,
                  pitch: 48,
                  bearing: 142.44,
                },
            },
            {
                id: 'interlude',
                alignment: 'center',
                hidden: false,
                description: ' Identifying Areas of Opportunity (Data source: Census Reporter): Map population density by Census Block to identify high-density areas lacking circular economy infrastructure.',
                image: 'images/scccpmap2majorroads.png',
            },
            {
                id: 'interlude',
                alignment: 'center',
                hidden: false,
                description: 'Locating Demolition Facilities in NYS (Data source: CR0WD StoryMap): NYS Street and Address locator from NYS GIS Clearinghouse. Identified facility locations on Microsoft Excel and geocoded data on ArcGIS Pro.',
                image: 'images/scccpcddfacilitiesmap.png',
            },
            {
                id: 'interlude',
                alignment: 'center',
                hidden: false,
                description: '',
                image: 'images/fullmap.png',
            },
        ]
    };
