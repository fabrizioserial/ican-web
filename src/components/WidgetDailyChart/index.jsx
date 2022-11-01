import React, { useEffect, useState } from 'react';
import { StyledBox } from '../../common/styledCommonComponents';
import { useWeeklyStatisticsQuery } from '../../redux/api/homeApi';
import DailyColumnChart from '../DailyColumnChart';

const WidgetDailyChart = () => {
	const { data, isLoading } = useWeeklyStatisticsQuery();
	const [dataChart, setDataB] = useState({});

	useEffect(() => {
		let aux = {};
		const monthNames = [
			'Enero',
			'Febrero',
			'Marzo',
			'Abril',
			'Mayo',
			'Junio',
			'Julio',
			'Agosto',
			'Septiembre',
			'Octubre',
			'Noviembre',
			'Diciembre',
		];
		if (data) {
			let monthIndex = {};
			console.log(data.coordinates);
			Object.values(data.coordinates).forEach((item) => {
				console.log(item.x, new Date(item.x).getUTCDate());
				let day =
					new Date(item.x).getUTCDate().toString() +
					'/' +
					(new Date(item.x).getUTCMonth() + 1).toString();
				monthIndex = {
					...monthIndex,
					[new Date(item.x).getUTCMonth()]: '',
				};
				aux[day] = [item.y];
			});
			setDataB({
				month:
					Object.keys(monthIndex).length > 1
						? `${monthNames[Object.keys(monthIndex)[0]]} / ${
								monthNames[Object.keys(monthIndex)[1]]
						  }`
						: monthNames[Object.keys(monthIndex)[0]],
				data: aux,
			});
		}
	}, [data, isLoading]);

	return (
		<StyledBox
			css={{
				width: '100%',
				display: 'flex',
			}}
		>
			<DailyColumnChart data={dataChart} isLoading={isLoading} />
		</StyledBox>
	);
};

export default WidgetDailyChart;
