import styled from 'styled-components';
import { StyledBox } from '../../../../../common/styledCommonComponents';

export const StyledTreatmentItemContainer = styled(StyledBox)`
	overflow-y: auto;
	margin: 5px 5px 10px 10px;
	height: 100%;
	&::-webkit-scrollbar {
		width: 0px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: lightgray;
	}
	::-webkit-scrollbar-track {
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;
