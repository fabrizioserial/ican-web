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

const DonutWidget = () => {
	const theme = useTheme();
	return (
		<Card
			icon={
				<TreatmentIcon color={theme.OncoPurple} width={23} height={19.55} />
			}
			title={'Porcentaje de pacientes con tumores'}
			width={396}
			height={300}
		>
			<StyledBox
				css={{
					height: '100%',
					width: '100%',
					marginTop: '20px',
				}}
			>
				<DonutChart />
			</StyledBox>
		</Card>
	);
};

export default DonutWidget;
