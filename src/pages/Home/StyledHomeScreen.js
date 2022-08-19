import styled from "styled-components"
import { textColor } from "../../common/colors";

export const HomeWrapper = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const HomeDateSection = styled.section`
    width: 15vw;
    height: 100vh;
    position: relative;
    
    & > svg {
        height: 100vh;
        width: 100%;
    }
`

export const HomeDashboardSection = styled.section`
    width: 85vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
        display: flex;
        justify-content: space-evenly;
        width: 80%;
        margin-top: 10px;
    }

    & > div > button:nth-child(2) {
        margin-left: 10px;
        margin-right: 10px;
    }

    & > aside {
        width: 80%;
        background-color: red;
    }
`

export const DateSectionStyled = styled.div`
    position: absolute;
    display: flex;
    top: 5%;
    left: 50%;
    width: 80%;
    transform: translateX(-45%);
    color: ${textColor};
    flex-direction: column;
    
    & > span {
        font-size: 3rem;
        width: 100%;
        word-wrap: break-word;

        @media (max-width: 1629px) { font-size: 2.5rem; }
        @media (max-width: 1280px) { font-size: 2rem; }
        @media (max-width: 1024px) { font-size: 1.2rem; }
    }

    & > span:nth-child(1) {
        padding: 0;
        transform: translateY(10%);
        font-size: 11rem;

        @media (max-width: 1629px) { font-size: 8rem; }
        @media (max-width: 1280px) { font-size: 7rem; }
        @media (max-width: 1024px) { font-size: 5rem; }
    }
`
