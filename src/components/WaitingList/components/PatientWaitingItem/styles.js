import styled from 'styled-components';
import { StyledBox } from '../../../../common/styledCommonComponents';

export const StyledPatientWaitingContainer = styled(StyledBox)`
	justify-content: flex-start;
	display: flex;
	flex-direction: row;
	border-radius: 15px;
	box-shadow: 0 2px 24px rgba(214, 203, 252, 0.3);
	cursor: pointer;
	border: solid 1px ${(props) => props.theme.oncoLightOrange3};
	margin-top: 6px;
	padding: 7px 12px 8px;
	height: 45px;
	box-sizing: border-box;
	&:hover {
		box-shadow: 0 2px 24px rgba(214, 203, 252, 0.6);
	}
`;
