var map; var osmUrl; var osmAttrib;
function desenhamapa() {
	map = new L.Map("LeMapa", {center: [40.633258,-8.659097],zoom: 15});
	osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
	osmAttrib="Map data OpenStreetMap contributors";
	osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
	map.addLayer(osm);
}

function desenhamapa2() {
	map = new L.Map("LeMapa", {center: [40.552768,-8.7339622],zoom: 13});
	osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
	osmAttrib="Map data OpenStreetMap contributors";
	osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
	map.addLayer(osm);
	map.reload();
}
