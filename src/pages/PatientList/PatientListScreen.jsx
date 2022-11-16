import React from 'react';
import {
	StyledBox,
	StyledH3,
	StyledScreen,
} from '../../common/styledCommonComponents';
import { Table, TableContainer } from '@material-ui/core';
import PatientListHeader from './PatientListHeader';
import PatientListBody from './PatientListBody';
import PatientListBottom from './PatientListBottom';
import SearchBar from './SearchBar';
import CardsHeader from './CardsHeader';
import {
	useLazyOrderPatientsQuery,
	useLazyPatientsListWithParamsQuery,
	usePatientsListQuery,
} from '../../redux/api/listApi';
import { StyledCircularProgress } from '../../components/CustomCircularProgress/styles';

const PatientListScreen = () => {
	const { isLoading: patientInitalLoading } = usePatientsListQuery();
	const [refetch, { isLoading: orderLoading }] = useLazyOrderPatientsQuery();
	const [refetchlq, { isLoading: searchLoading }] =
		useLazyPatientsListWithParamsQuery();

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
					flex: 1,
				}}
			>
				<StyledH3>Mis Pacientes</StyledH3>
				<StyledBox
					css={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'top,',
						boxSizing: 'border-box',
						width: '100%',
						height: '16px',
						borderBottom: '1px solid #E1D1FC',
					}}
				/>
				<CardsHeader />
				<StyledBox
					css={{ width: '100%', display: 'flex', justifyContent: 'end' }}
				>
					<SearchBar />
				</StyledBox>
				<StyledBox
					as={TableContainer}
					css={{
						width: 'calc(100vw - 40px)',
						height: '100%',
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<Table sx={{ height: '100%' }}>
						<PatientListHeader />
						<PatientListBody />
					</Table>
					<StyledBox
						css={{
							flex: 1,
							backgroundColor: 'white',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{patientInitalLoading || orderLoading || searchLoading ? (
							<StyledCircularProgress />
						) : null}
					</StyledBox>
					<PatientListBottom />
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
};
export default PatientListScreen;
