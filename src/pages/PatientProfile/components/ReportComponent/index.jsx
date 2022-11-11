import { Table } from '@material-ui/core';
import { StyledBox, StyledP } from '../../../../common/styledCommonComponents';
import IconHeartFile from '../../../../assets/IconHeartFile';
import PollResultsBody from '../../../PollResultsTable/PollResultsBody';
import { StyledButtonMore } from '../../../../components/PatientsList/PatientContainer/styles';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useGetPollResultsQuery } from '../../../../redux/api/patientApi';
import { useNavigate, useParams } from 'react-router';
import Card from '../../../../components/Card';
import { StyledCircularProgress } from '../../../../components/CustomCircularProgress/styles';

const ReportComponent = () => {
	const theme = useTheme();
	const { patientId } = useParams();
	const navigate = useNavigate();
	const [pollResults, setPollResults] = useState(undefined);
	const {
		data: dataPollResults,
		isSuccess: isSuccessPollResults,
		isLoading,
	} = useGetPollResultsQuery({ patientId });

	useEffect(() => {
		if (dataPollResults) {
			let finalArray = [];
			finalArray = finalArray.concat(
				dataPollResults.reports.dailyReports.map((item) => ({
					...item,
					type: 'daily',
				})),

				dataPollResults.reports.weeklyReports
					.map((item) => ({
						id: item.id,
						status: item.status,
						date: item.endDate,
						type: 'weekly',
					}))
					.filter((item) => item.id),
			);
			finalArray = _.orderBy(finalArray, 'date', 'desc');
			setPollResults(finalArray);
		}
	}, [dataPollResults, isSuccessPollResults]);

	console.log(pollResults);

	return (
		<Card
			title={'Últimos reportes'}
			icon={<IconHeartFile />}
			width={'1003'}
			height={'386px'}
			css={{
				marginTop: '30px',
			}}
		>
			<StyledBox css={{ width: '100%', height: '100%', overflowY: 'auto' }}>
				{isLoading ? (
					<StyledBox
						css={{
							height: '100%',
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<StyledCircularProgress />
					</StyledBox>
				) : (
					<Table>
						{pollResults && Object.values(pollResults).length > 0 ? (
							<PollResultsBody data={pollResults.slice(0, 4)} />
						) : (
							<StyledBox
								css={{
									height: 200,
									backgroundColor: '#fff',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<StyledP css={{ color: theme.oncoGrey2 }}>
									No se encontraron registros
								</StyledP>
							</StyledBox>
						)}
					</Table>
				)}

				<StyledBox
					css={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						paddingTop: 0,
						boxSizing: 'border-box',
						padding: '20px 25px',
						backgroundColor: 'transparent',
					}}
				>
					{pollResults && Object.values(pollResults).length > 5 && (
						<StyledButtonMore
							width={'100%'}
							onClick={() => navigate(`/poll-results/${patientId}`)}
						>
							Ver más
						</StyledButtonMore>
					)}
				</StyledBox>
			</StyledBox>
		</Card>
	);
};

export default ReportComponent;
