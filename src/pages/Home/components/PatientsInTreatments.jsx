import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useTheme } from 'styled-components';
import {
	StyledBox,
	StyledH3,
	StyledSpan,
} from '../../../common/styledCommonComponents';
import {
	CardHomeStyled,
	TreatmentsContainer,
	TreatmentsLegendContainer,
	TreatmentsTitleBox,
} from './StyledHomeScreen';
import TreatmentIcon from '../../../assets/TreatmentIcon';
import Card from '../../../components/Card';

// If you want to reduce the size of the component, just modify the "size" of circularProgress
function PatientsInTreatments({ patientsInTreatment, totalPatients }) {
	let progress = (patientsInTreatment / totalPatients) * 100;
	const theme = useTheme();

	return (
		<Card
			icon={
				<TreatmentIcon color={theme.OncoPurple} width={23} height={19.55} />
			}
			title={'Pacientes en tratamiento'}
			width={300}
			height={300}
		>
			<TreatmentsContainer css={{ position: 'relative' }}>
				<CircularProgress
					variant="determinate"
					value="100"
					size="8rem"
					thickness={1.5}
					style={{
						color: theme.itemBackground,
						zIndex: 1,
					}}
				/>

				<CircularProgress
					size="8rem"
					thickness={1.5}
					style={{ color: theme.oncoLightPurple3, zIndex: 2 }}
					value={progress}
					variant="determinate"
				/>

				<TreatmentsLegendContainer>
					<StyledSpan css={{ fontSize: '2rem', fontWeight: '500' }}>
						{patientsInTreatment}
					</StyledSpan>
					<StyledSpan css={{ fontSize: '0.8rem' }}>
						{' '}
						/{totalPatients}
					</StyledSpan>
				</TreatmentsLegendContainer>
			</TreatmentsContainer>
		</Card>
	);
}

export default PatientsInTreatments;
