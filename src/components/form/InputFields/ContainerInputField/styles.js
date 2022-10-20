import styled from 'styled-components';
import { StyledBox } from '../../../../common/styledCommonComponents';

export const StyledContainerForm = styled(StyledBox)`
	display: flex;
	flex-direction: ${(props) => props.direction};
	padding: 50px 45px;
	box-sizing: border-box;
`;
