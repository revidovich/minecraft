import { useEffect, useState } from 'react';
import L from 'leaflet';
// import { useMap } from 'react-leaflet';
import { LayerGroup, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../main.css';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import MarkerClusterGroup from './MarkerClusterGroup';
// import MarkerClusterGroup from '@changey/react-leaflet-markercluster';

const points2 = [
    {
        x: 162,
        y: 173,
        type: 'fixed',
    },
    {
        x: 171,
        y: 171,
        type: 'fixed',
    },
    {
        x: 0,
        y: 0,
        type: 'waiting',
    },
    {
        x: 2,
        y: 90,
        type: 'verification',
    },
];

const Markers = () => {
    // const [points, setPoints] = useState([{ x: 0, y: 0, type: 'fixed' }]);

    const greenIcon = L.icon({
        iconUrl: 'src/assets/gr.png',
    });

    const redIcon = L.icon({
        iconUrl: 'src/assets/rd.png',
    });

    const orangeIcon = L.icon({
        iconUrl: 'src/assets/org.png',
    });

    // useEffect(() => { //controllers
    //     fetch('src/assets/data.json')
    //         .then(async (res) => res.json())
    //         .then((res) => setPoints(res[0].markers))
    //         .catch(console.log);
    // }, []);

    // const createClusterCustomIcon = function (cluster) {
    //     return L.divIcon({
    //       className: 'marker-cluster-icon',
    //       html: `${cluster.getChildCount()}`,
    //       iconAnchor: [22, 51],
    //       iconSize: [44, 56],
    //     });
    //   };

    return (
        <LayerGroup>
            <MarkerClusterGroup>
                {points2.map(({ x, y, type }, i) => (
                    <Marker
                        key={i}
                        position={[y, x]}
                        icon={
                            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                            (type === 'fixed' && greenIcon) ||
                            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                            (type === 'waiting' && redIcon) ||
                            orangeIcon
                        }
                    >
                        <Tooltip>{type}</Tooltip>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </LayerGroup>
    );
};

export default Markers;
