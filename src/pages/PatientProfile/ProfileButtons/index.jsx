import React from 'react';
import { useTheme } from 'styled-components';
import {
	StyledBox,
	StyledP,
} from '../../../common/styledCommonComponents';

const ProfileButton = ({ icon, color, text, textColor }) => {
	const theme = useTheme();
	return (
		<StyledBox
			css={{
				boxSizing: 'border-box',
				width: '197px',
				height: '39px',
				background: color,
				border: "1px solid rgba(235, 224, 253, 0.24)",
				boxShadow: '0px 4px 24px rgba(214, 203, 252, 0.15)',
				borderRadius: '15px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',

			}}
		>
			<StyledBox> {icon}</StyledBox>
			<StyledP css={{ marginLeft: '9px', color: textColor }}>{text}</StyledP>
		</StyledBox>
	);
};

export default ProfileButton;
