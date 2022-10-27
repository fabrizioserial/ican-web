import React, { useMemo } from 'react';
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
import { usePatientsReportQuery } from '../../../redux/api/homeApi';
import { StyledCircularProgress } from '../../../components/CustomCircularProgress/styles';

// If you want to reduce the size of the component, just modify the "size" of circularProgress
function PatientsInTreatments({ patientsInTreatment, totalPatients }) {
	const { data, isLoading } = usePatientsReportQuery();
	let progress = useMemo(
		() => (data ? (data?.inTreatment / data?.active) * 100 : null),
		[data],
	);
	const theme = useTheme();

	return (
		<Card
			icon={
				<TreatmentIcon color={theme.OncoPurple} width={23} height={19.55} />
			}
			title={'Pacientes en tratamiento'}
			width={'300px'}
			height={'300px'}
		>
			<StyledBox
				css={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{isLoading ? (
					<StyledCircularProgress />
				) : (
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
								{data?.inTreatment}
							</StyledSpan>
							<StyledSpan css={{ fontSize: '0.8rem' }}>
								{' '}
								/{data?.active}
							</StyledSpan>
						</TreatmentsLegendContainer>
					</TreatmentsContainer>
				)}
			</StyledBox>
		</Card>
	);
}

export default PatientsInTreatments;
