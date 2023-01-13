import './main.css';
import L from 'leaflet';
import 'leaflet-iiif';
import * as data from './assets/data.json';
const URL = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';

// const map = L.map('map').setView([0, 0], 0);

map = L.map('map', {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0
});

console.log(data);

L.tileLayer(URL, {
    maxZoom: 1,
}).addTo(map);

// const imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
// L.imageOverlay(URL, imageBounds).addTo(map);

const marker = L.marker([0, 0]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// L.TileLayer.Kitten = L.TileLayer.extend({
//     getTileUrl: function(coords) {
//         const i = Math.ceil( Math.random() * 4 );
//         return "https://placekitten.com/256/256?image=" + i;
//     },
//     getAttribution: function() {
//         return "<a href='https://placekitten.com/attribution.html'>PlaceKitten</a>"
//     }
// });

// L.tileLayer.kitten = function() {
//     return new L.TileLayer.Kitten();
// }

// L.tileLayer.kitten().addTo(map);

var map, stanfordMlk, apostle, princetonMap, bnf, iiifLayers, scottlandBagpipe;
map.dragging.disable()

stanfordMlk = L.tileLayer.iiif('https://stacks.stanford.edu/image/iiif/hg676jb4964%2F0380_796-44/info.json').addTo(map);

princetonMap = L.tileLayer.iiif('http://libimages.princeton.edu/loris2/pudl0076%2Fmap_pownall%2F00000001.jp2/info.json');

apostle = L.tileLayer.iiif('http://ids.lib.harvard.edu/ids/iiif/25286610/info.json');

bnf = L.tileLayer.iiif('http://gallica.bnf.fr/iiif/ark:/12148/btv1b84539771/f1/info.json');

acrobata = L.tileLayer.iiif('http://libimages.princeton.edu/loris2/pudl0033/2007/04003/00000001.jp2/info.json', {
  attribution: '<a href="http://pudl.princeton.edu/objects/pz50gw22j">Acrobata Marroquí - Lorenzo Homar</a>',
  quality: 'gray'
});

scottlandBagpipe = L.tileLayer.iiif('http://images.is.ed.ac.uk/luna/servlet/iiif/UoEwmm~2~2~77099~164515/info.json');

staticTiles = L.tileLayer.iiif('http://evil-manifests.davidnewbury.com/iiif/images/garden-1/info.json');

iiifLayers = {
  'Martin Luther King Jr. & Joan Baez ...': stanfordMlk,
  'The provinces of New York and N...': princetonMap,
  'Apostle: Anonymous sculptor of Fl...': apostle,
  'ManuscritKalîla et Dimna, avec de...': bnf,
  'Acrobata Marroquí': acrobata,
  'A static tile source': staticTiles,
  'A Compleat Theory of the Scots Highland Bagpipe': scottlandBagpipe
};

L.control.layers(iiifLayers).addTo(map);
