import React from 'react';
import { useNavigate } from 'react-router';
import {
	StyledBox,
	StyledImg,
	StyledP,
} from '../../../common/styledCommonComponents';
import { StyledPatientContainer } from './styles';
import { getProfileImageFromName } from '../../../utils/utils';
import PurplePinIcon from '../../../assets/PurplePinIcon';
import { useTheme } from 'styled-components';

const PatientContainer = ({ name, surename, cancerType, css, patientId }) => {
	const navigate = useNavigate();
	const theme = useTheme()
	return (
		<StyledPatientContainer
			css={css}
			onClick={() => navigate(`/profile/${patientId}`)}
		>
			<StyledBox
				css={{
					backgroundColor: theme.oncoGrey2,
					position: 'absolute',
					borderRadius: 15,
					padding: 3,
					display: "flex",
					alignSelf: 'flex-start',
				}}
			>
				<PurplePinIcon width={10} height={10} color={'#fff'}/>
			</StyledBox>
			{getProfileImageFromName(name, surename, { width: 38, height: 38 })}
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					marginLeft: '12px',
				}}
			>
				<StyledP
					css={{
						fontWeight: 500,
						fontSize: '16px',
						textTransform: 'capitalize',
					}}
				>
					{name + ' ' + surename}
				</StyledP>
				<StyledP
					css={{
						fontWeight: 200,
						fontSize: '10px',
						textTransform: 'capitalize',
					}}
				>
					{cancerType}
				</StyledP>
			</StyledBox>
		</StyledPatientContainer >
	);
};

export default PatientContainer;
