import './main.css';
import L from 'leaflet';
import 'leaflet-iiif';
import * as data from './assets/data.json';
const URL = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';

const map = L.map('map').setView([0, 0], 0);


console.log(data);

L.tileLayer(URL, {
    maxZoom: 1,
}).addTo(map);

// const imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
// L.imageOverlay(URL, imageBounds).addTo(map);

const marker = L.marker([0, 0]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

L.TileLayer.Kitten = L.TileLayer.extend({
    getTileUrl: function(coords) {
        var i = Math.ceil( Math.random() * 4 );
        return "https://placekitten.com/256/256?image=" + i;
    },
    getAttribution: function() {
        return "<a href='https://placekitten.com/attribution.html'>PlaceKitten</a>"
    }
});

L.tileLayer.kitten = function() {
    return new L.TileLayer.Kitten();
}

L.tileLayer.kitten().addTo(map);
