import {
	StyledBox,
	StyledImg,
	StyledP,
} from '../../../../common/styledCommonComponents';
import React from 'react';
import { StyledPatientWaitingContainer } from './styles';

const PatientWaitingItem = ({ name, surename, dni, css }) => {
	return (
		<StyledPatientWaitingContainer onClick={() => console.log('asd')}>
			<StyledImg
				css={{
					width: 28,
					height: 28,
					borderRadius: '50px',
					marginRight: '6px',
				}}
				firstChild={{
					marginLeft: '0px',
				}}
				src={
					'https://media.discordapp.net/attachments/411201278031560708/1023937441264054302/default_user.png'
				}
			/>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<StyledP css={{ fontWeight: 500, margin: '0', fontSize: '11px' }}>
					{name + ' ' + surename}
				</StyledP>
				<StyledP css={{ fontWeight: 400, margin: '0', fontSize: '10px' }}>
					{dni}
				</StyledP>
			</StyledBox>
		</StyledPatientWaitingContainer>
	);
};

export default PatientWaitingItem;
