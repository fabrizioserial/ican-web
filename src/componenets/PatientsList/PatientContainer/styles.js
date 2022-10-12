import {
	StyledBox,
	StyledButton,
} from '../../../common/styledCommonComponents';
import styled from 'styled-components';

export const StyledPatientContainer = styled(StyledBox)`
	justify-content: flex-start;
	display: flex;
	flex-direction: row;
	border-radius: 20px;
	box-shadow: 0 2px 24px rgba(214, 203, 252, 0.3);
	cursor: pointer;
	&:hover {
		box-shadow: 0 2px 24px rgba(214, 203, 252, 0.6);
	}
`;

export const StyledButtonMore = styled(StyledButton)`
	border: 1px solid;
	border-color: ${(props) => props.theme.OncoLightPurple};
	border-radius: 20px;
	width: 100%;
	background-color: transparent;
	padding: 6px;
	color: ${(props) => props.theme.OncoPurple};
	cursor: pointer;
	transition: all 0.2s ease-out;
	&:hover {
		background-color: ${(props) => props.theme.OncoLightPurple};
		color: ${(props) => props.theme.white};
	}
`;
