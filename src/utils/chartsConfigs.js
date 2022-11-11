const transformPhysical = (type) => {
	switch (type) {
		case 'No hice actividad fisica':
			return 1;
		case 'Menos de 30min.':
			return 2;
		case 'Entre 30min y 1h':
			return 3;
		case 'Mas de 1h':
			return 4;
		case 0:
			return 'No hice actividad fisica';
		case 1:
			return 'Menos de 30min';
		case 2:
			return 'Entre 30min y 1h';
		case 3:
			return 'Mas de 1h';
		case -1:
			return 'No respondió';
		default:
			return 0;
	}
};
const transformSocial = (type) => {
	switch (type) {
		case 'No vi a nadie':
			return 1;
		case 'Limitado a pocas interacciones':
			return 2;
		case 'Vi a amigos o conocidos por mas de 1h':
			return 3;
		case 'Vi a amigos o conocidos por mas de 2h':
			return 4;
		case 0:
			return 'No vi a nadie';
		case 1:
			return 'Limitado a pocas interacciones';
		case 2:
			return 'Vi a amigos o conocidos por mas de 1h';
		case 3:
			return 'Vi a amigos o conocidos por mas de 2h';
		case -1:
			return 'No respondió';
		default:
			return 0;
	}
};

export const SocialAndPhysicalConfig = (data) => {
	return {
		isEmpty: !Object.values(data).find((a) => a[1]),
		series: [
			{
				name: 'social',
				data: Object.values(data).map((a) => transformSocial(a[0]) + 1),
			},
			{
				name: 'physical',
				data: Object.values(data).map((a) => transformPhysical(a[1]) + 1),
			},
		],
		options: {
			chart: {
				id: 'mychart',
				type: 'bar',
				width: 300,
				animations: {
					enabled: true,
					easing: 'easeinout',
					speed: 250,
					animateGradually: {
						enabled: true,
						delay: 100,
					},
					dynamicAnimation: {
						enabled: true,
						speed: 100,
					},
				},
				toolbar: {
					show: false,
				},
			},
			grid: {
				show: false,
				xaxis: {
					lines: {
						show: false,
					},
				},
				yaxis: {
					lines: {
						show: false,
					},
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: 70,
					endingShape: 'rounded',
					borderRadius: 5,
				},
			},
			dataLabels: {
				enabled: false,
			},
			states: {
				normal: {
					filter: {
						type: 'none',
					},
				},
				hover: {
					filter: {
						type: 'none',
					},
				},
				active: {
					filter: {
						type: 'none',
					},
				},
			},
			colors: ['#80A2F9', '#A67FE7'],
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: Object.keys(data),
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				labels: {
					style: {
						colors: '#A3A3A3',
						fontFamily: 'Helvetica',
						fontWeight: 400,
						fontSize: '10px',
					},
				},
			},
			yaxis: {
				show: false,
			},
			tooltip: {
				fillSeriesColor: false,
				followCursor: false,
				custom: function ({ series, seriesIndex, dataPointIndex, w }) {
					const textToAdd = seriesIndex
						? transformPhysical(series[seriesIndex][dataPointIndex] - 2)
						: transformSocial(series[seriesIndex][dataPointIndex] - 2);
					return (
						'<div style="padding: 5px 20px; ' +
						'border-radius: 5px; ' +
						'background-color:#393939 !important;' +
						'color: white;' +
						'border-style: none;' +
						'border-width: 0px;' +
						'">' +
						'<span>' +
						textToAdd +
						'</span>' +
						'</div>'
					);
				},
				fixed: {
					position: 'top',
				},
				onDatasetHover: {
					highlightDataSeries: false,
				},
				marker: {
					show: false,
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'light',
					type: 'vertical',
					opacityFrom: 1,
					opacityTo: 0.55,
				},
			},
			legend: {
				show: false,
				position: 'top',
				horizontalAlign: 'left',
				inverseOrder: false,
				markers: {
					radius: 20,
				},
			},
		},
	};
};

const transformThirst = (type) => {
	switch (type) {
		case 'Menos de 1lt':
			return 1;
		case 'Entre 1lt y 2lts':
			return 2;
		case 'Mas de 2lts':
			return 3;
		case 0:
			return 'Menos de 1 lt';
		case 1:
			return 'Entre 1lt y 2lts';
		case 2:
			return 'Mas de 2lts';
		case -1:
			return 'No respondió';
		default:
			return 0;
	}
};
const transformHungry = (type) => {
	switch (type) {
		case 0:
			return 'Menos de lo normal';
		case 1:
			return 'Normal';
		case 2:
			return 'Mas de lo normal';
		case 'Menos de lo normal':
			return 1;
		case 'Normal':
			return 2;
		case 'Mas de lo normal':
			return 3;
		case -1:
			return 'No respondió';
		default:
			return 0;
	}
};

export const HungerAndThristConfig = (data) => {
	return {
		isEmpty: !Object.values(data).find((a) => a[1]),
		series: [
			{
				name: 'Hidratación',
				data: Object.values(data).map((a) => transformThirst(a[1]) + 1),
			},
			{
				name: 'Apetito',
				data: Object.values(data).map((a) => transformHungry(a[0]) + 1),
			},
		],
		options: {
			chart: {
				type: 'bar',
				width: 555,
				toolbar: {
					show: false,
				},
			},
			grid: {
				show: false,
				xaxis: {
					lines: {
						show: false,
					},
				},
				yaxis: {
					lines: {
						show: false,
					},
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: 75,
					endingShape: 'rounded',
					borderRadius: 5,
				},
			},
			dataLabels: {
				enabled: false,
			},
			states: {
				normal: {
					filter: {
						type: 'none',
					},
				},
				hover: {
					filter: {
						type: 'none',
					},
				},
				active: {
					filter: {
						type: 'none',
					},
				},
			},
			colors: ['#80A2F9', '#A67FE7'],
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: Object.keys(data),
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				labels: {
					style: {
						colors: '#A3A3A3',
						fontFamily: 'Helvetica',
						fontWeight: 400,
						fontSize: '10px',
					},
				},
			},
			yaxis: {
				show: false,
			},
			tooltip: {
				fillSeriesColor: false,
				followCursor: false,
				custom: function ({ series, seriesIndex, dataPointIndex, w }) {
					const textToAdd = !seriesIndex
						? transformThirst(series[seriesIndex][dataPointIndex] - 2)
						: transformHungry(series[seriesIndex][dataPointIndex] - 2);
					return (
						'<div style="padding: 5px 20px; ' +
						'border-radius: 5px; ' +
						'background-color:#393939 !important;' +
						'color: white;' +
						'border-style: none;' +
						'border-width: 0px;' +
						'">' +
						'<span>' +
						textToAdd +
						'</span>' +
						'</div>'
					);
				},
				fixed: {
					position: 'top',
				},
				onDatasetHover: {
					highlightDataSeries: false,
				},
				marker: {
					show: false,
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'light',
					type: 'vertical',
					opacityFrom: 1,
					opacityTo: 0.55,
				},
			},
			legend: {
				show: true,
				position: 'top',
				horizontalAlign: 'left',
				inverseOrder: false,
				markers: {
					radius: 20,
				},
			},
		},
	};
};

export const DailyColumnChartConfig = (data, total) => {
	const dataAux = () => {
		let aux = [];
		let maxValue = 0;

		Object.values(data).forEach((item) => {
			if (item > maxValue) {
				maxValue = item;
			}
		});
		let math = maxValue / 10;

		Object.keys(data).forEach((dat) => {
			aux.push({
				x: dat,
				y: data[dat][0],
				goals: [
					{
						value: -math,
						strokeHeight: 9,
						strokeWidth: 0,
						strokeLineCap: 'round',
						strokeColor: '#949494',
						top: -10,
					},
				],
			});
		});
		return aux;
	};
	return {
		isEmpty: !Object.values(data).find((a) => a[1]),
		series: [
			{
				data: dataAux(),
			},
		],
		options: {
			chart: {
				type: 'bar',
				width: 555,
				toolbar: {
					show: false,
				},
			},
			grid: {
				show: false,
				xaxis: {
					lines: {
						show: false,
					},
				},
				yaxis: {
					lines: {
						show: false,
					},
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: 75,
					endingShape: 'rounded',
					borderRadius: 5,
				},
			},
			dataLabels: {
				enabled: false,
			},
			states: {
				normal: {
					filter: {
						type: 'none',
					},
				},
				hover: {
					filter: {
						type: 'none',
					},
				},
				active: {
					filter: {
						type: 'none',
					},
				},
			},
			colors: ['#80A2F9', '#A67FE7'],
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: Object.keys(data).map((a) => a),
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				labels: {
					style: {
						colors: '#A3A3A3',
						fontFamily: 'Helvetica',
						fontWeight: 400,
						fontSize: '10px',
					},
					offsetY: 10,
				},
			},
			yaxis: {
				show: false,
				max: total,
			},
			tooltip: {
				fillSeriesColor: false,
				followCursor: false,
				custom: function ({ series, dataPointIndex }) {
					const textToAdd = series[0];
					return (
						'<div style="padding: 5px 20px; ' +
						'border-radius: 5px; ' +
						'background-color:#393939 !important;' +
						'color: white;' +
						'border-style: none;' +
						'border-width: 0px;' +
						'display:flex ' +
						'flex-direction:column ' +
						'">' +
						'<p>' +
						'Completados: ' +
						Object.values(data)[dataPointIndex][0] +
						'</p>' +
						'<p>' +
						'Incompletos: ' +
						Object.values(data)[dataPointIndex][1] +
						'</p>' +
						'<p>' +
						'Sin arrancar: ' +
						Object.values(data)[dataPointIndex][2] +
						'</p>' +
						'</div>'
					);
				},
				fixed: {
					position: 'top',
				},
				onDatasetHover: {
					highlightDataSeries: false,
				},
				marker: {
					show: false,
				},
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'light',
					type: 'vertical',
					opacityFrom: 1,
					opacityTo: 0.55,
				},
			},
			legend: {
				show: true,
				position: 'top',
				horizontalAlign: 'left',
				inverseOrder: false,
				markers: {
					radius: 20,
				},
			},
		},
	};
};
