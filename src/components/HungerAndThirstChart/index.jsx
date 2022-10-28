import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import HungryIcon from '../../assets/HungryIcon';
import Card from '../Card';
import { HungerAndThristConfig } from '../../utils/chartsConfigs';

const HungerAndThirstChart = ({ data }) => {
	const options = useMemo(
		() => HungerAndThristConfig(data ?? {}),
		[data ?? {}],
	);

	return (
		<Card
			title={'Apetito e Hidratación'}
			icon={<HungryIcon />}
			width={'618px'}
			height={'268px'}
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
