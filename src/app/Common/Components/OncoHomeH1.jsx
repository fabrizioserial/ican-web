import styled from "styled-components";
import { accentColor, focusableColor } from "../Colors";
import OncoComponentWrapperStyled from "./OncoComponentWrapper";
import SettingsIcon from '@material-ui/icons/Settings';
import EventNoteIcon from '@material-ui/icons/EventNote';

export const OncoHomeH1 = ({ userName, width }) => {
    const OncoComponentWrapperStyledH1 = styled(OncoComponentWrapperStyled)`
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
            background-color: ${focusableColor};
            border-radius: 100%;
            transition: 0.3s;
            border: none;

            &:hover {
                background-color: ${accentColor};
                color: white;
            }
        }
    `;

    const OncoHomeH1Styled = styled.h1`
        font-weight: normal;
        font-size: 3rem;
        padding-left: 3%;
    `

    return (
        <OncoComponentWrapperStyledH1 width={width}>
            <OncoHomeH1Styled>Buen día <strong>{userName.toUpperCase()}</strong></OncoHomeH1Styled>
            <div>
                <button onClick={() => {}}><SettingsIcon /></button>
                <button onClick={() => {}}><EventNoteIcon /></button>
            </div>
        </OncoComponentWrapperStyledH1>
    )
}

export default OncoHomeH1;