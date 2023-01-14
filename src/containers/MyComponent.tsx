import { useEffect, useState } from 'react';
import L, { LatLngBounds } from 'leaflet';
import {
    ImageOverlay,
    LayersControl,
    MapContainer,
    // Marker,
    // Popup,
    // TileLayer,
    // useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../main.css';

const MyComponent = () => {
    const imageUrl = 'src/assets/plan1.jpg';
    const imageUrl2 = 'src/assets/plan2.jpg';
    const [bounds] = useState(new LatLngBounds([100, 200], [0, 0]));

    // const greenIcon = L.icon({
    //     iconUrl: 'src/assets/gr.png',
    // });

    // const redIcon = L.icon({
    //     iconUrl: 'src/assets/rd.png',
    // });

    // const orangeIcon = L.icon({
    //     iconUrl: 'src/assets/org.png',
    // });

    useEffect(() => {
        fetch('src/assets/data.json')
            .then(async (res) => res.json())
            .then((res) => console.log(res))
            .catch(console.log);
    }, []);

    // <Marker position={[0, 0]} icon={greenIcon}>
    //     <Popup>текст</Popup>
    // </Marker>

    return (
        <>
            <MapContainer
                zoom={1}
                center={[0, 0]}
                zoomControl={false}
                minZoom={1}
                maxZoom={18}
                scrollWheelZoom={true}
                doubleClickZoom={true}
                className="map"
            >
                <LayersControl
                    position="bottomleft"
                    collapsed={false}
                    hideSingleBase={false}
                >
                    <LayersControl.BaseLayer checked name="plan1">
                        <ImageOverlay url={imageUrl} bounds={bounds} />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="plan2">
                        <ImageOverlay url={imageUrl2} bounds={bounds} />
                    </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
        </>
    );
};

export default MyComponent;
