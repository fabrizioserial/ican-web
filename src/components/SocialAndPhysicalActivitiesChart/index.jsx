import React, { useEffect, useMemo, useState } from 'react';
import {
	StyledBox,
	StyledCardHome,
	StyledHr,
	StyledP,
} from '../../common/styledCommonComponents';
import { useTheme } from 'styled-components';
import Chart from 'react-apexcharts';
import { SocialAndPhysicalConfig } from '../../utils/chartsConfigs';

const SocialAndPhysicalActivitiesChart = () => {
	const theme = useTheme();
	const [active, setActive] = useState('physical');
	const data = {
		'31/08': [1, 3],
		'1/09': [0, 1],
		'2/09': [2, 2],
		'3/09': [3, 1],
		'4/09': [1, 0],
		'5/09': [2, 1],
		'6/09': [1, 3],
	};

	const options = useMemo(() => SocialAndPhysicalConfig(data), [data]);

	const handleActividadFisica = () => {
		ApexCharts.exec('mychart', 'hideSeries', ['social']);
		ApexCharts.exec('mychart', 'showSeries', ['physical']);
		setActive('physical');
	};
	const handleActividadSocial = () => {
		ApexCharts.exec('mychart', 'hideSeries', ['physical']);
		ApexCharts.exec('mychart', 'showSeries', ['social']);
		setActive('social');
	};

	useEffect(() => {
		handleActividadFisica();
	}, []);

	return (
		<StyledCardHome
			css={{
				display: 'flex',
				flexDirection: 'column',
				height: '270px',
				width: '352px',
				color: theme.oncoBlack,
				marginLeft: '36px',
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					borderBottom: '1px solid #F0EDED',
					height: '50px',
					alignItems: 'center',
					position: 'relative',
				}}
			>
				<StyledBox
					css={{
						cursor: 'pointer',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
					onClick={handleActividadFisica}
				>
					<StyledP
						css={{
							color:
								active === 'physical'
									? theme.OncoPurple
									: theme.oncoGrey2,
						}}
					>
						Actividad Fisica
					</StyledP>
					<StyledHr
						css={{
							borderStyle: 'solid',
							width: '80px',
							borderWidth: 1,
							position: 'absolute',
							bottom: -2,
							margin: 0,
							borderColor:
								active === 'physical'
									? theme.OncoPurple
									: 'transparent',
							backgroundColor:
								active === 'physical'
									? theme.OncoPurple
									: 'transparent',
						}}
					/>
				</StyledBox>
				<StyledBox
					css={{
						cursor: 'pointer',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
					onClick={handleActividadSocial}
				>
					<StyledP
						css={{
							color:
								active === 'social'
									? theme.OncoPurple
									: theme.oncoGrey2,
						}}
					>
						Actividad Social
					</StyledP>
					<StyledHr
						css={{
							borderStyle: 'solid',
							width: '80px',
							borderWidth: 1,
							position: 'absolute',
							bottom: -2,
							margin: 0,
							borderColor:
								active === 'social' ? theme.OncoPurple : 'transparent',
							backgroundColor:
								active === 'social' ? theme.OncoPurple : 'transparent',
						}}
					/>
				</StyledBox>
			</StyledBox>
			<StyledBox
				css={{
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Chart
					options={options.options}
					series={options.series}
					type="bar"
					width={300}
					toggleSeries={'physical'}
					height={180}
				/>
			</StyledBox>
		</StyledCardHome>
	);
};

export default SocialAndPhysicalActivitiesChart;