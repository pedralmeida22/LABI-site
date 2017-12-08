function mostrarMapa(){
	var map = new L.Map("oMeuMapa", {center: [40.633258,-8.659097],zoom: 15});
	var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; 
	var osmAttrib="Map data OpenStreetMap contributors"; 
	var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
	
	map.addLayer(osm);
	
	var pontos = [ 
		L.marker([40.633258, -8.659097]), 
		L.marker([40.642729, -8.747899]),
		L.marker([40.633258, -8.659097]).bindPopup("LABI@DETI"), 
		L.marker([40.62682, -8.64623]).bindPopup("Casa"),
	];
	for(i in pontos) {
		pontos[i].addTo(map); 
	}
	var grupo = new L.featureGroup(pontos); 
		map.fitBounds(grupo.getBounds());
	
	var iconeUA = L.icon({ iconUrl: "http://xcoa.av.it.pt/ua.png" });
	L.marker([40.633258, -8.659097], {icon: iconeUA}).bindPopup("LABI@DETI")
	
	var reitoria = L.polygon( 
		[ [40.63102, -8.65793], [40.63149, -8.65731],
		[40.63126, -8.65699], [40.63078, -8.65759] ],
		{ color: "red" } ); 
	reitoria.addTo(map);
	
	var deti = L.polygon(
		[ [40.63274, -8.65904], [40.63338, -8.65906],
		[40.63355, -8.65978], [40.63283, -8.65974] ],
		{color: "blue" } );
	deti.addTo(map);
	 
	map.on("click", mostraCoordenadas); 
}



function mostrarMapaAlcobaçaCity(){
	var map = new L.Map("oMeuMapa2", {center: [39.54843880029734,-8.980085134244291],zoom: 15});
	var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; 
	var osmAttrib="Map data OpenStreetMap contributors"; 
	var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
	
	map.addLayer(osm);
	
	var pontos = [ 
		L.marker([39.54821, -8.97961]).bindPopup("Mosteiro de Alcobaça"), 
	];
	for(i in pontos) {
		pontos[i].addTo(map); 
	}
	var grupo = new L.featureGroup(pontos); 
		map.fitBounds(grupo.getBounds());
	
	map.on("click", mostraCoordenadas);
}
function mostraCoordenadas(e){ 
	var s = document.getElementById("coordenadas"); 
	s.innerHTML = "Latitude, Longitude = "+e.latlng.lat+", "+e.latlng.lng;
}

