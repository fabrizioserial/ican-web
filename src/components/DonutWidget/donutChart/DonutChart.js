import React from 'react';
import Chart from 'react-apexcharts';
import { StyledBox, StyledP } from '../../../common/styledCommonComponents';
import { useCancerStatisticsQuery } from '../../../redux/api/homeApi';
import { CapitalizeText } from '../../../utils/utils';

const DonutChart = () => {
	const { data } = useCancerStatisticsQuery();

	const series = data?.tumors.map((tum) => tum.amount) ?? [];

	const options = {
		labels: data?.tumors.map((tum) => CapitalizeText(tum.organ)) ?? [],
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
			height: '180px',
			width: '180px',
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
					(opts.w.globals.series[opts.seriesIndex] / data.total) * 100 +
						'%',
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
					return (val / data?.total) * 100 + '%';
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
			{data?.tumors.map((tum) => CapitalizeText(tum.organ)).length === 0 ? (
				<StyledBox
					css={{
						height: '100%',
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'white',
					}}
				>
					<StyledP
						css={{
							maxWidth: '200px',
							textAlign: 'center',
							color: '#A3A3A3',
						}}
					>
						No se encontraron registros suficientes
					</StyledP>
				</StyledBox>
			) : (
				<Chart options={options} series={series} type="donut" width={350} />
			)}
		</StyledBox>
	);
};

export default DonutChart;
