import React from 'react';
import {
	StyledBox,
	StyledImg,
	StyledP,
} from '../../../common/styledCommonComponents';
import { StyledPatientContainer } from './styles';

const PatientContainer = ({ name, surename, cancerType }) => {
	return (
		<StyledPatientContainer onClick={() => console.log('asd')}>
			<StyledImg
				css={{
					width: 38,
					height: 38,
					borderRadius: '50px',
					imageRendering: '',
					marginRight: '12px',
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
					justifyContent: 'space-around',
				}}
			>
				<StyledP css={{ fontWeight: 500, fontSize: '16px' }}>
					{name + ' ' + surename}
				</StyledP>
				<StyledP css={{ fontWeight: 200, fontSize: '10px' }}>
					{cancerType}
				</StyledP>
			</StyledBox>
		</StyledPatientContainer>
	);
};

export default PatientContainer;
