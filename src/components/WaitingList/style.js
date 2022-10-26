import styled from 'styled-components';
import { StyledBox } from '../../common/styledCommonComponents';

export const StyledWaitingListContainer = styled(StyledBox)`
	overflow-y: scroll;
	margin: 5px 10px 20px 20px;
	padding-right: 10px;

	&::-webkit-scrollbar {
		width: 2px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: lightgray;
	}
`;
