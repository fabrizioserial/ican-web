import React, { useState } from 'react';
import {
	StyledBox,
	StyledH3,
	StyledScreen,
} from '../../common/styledCommonComponents';
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
import WaitingListHeaderCard from './CardsHeader/WaitingListCard';
import PatientsHeaderCard from './CardsHeader/HeaderCard';
import { PatientsListHeaderConfig } from '../../utils/utils';
import CardsHeader from './CardsHeader';

const PatientListScreen = () => {
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
						maxWidth: '100vw',
						width: 'calc(100vw - 40px)',
					}}
				>
					<Table>
						<PatientListHeader />
						<PatientListBody />
					</Table>
					<PatientListBottom />
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
};
export default PatientListScreen;
