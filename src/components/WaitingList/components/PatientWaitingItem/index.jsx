import {
	StyledBox,
	StyledImg,
	StyledP,
} from '../../../../common/styledCommonComponents';
import React from 'react';
import { StyledPatientWaitingContainer } from './styles';
import { getProfileImageFromName } from '../../../../utils/utils';

const PatientWaitingItem = ({ name, surename, dni, css }) => {
	return (
		<StyledPatientWaitingContainer onClick={() => console.log('asd')}>
			{getProfileImageFromName(name, surename, {
				width: 28,
				height: 28,
				fontSize: '12px',
			})}
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					marginLeft: '6px',
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
