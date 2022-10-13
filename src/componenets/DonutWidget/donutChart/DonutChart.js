import React from 'react';
import Chart from 'react-apexcharts';
import { StyledBox } from '../../../common/styledCommonComponents';

const DonutChart = () => {
	const series = [54, 40, 30, 23, 16, 11, 10];

	const options = {
		labels: [
			'Mamas',
			'Colon',
			'Prostata',
			'Pulmon',
			'Cervix',
			'Estomago',
			'Otros',
		],
		colors: [
			'#80A2F9',
			'#86D3A5',
			'#E1B1EE',
			'#CDAFFF',
			'#ECA485',
			'#BBE5CC',
			'#DC91F0',
		].reverse(),
		dataLabels: {
			enabled: false,
		},
		chart: {
			background: '#fff',
		},
		legend: {
			show: true,
			showForSingleSeries: false,
			showForNullSeries: true,
			showForZeroSeries: true,
			position: 'right',
			horizontalAlign: 'center',
			fontSize: '11px',
			formatter: function (seriesName, opts) {
				return [
					seriesName,
					'  ',
					opts.w.globals.series[opts.seriesIndex] + '%',
				];
			},
			labels: {
				colors: '#989898',
			},
			itemMargin: {
				vertical: 3,
			},
			onItemHover: {
				highlightDataSeries: false,
			},
			onItemClick: {
				toggleDataSeries: false,
			},
			markers: {
				width: 6,
				height: 6,
				radius: 12,
				offsetX: -5,
				offsetY: -1,
			},
		},
		tooltip: {
			fillSeriesColor: false,
			followCursor: true,
			y: {
				title: {
					formatter: (seriesName) => seriesName + ':',
				},
			},
			marker: {
				show: false,
			},
		},
		plotOptions: {
			pie: {
				offsetY: 10,
				customScale: 0.8,
				expandOnClick: false,
				donut: {
					size: '70%',
				},
			},
		},
		yaxis: {
			labels: {
				formatter: function (val) {
					return val + '%';
				},
			},
		},
	};

	return (
		<StyledBox
			css={{
				backgroundColor: '#393939 !important',
				color: '#fff !important',
			}}
		>
			<Chart options={options} series={series} type="donut" />
		</StyledBox>
	);
};

export default DonutChart;
