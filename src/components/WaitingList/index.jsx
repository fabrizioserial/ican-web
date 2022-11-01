import React, { useState } from 'react';
import {
	StyledBox,
	StyledCardHome,
	StyledH1,
	StyledP,
	StyledSpan,
} from '../../common/styledCommonComponents';
import UsersIcon from '../../assets/UsersIcon';
import { useTheme } from 'styled-components';
import PatientContainer from '../PatientsList/PatientContainer';
import { StyledWaitingListContainer } from './style';
import PatientWaitingItem from './components/PatientWaitingItem';

function WaitingList() {
	const [waitingPatients, setWaitingPatients] = useState([
		{
			name: 'Agustin',
			surname: 'Von Staweksi',
			dni: '0943892948',
			avatar: 'img',
		},
		{
			name: 'Carlos',
			surname: 'Gomez',
			dni: '9124837499',
			avatar: 'img',
		},
		{
			name: 'Elisa',
			surname: 'Furnari',
			dni: '3789438384',
			avatar: 'img',
		},
		{
			name: 'Carlos',
			surname: 'Gomez',
			dni: '0000000001',
			avatar: 'img',
		},
		{
			name: 'Carlos',
			surname: 'Gomez',
			dni: '0943892948',
			avatar: 'img',
		},
		{
			name: 'Agustin',
			surname: 'Von Staweksi',
			dni: '0943892948',
			avatar: 'img',
		},
		{
			name: 'Carlos',
			surname: 'Gomez',
			dni: '9124837499',
			avatar: 'img',
		},
		{
			name: 'Elisa',
			surname: 'Furnari',
			dni: '3789438384',
			avatar: 'img',
		},
	]);
	const theme = useTheme();
	return (
		<StyledCardHome
			css={{
				width: '230px',
				height: '230px',
			}}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					justifyContent: 'flex-start',
					height: '100%',
				}}
			>
				<StyledH1
					css={{
						display: 'flex',
						margin: 0,
						justifyContent: 'flex-start',
						alignItems: 'center',
						padding: '20px 20px 0 20px',
					}}
				>
					<UsersIcon />
					<StyledSpan
						css={{
							paddingLeft: '5px',
							fontWeight: 'normal',
							display: 'flex',
							flexDirection: 'row',
						}}
					>
						<StyledSpan css={{ fontWeight: 'bold', fontSize: '16px' }}>
							{' '}
							{waitingPatients.length}{' '}
						</StyledSpan>
						<StyledP css={{ fontSize: '14px', marginLeft: '5px' }}>
							Pacientes en espera
						</StyledP>
					</StyledSpan>
				</StyledH1>

				<StyledWaitingListContainer>
					{waitingPatients.map(({ name, surname, dni, avatar }, index) => (
						<PatientWaitingItem
							key={index}
							name={name}
							surename={surname}
							dni={dni}
							// avatar = {avatarImg}
						/>
					))}
				</StyledWaitingListContainer>
			</StyledBox>
		</StyledCardHome>
	);
}

export default WaitingList;
