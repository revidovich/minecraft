import { useState } from 'react';
import { LatLngBounds } from 'leaflet';
import { ImageOverlay, LayersControl, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../main.css';
import { TileLayer } from 'react-leaflet';
import Markers from './Markers';

const MyComponent = () => {
    const imageUrl = 'src/assets/plan1.jpg';
    const imageUrl2 = 'src/assets/plan2.jpg';
    const [bounds] = useState(new LatLngBounds([100, 200], [0, 0]));

    return (
        <>
            <MapContainer
                zoom={1}
                center={[60, 100]}
                zoomControl={false}
                minZoom={1}
                maxZoom={18}
                scrollWheelZoom={true}
                doubleClickZoom={true}
                className="markercluster-map"
            >
                <TileLayer url="" />
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
                <Markers />
            </MapContainer>
        </>
    );
};

export default MyComponent;
