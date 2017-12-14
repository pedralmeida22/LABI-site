function desenhaGrafico() {
	$("#grafico-linhas").highcharts({
		title: {
			text: "Média de temperaturas",
		},
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
				"Jul", "Ago", "Set", "Out", "Nov", "Dez"]
		},
		series: [{
			name: "Vagos",
			data: [8.0, 9.0, 11.0, 12.0, 14.0, 17.0, 19.0, 19.0, 18.0, 15.0, 11.0, 9.0]
		},{
			name: "Londres",
			data: [4.3, 4.5, 6.9, 8.7, 12.1, 15.1, 17.3, 17.0, 14.3, 10.9, 7.2, 4.7]
		}]
	});
};

function desenhaGrafico2() {
	$("#grafico-linhas").highcharts({
		chart: {
			type: "column"
		},
		title: {
			text: "Média de temperaturas",
		},
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
				"Jul", "Ago", "Set", "Out", "Nov", "Dez"]
		},
		series: [{
			name: "Vagos",
			data: [8.0, 9.0, 11.0, 12.0, 14.0, 17.0, 19.0, 19.0, 18.0, 15.0, 11.0, 9.0]
		},{
			name: "Londres",
			data: [4.3, 4.5, 6.9, 8.7, 12.1, 15.1, 17.3, 17.0, 14.3, 10.9, 7.2, 4.7]
		}]
	});
};

function desenhaGrafico3() {
	$("#grafico-linhas").highcharts({
		chart: {
			type: "scatter"
		},
		title: {
			text: "Média de temperaturas",
		},
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
				"Jul", "Ago", "Set", "Out", "Nov", "Dez"]
		},
		series: [{
			name: "Vagos",
			data: [8.0, 9.0, 11.0, 12.0, 14.0, 17.0, 19.0, 19.0, 18.0, 15.0, 11.0, 9.0]
		},{
			name: "Londres",
			data: [4.3, 4.5, 6.9, 8.7, 12.1, 15.1, 17.3, 17.0, 14.3, 10.9, 7.2, 4.7]
		}]
	});
};

function desenhaGrafico4() {
	$("#grafico-linhas").highcharts({
		chart: {
			type: "bar"
		},
		title: {
			text: "Média de temperaturas",
		},
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
				"Jul", "Ago", "Set", "Out", "Nov", "Dez"]
		},
		series: [{
			name: "Vagos",
			data: [8.0, 9.0, 11.0, 12.0, 14.0, 17.0, 19.0, 19.0, 18.0, 15.0, 11.0, 9.0]
		},{
			name: "Londres",
			data: [4.3, 4.5, 6.9, 8.7, 12.1, 15.1, 17.3, 17.0, 14.3, 10.9, 7.2, 4.7]
		}]
	});
};

function desenhaGrafico5() {
	$("#grafico-linhas").highcharts({
		chart: {
			type: "area"
		},
		title: {
			text: "Média de temperaturas",
		},
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
				"Jul", "Ago", "Set", "Out", "Nov", "Dez"]
		},
		series: [{
			name: "Vagos",
			data: [8.0, 9.0, 11.0, 12.0, 14.0, 17.0, 19.0, 19.0, 18.0, 15.0, 11.0, 9.0]
		},{
			name: "Londres",
			data: [4.3, 4.5, 6.9, 8.7, 12.1, 15.1, 17.3, 17.0, 14.3, 10.9, 7.2, 4.7]
		}]
	});
};

function desenhaGrafico6() {
	$("#grafico-linhas").highcharts({
		chart: {
			type: "pie"
		},
		title: {
			text: "Média de temperaturas",
		},
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
				"Jul", "Ago", "Set", "Out", "Nov", "Dez"]
		},
		series: [{
			name: "Vagos",
			data: [8.0, 9.0, 11.0, 12.0, 14.0, 17.0, 19.0, 19.0, 18.0, 15.0, 11.0, 9.0]
		},{
			name: "Londres",
			data: [4.3, 4.5, 6.9, 8.7, 12.1, 15.1, 17.3, 17.0, 14.3, 10.9, 7.2, 4.7]
		}]
	});
};
