import styled from "styled-components";
import { accentColor, focusableColor } from "../theme";
import ComponentWrapperStyled from "./ComponentWrapper";
import SettingsIcon from '@material-ui/icons/Settings';
import EventNoteIcon from '@material-ui/icons/EventNote';

export const HomeH1 = ({ userName, width }) => {
    const ComponentWrapperStyledH1 = styled(ComponentWrapperStyled)`
        display: flex;
        height: 15%;
         
        & > h1 {  
            flex: 0.95;
        }

        & > div {
            flex: 0.05;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            transform: translateX(-20px);
        }

        & > div > button {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px;
            background-color: ${props => props.theme.focusable};
            border-radius: 100%;
            transition: 0.3s;
            border: none;

            &:hover {
                background-color: ${props => props.theme.accent};
                color: white;
            }
        }
    `;

    const HomeH1Styled = styled.h1`
        font-weight: normal;
        font-size: 3rem;
        padding-left: 3%;
    `

    return (
        <ComponentWrapperStyledH1 width={width}>
            <HomeH1Styled>Buen día <strong>{userName.toUpperCase()}</strong></HomeH1Styled>
            <div>
                <button onClick={() => {}}><SettingsIcon /></button>
                <button onClick={() => {}}><EventNoteIcon /></button>
            </div>
        </ComponentWrapperStyledH1>
    )
}

export default HomeH1;