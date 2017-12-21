var map = new L.Map("oMeuMapa", {center: [40.633258,-8.659097],zoom: 15});
var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; 
var osmAttrib="Map data OpenStreetMap contributors"; 
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
var iconeUA = L.icon({ iconUrl: "http://xcoa.av.it.pt/ua.png" });
	
map.addLayer(osm);
	
var pontos = [ 
	L.marker([40.633258, -8.659097]), 
];

for(i in pontos) {
	pontos[i].addTo(map); 
}

L.marker([40.633258, -8.659097], {icon: iconeUA}).bindPopup("DETI") 


