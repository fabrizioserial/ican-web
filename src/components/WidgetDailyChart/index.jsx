import React, { useEffect, useState } from 'react';
import { StyledBox } from '../../common/styledCommonComponents';
import { useWeeklyStatisticsQuery } from '../../redux/api/homeApi';
import DailyColumnChart from '../DailyColumnChart';

const WidgetDailyChart = () => {

	const { data, isLoading } = useWeeklyStatisticsQuery();
	const [dataChart, setDataB] = useState({});

	useEffect(() => {
		let aux = {}
		const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
			"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
		];
		if (data) {
			let monthIndex = ''
			Object.values(data.coordinates).forEach(item => {
				let day = new Date(item.x).getDate()
				monthIndex = new Date(item.x).getMonth()
				aux[day] = [item.y]
			})
			setDataB({
				month: monthNames[monthIndex],
				data: aux
			})
		}
	}, [data, isLoading])

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
