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
import { StyledWaitingListContainer } from './style';
import PatientWaitingItem from './components/PatientWaitingItem';
import { useFilterPatientQuery } from '../../redux/api/listApi';

function WaitingList() {
	const { data, isLoading } = useFilterPatientQuery({
		column: 'status',
		params: {
			value: 'Pending',
		},
	});
	const theme = useTheme();

	return (
		<StyledCardHome
			width={'230px'}
			height={'230px'}
			css={{
				opacity: '0 !important',
			}}
			className={
				data?.patients?.length === 0 || data === undefined
					? 'close'
					: 'open'
			}
		>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					height: '100%',
					minWidth: '230px',
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
							{data?.patients.length}{' '}
						</StyledSpan>
						<StyledP css={{ fontSize: '14px', marginLeft: '5px' }}>
							Pacientes en espera
						</StyledP>
					</StyledSpan>
				</StyledH1>

				<StyledWaitingListContainer>
					{data?.patients.map(
						({ name, surname, dni, avatar, id }, index) => (
							<PatientWaitingItem
								key={index}
								name={name}
								surename={surname}
								dni={dni}
								// avatar = {avatarImg}
								id={id}
							/>
						),
					)}
				</StyledWaitingListContainer>
			</StyledBox>
		</StyledCardHome>
	);
}

export default WaitingList;
