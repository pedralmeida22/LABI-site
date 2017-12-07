function mostrarMapa(){
	var map = new L.Map("oMeuMapa", {center: [40.633258,-8.659097],zoom: 15});
	var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; 
	var osmAttrib="Map data OpenStreetMap contributors"; 
	var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
	var iconeUA = L.icon({ iconUrl: "http://xcoa.av.it.pt/ua.png" });
	
	map.addLayer(osm);
	
	var pontos = [ 
		L.marker([40.633258, -8.659097]), 
		L.marker([40.642729, -8.747899]),
		L.marker([40.633258, -8.659097]).bindPopup("LABI@DETI"), 
	];
	for(i in pontos) {
		pontos[i].addTo(map); 
	}
	var grupo = new L.featureGroup(pontos); 
		map.fitBounds(grupo.getBounds());
		
	L.marker([40.633258, -8.659097], {icon: iconeUA}).bindPopup("LABI@DETI") 
	
	map.on("click", mostraCoordenadas);
}
function mostrarMapaAlcobaçaCity(){
	var map = new L.Map("oMeuMapa2", {center: [39.54843880029734,-8.980085134244291],zoom: 15});
	var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; 
	var osmAttrib="Map data OpenStreetMap contributors"; 
	var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
	
	map.addLayer(osm);
}
function mostraCoordenadas(e){ 
	var s = document.getElementById("coordenadas"); 
	s.innerHTML = "Latitude, Longitude = "+e.latlng.lat+", "+e.latlng.lng;
}

