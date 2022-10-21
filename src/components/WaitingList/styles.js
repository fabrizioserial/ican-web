import styled from 'styled-components';
import { StyledBox, StyledCardHome } from '../../common/styledCommonComponents';

export const StyledGeneralContainer = styled(StyledBox)`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    height: 100%;
`

export const StyledWaitingListCardHome = styled(StyledCardHome)`
    height: 230px;
    width: 230px;
    overflow: hidden;
`;

export const StyledWaitingListContainer = styled(StyledBox)`
    overflow-y: scroll;
    margin: 0px 10px 0 20px;
    padding-right: 10px;
    margin-top: 5px;
    margin-bottom: 20px;

    &::-webkit-scrollbar { width: 2px; }

    &::-webkit-scrollbar-thumb { background-color: lightgray; }
`