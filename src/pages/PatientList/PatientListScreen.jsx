import React from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
} from '@material-ui/core';
import styled from 'styled-components';
import { visuallyHidden } from '@mui/utils';
import PatientListHeader from './PatientListHeader';
import PatientListBody from './PatientListBody';
import PatientListBottom from './PatientListBottom';
import SearchBar from './SearchBar';

const StyledTableContainer = styled(TableContainer)`
	max-width: 1350px;
`;

const PatientListScreen = () => {
	return (
		<StyledScreen>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'end',
					margin: '20px',
				}}
			>
				<SearchBar />
				<StyledTableContainer>
					<Table>
						<PatientListHeader />
						<PatientListBody />
					</Table>
					<PatientListBottom />
				</StyledTableContainer>
			</StyledBox>
		</StyledScreen>
	);
};
export default PatientListScreen;
