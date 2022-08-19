import styled from "styled-components"
import { accentColor, itemBackgroundColor } from "../colors"

const ComponentWrapperStyled = styled.div`
    position: relative;
    background-color: ${itemBackgroundColor};
    width: ${props => props.width};
    border: none;
    border-radius: 7px 0px 0px 7px;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0px;
        width: 20px;
        height: 100%;
        border-radius: 0px 7px 7px 0px;
        background-color: ${accentColor};
    }
`

export default ComponentWrapperStyled;