import React from 'react';
import Modal from '../Modal';
import {
	StyledBox,
	StyledP,
	StyledSpan,
} from '../../../../../common/styledCommonComponents';
import WeeklyIcon from '../../../../../assets/WeeklyIcon';
import { useTheme } from 'styled-components';
import Body from './Body';
import { useGetWeeklyReportQuery } from '../../../../../redux/api/patientApi';
import { useSelector } from 'react-redux';
import { StyledCircularProgress } from '../../../../CustomCircularProgress/styles';
import { useWeeklyQuestionsQuery } from '../../../../../redux/api/homeApi';

const WeeklyModal = ({
	date,
	weeklyData,
	state = 'COMPLETED',
	handleOnClose,
}) => {
	const theme = useTheme();
	const reportId = useSelector((state) => state.utilsSlice.reportId);
	const { data, isLoading } = useGetWeeklyReportQuery(reportId);
	const { isLoading: weeklyLoading } = useWeeklyQuestionsQuery();

	const renderState = (state) => {
		switch (state) {
			case 'Completed':
				return (
					<StyledSpan
						css={{
							fontSize: '11px',
							backgroundColor: theme.patientListPillPositive,
							borderRadius: '20px',
							fontWeight: 500,
							padding: '5px 20px',
							color: '#1D6535',
						}}
					>
						Completado
					</StyledSpan>
				);
			case 'Incomplete':
				return (
					<StyledSpan
						css={{
							fontSize: '11px',
							backgroundColor: theme.oncoLightOrange4,
							borderRadius: '20px',
							fontWeight: 500,
							padding: '5px 20px',
							color: '#EA8053',
						}}
					>
						Incompleto
					</StyledSpan>
				);
		}
	};

	return (
		<Modal
			onClose={handleOnClose}
			header={
				<StyledBox css={{ display: 'flex', flexDirection: 'row' }}>
					<WeeklyIcon />
					<StyledBox
						css={{
							marginLeft: '15px',
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<StyledBox
							css={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<StyledP
								css={{
									fontSize: '20px',
									fontWeight: 600,
									marginRight: '6px',
								}}
							>
								Encuesta Semanal
							</StyledP>
							{renderState(data?.status)}
						</StyledBox>
						<StyledP css={{ marginTop: '5px' }}>{data?.endDate}</StyledP>
					</StyledBox>
				</StyledBox>
			}
			body={<Body />}
			isLoading={
				isLoading || weeklyLoading ? (
					<StyledBox
						css={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: 'calc(90vw - 90px - 100px - 100px)',
						}}
					>
						<StyledCircularProgress />
					</StyledBox>
				) : undefined
			}
		/>
	);
};

export default WeeklyModal;
