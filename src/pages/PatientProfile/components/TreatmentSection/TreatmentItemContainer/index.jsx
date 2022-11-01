import styled from "styled-components";
import {StyledBox} from "../../../../../common/styledCommonComponents";

export const StyledTreatmentItemContainer = styled(StyledBox)`
	overflow-y: scroll;
	margin: 5px 5px 10px 10px;
	padding-right: 10px;
	height: 560px;
	&::-webkit-scrollbar {
		width: 2px;
		
	}

	&::-webkit-scrollbar-thumb {
		background-color: lightgray;
	}
	::-webkit-scrollbar-track {
    margin-top: 10px;
    margin-bottom: 10px;
    
}
`;