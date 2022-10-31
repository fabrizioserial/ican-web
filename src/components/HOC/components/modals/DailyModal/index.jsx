import React from 'react';
import Modal from '../Modal';
import {
	StyledBox,
	StyledP,
	StyledSpan,
} from '../../../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';
import DailyBody from './DailyBody';
import WeeklyIcon from '../../../../../assets/WeeklyIcon';
import DailyModalIcon from '../../../../../assets/DailyModalIcon';
import { useGetDailyReportQuery } from '../../../../../redux/api/patientApi';
import { useSelector } from 'react-redux';
import { StyledCircularProgress } from '../../../../CustomCircularProgress/styles';

const DailyModal = ({ date, weeklyData, handleOnClose }) => {
	const theme = useTheme();
	const reportId = useSelector((state) => state.utilsSlice.reportId);
	const { data, isLoading } = useGetDailyReportQuery(reportId);

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
		}
	};
	return (
		<Modal
			onClose={handleOnClose}
			header={
				<StyledBox css={{ display: 'flex', flexDirection: 'row' }}>
					<DailyModalIcon />
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
								Encuesta Diaria
							</StyledP>
							{renderState(data?.status)}
						</StyledBox>
						<StyledP>{data?.date}</StyledP>
					</StyledBox>
				</StyledBox>
			}
			body={<DailyBody />}
			isLoading={
				isLoading ? (
					<StyledBox
						css={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: '370px',
						}}
					>
						<StyledCircularProgress />
					</StyledBox>
				) : undefined
			}
		/>
	);
};

export default DailyModal;
