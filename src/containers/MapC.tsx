import '../main.css';
import L from 'leaflet';

export const MapC = () => {
    const map = L.map('map', {
        center: [0, 0],
        crs: L.CRS.Simple,
        zoom: 0
      }).setView([55, 37], 13);

    return (
        map
    );
};
