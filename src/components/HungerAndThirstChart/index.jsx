import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import HungryIcon from '../../assets/HungryIcon';
import Card from '../Card';
import { HungerAndThristConfig } from '../../utils/chartsConfigs';

const HungerAndThirstChart = ({ data }) => {
	// const data = {
	// 	'31/08': [1, 2],
	// 	'1/09': [0, 1],
	// 	'2/09': [2, 2],
	// 	'3/09': [0, 1],
	// 	'4/09': [1, 0],
	// 	'5/09': [2, 1],
	// 	'6/09': [1, 0],
	// };

	const options = useMemo(() => HungerAndThristConfig(data ?? {}), [data ?? {}]);

	return (
		<Card
			title={'Apetito e Hidratación'}
			icon={<HungryIcon />}
			width={618}
			height={268}
		>
			<Chart
				options={options.options}
				series={options.series}
				type="bar"
				width={555}
				height={180}
			/>
		</Card>
	);
};
export default HungerAndThirstChart;
