import React, { useMemo, useState } from 'react';
import Chart from 'react-apexcharts';
import HungryIcon from '../../assets/HungryIcon';
import Card from '../Card';
import { HungerAndThristConfig } from '../../utils/chartsConfigs';
import { StyledCircularProgress } from '../CustomCircularProgress/styles';
import { StyledBox } from '../../common/styledCommonComponents';

const HungerAndThirstChart = ({ data }) => {
	const options = useMemo(() => HungerAndThristConfig(data ?? {}), [data]);

	return (
		<Card
			title={'Apetito e Hidratación'}
			icon={<HungryIcon />}
			width={'618px'}
			height={'268px'}
		>
			{!data ? (
				<StyledBox
					css={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
					}}
				>
					<StyledCircularProgress />
				</StyledBox>
			) : (
				<Chart
					options={options.options}
					series={options.series}
					type="bar"
					width={555}
					height={180}
				/>
			)}
		</Card>
	);
};
export default HungerAndThirstChart;
