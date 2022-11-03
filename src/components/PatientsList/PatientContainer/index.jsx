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
			{getProfileImageFromName(name, surename, { width: 38, height: 38 })}
			<StyledBox
				css={{
					backgroundColor: '#fff',
					position: 'relative',
					borderRadius: 15,
					padding: 2,
					display: "flex",
					alignSelf: 'flex-end',
					right: 8,
					border: '1px solid',
					borderColor: theme.OncoPurple,
					outline: '2px solid #fff'
				}}
			>
				<PurplePinIcon width={10} height={10} />
			</StyledBox>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					// marginLeft: '12px',
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
