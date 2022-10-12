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

const DonutWidget = () => {
	const theme = useTheme();
	return (
		<CardHomeStyled
			lineColor={theme.itemBackground}
			css={{ width: '396px !important', height: '300px !important' }}
		>
			<TreatmentsTitleBox>
				<StyledBox>
					<TreatmentIcon
						color={theme.OncoPurple}
						width={23}
						height={19.55}
					/>
				</StyledBox>
				<StyledH3
					css={{
						color: theme.OncoPurple,
						margin: '0',
						textAlign: 'left',
						fontSize: '1rem',
						fontWeight: 'normal',
					}}
				>
					Porcentaje de pacientes con tumores
				</StyledH3>
			</TreatmentsTitleBox>
			<StyledBox
				css={{
					height: '100%',
					width: '100%',
					marginTop: '20px',
				}}
			>
				<DonutChart />
			</StyledBox>
		</CardHomeStyled>
	);
};

export default DonutWidget;
