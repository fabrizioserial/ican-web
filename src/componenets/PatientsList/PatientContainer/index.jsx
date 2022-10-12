import React from 'react';
import {
	StyledBox,
	StyledImg,
	StyledP,
} from '../../../common/styledCommonComponents';
import { StyledPatientContainer } from './styles';

const PatientContainer = ({ fullName, legend, css }) => {
	return (
		<StyledPatientContainer css={css || { padding: "12px" }} onClick={() => console.log('asd')}>
			<StyledBox css = {{ display: "flex", justifyContent: "center", alignItems: "center",  width: 38, paddingRight: "10px" }}>
				<StyledImg
					css={{
						width: 38,
						height: 38,
						borderRadius: '50px',
						imageRendering: '',
						backgroundColor: "red"
					}}
					firstChild={{
						marginLeft: '0px',
					}}
					src={
						'https://media.discordapp.net/attachments/411201278031560708/1023937441264054302/default_user.png'
					}
				/>
			</StyledBox>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
				}}
			>
				<StyledP css={{ fontWeight: 500, fontSize: '1rem' }}>
					{fullName}
				</StyledP>
				<StyledP css={{ fontWeight: 200, fontSize: '0.8rem' }}>
					{legend}
				</StyledP>
			</StyledBox>
		</StyledPatientContainer>
	);
};

export default PatientContainer;
