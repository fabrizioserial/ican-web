const transformPhysical = (type) => {
	switch (type) {
		case 0:
			return 'No hice actividad fisica';
		case 1:
			return 'Menos de 30min';
		case 2:
			return 'Entre 30min y 1h';
		case 3:
			return 'Mas de 1h';
		default:
			return 'No respondió';
	}
};
const transformSocial = (type) => {
	switch (type) {
		case 0:
			return 'No vi a nadie';
		case 1:
			return 'Limitado a pocas interacciones';
		case 2:
			return 'Vi a amigos o conocidos por mas de 1h';
		case 3:
			return 'Vi a amigos o conocidos por mas de 2h';
		default:
			return 'No respondió';
	}
};

export const SocialAndPhysicalConfig = (data) => {
	return {
		series: [
			{
				name: 'social',
				data: Object.values(data).map((a) => a[1] + 1),
			},
			{
				name: 'physical',
				data: Object.values(data).map((a) => a[0] + 1),
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
						? transformPhysical(series[seriesIndex][dataPointIndex] - 1)
						: transformSocial(series[seriesIndex][dataPointIndex] - 1);
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
		case 0:
			return 'Menos de 1 lt';
		case 1:
			return 'Entre 1lt y 2lts';
		case 2:
			return 'Mas de 2lts';
		default:
			return 'No respondió';
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
		default:
			return 'No respondió';
	}
};

export const HungerAndThristConfig = (data) => {
	return {
		series: [
			{
				name: 'Hidratación',
				data: Object.values(data).map((a) => a[1] + 1),
			},
			{
				name: 'Apetito',
				data: Object.values(data).map((a) => a[0] + 1),
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
						? transformThirst(series[seriesIndex][dataPointIndex] - 1)
						: transformHungry(series[seriesIndex][dataPointIndex] - 1);
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
