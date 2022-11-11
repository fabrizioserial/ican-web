import React, { useCallback, useEffect, useState } from 'react';
import {
	StyledBox,
	StyledH3,
	StyledScreen,
} from '../../common/styledCommonComponents';
import { Table, TableContainer } from '@material-ui/core';
import _ from 'lodash';

import PollResultsHeader from './PollResultsHeader';
import PollResultsBody from './PollResultsBody';
import PollResultsBottom from './PollResultsBottom';
import { useParams } from 'react-router';
import {
	useLazyGetPollTableQuery,
	useGetPollResultsQuery,
	useLazyGetPatientDataQuery,
} from '../../redux/api/patientApi';
import { CapitalizeText } from '../../utils/utils';

const PollResultsScreen = () => {
	const { patientId } = useParams();
	const { data: dataPollResults, isSuccess: isSuccessPollResults } =
		useGetPollResultsQuery({ patientId, params: { take: 8, skip: 0 } });
	const [
		refetchPoll,
		{ data: dataPollTableResults, isSuccess: isSuccessPollTableResults },
	] = useLazyGetPollTableQuery();
	const [pollResults, setPollResults] = useState(undefined);

	const [refetchPatientData, { data: dataPatient, isSuccess, isLoading }] =
		useLazyGetPatientDataQuery();

	const handleChangePage = useCallback(
		(next) => {
			const params = {
				take: 8,
				skip:
					8 *
					((dataPollTableResults?.page ?? dataPollResults?.page) +
						(next ? 1 : -1) -
						1),
			};
			refetchPoll({ userId: patientId, params });
		},
		[dataPollTableResults, dataPollResults],
	);

	useEffect(() => {
		refetchPatientData(patientId);
	}, [patientId]);

	useEffect(() => {
		if (dataPollTableResults || dataPollResults) {
			let finalArray = [];
			finalArray = finalArray.concat(
				(dataPollTableResults ?? dataPollResults).reports.dailyReports.map(
					(item) => ({
						...item,
						type: 'daily',
					}),
				),

				(dataPollTableResults ?? dataPollResults).reports.weeklyReports
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
	}, [dataPollTableResults, dataPollResults]);
	return (
		<StyledScreen
			css={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					margin: '20px',
					padding: '20px 40px',
					width: '100%',
					boxSizing: 'border-box',
				}}
			>
				<StyledH3>
					Registros diarios y semanales de{' '}
					{CapitalizeText(dataPatient?.name) +
						' ' +
						CapitalizeText(dataPatient?.surname)}
				</StyledH3>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'top,',
						boxSizing: 'border-box',
						width: '100%',
						height: '16px',
						justifyContent: 'center',
						borderBottom: '1px solid #E1D1FC',
						paddingBottom: '16px',
					}}
				/>
			</StyledBox>

			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					alignItems: 'top,',
				}}
			>
				<StyledBox
					as={TableContainer}
					css={{
						maxWidth: '50vw',
						width: 'calc(100vw - 40px)',
						margin: 'auto',
					}}
				>
					<Table>
						<PollResultsHeader />
						<PollResultsBody data={pollResults} />
					</Table>
					<PollResultsBottom
						handleChangePage={handleChangePage}
						currentPage={
							dataPollTableResults?.page ?? dataPollResults?.page
						}
						maxPage={
							dataPollTableResults?.maxPage ?? dataPollResults?.maxPage
						}
					/>
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
};
export default PollResultsScreen;
