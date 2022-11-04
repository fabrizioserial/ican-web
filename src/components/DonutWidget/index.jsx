import React from 'react';
import TreatmentIcon from '../../assets/TreatmentIcon';
import { StyledBox, StyledH3 } from '../../common/styledCommonComponents';
import {
	CardHomeStyled,
	TreatmentsContainer,
	TreatmentsTitleBox,
} from '../../pages/Home/components/StyledHomeScreen';
import { useTheme } from 'styled-components';
import DonutChart from './donutChart/DonutChart';
import Card from '../Card';
import { useCancerStatisticsQuery } from '../../redux/api/homeApi';
import { StyledCircularProgress } from '../CustomCircularProgress/styles';

const DonutWidget = () => {
	const theme = useTheme();
	const { isLoading } = useCancerStatisticsQuery();

	return (
		<Card
			icon={
				<TreatmentIcon color={theme.OncoPurple} width={23} height={19.55} />
			}
			css={{
				overflow: 'hidden',
			}}
			title={'Porcentaje de pacientes con tumores'}
			width={'405px'}
			height={'300px'}
		>
			<StyledBox
				css={{
					height: '100%',
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{isLoading ? <StyledCircularProgress size={50} /> : <DonutChart />}
			</StyledBox>
		</Card>
	);
};

export default DonutWidget;
