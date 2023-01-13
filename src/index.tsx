import './main.css';
import L from 'leaflet';
import 'leaflet-iiif';
import * as data from './assets/data.json';
import * as info from './assets/info.json';
// const URL = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';

// const map = L.map('map').setView([0, 0], 0);
const map = L.map('map', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0
});
map.dragging.disable()


//PICTURES & LAYOUTS---------------------------
const imageUrl = 'src/assets/plan1.jpg';
const imageUrl2 = 'src/assets/plan2.jpg';
const imageBounds = [[-100, -100], [100, 100]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

const layers = {
  '1': L.imageOverlay(imageUrl, imageBounds).addTo(map),
  '2': L.imageOverlay(imageUrl2, imageBounds).addTo(map),
};

L.control.layers(layers).addTo(map);





//ICONS---------------------------
const greenIcon = L.icon({
    iconUrl: 'src/assets/gr.png',
});

const redIcon = L.icon({
    iconUrl: 'src/assets/rd.png',
});

const orangeIcon = L.icon({
    iconUrl: 'src/assets/org.png',
});

L.marker([0, 0], {icon: redIcon}).addTo(map).bindPopup(`${data.default[0].planName}`),
L.marker([-300, 300], {icon: greenIcon}).addTo(map).bindPopup(`${data.default[0].planName}`),
L.marker([51.49, -0.1], {icon: orangeIcon}).addTo(map).bindPopup(`${data.default[0].planName}`)

// var cities = L.layerGroup([
// ]);
// data.default[0].markers.map((el) => {
//     L.marker([el.x, el.y]).addTo(map);
//     console.log(2222, marker);
// });
