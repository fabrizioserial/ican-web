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
				columnGap: "10px"

			}}
		>
			<StyledBox css={{ display:"flex", flexDirection:"row",columnGap: "10px",alignItems:"center"}}>
			<StyledBox css={{ marginTop:"4px",alignItems:"center"}}> {icon}</StyledBox>
			<StyledP css={{ marginLeft: '9px', color: textColor,
				fontStyle: "normal",
				fontWeight: 600,
				fontSize: "14px",
				lineHeight: "17px",
			alignItems:"center"}}>{text}</StyledP>
			</StyledBox>
		</StyledBox>
	);
};

export default ProfileButton;
