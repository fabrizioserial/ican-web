import React, { useState } from 'react';
import { StyledBox, StyledCardHome, StyledH1, StyledSpan } from '../../common/styledCommonComponents';
import UsersIcon from "../../assets/UsersIcon";
import { useTheme } from 'styled-components';
import PatientContainer from '../PatientsList/PatientContainer';
import { StyledWaitingListCardHome, StyledWaitingListContainer } from './styles';

function WaitingList({ waitingPatients = [] }) {
    const theme = useTheme();

    const PatientInformationLabel = ({ fullName, dni, avatar }) => <PatientContainer
        fullName={fullName}
        legend={dni}
        css={{  
            border: `solid 1px ${theme.oncoOrange}`,
            marginTop: "15px",
            padding: "5px 10px"
        }}
    />

    return <StyledWaitingListCardHome>
        <StyledBox css={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "flex-start",
            height: "100%",
        }}>
            <StyledH1 css={{ display: "flex", margin: 0, justifyContent: "flex-start", alignItems: "center" }}>
                <UsersIcon width={"1.1rem"} />
                <StyledSpan css={{ fontSize: "1rem", paddingLeft: "5px", fontWeight: "normal" }}>
                    <StyledSpan css={{ fontWeight: "bold" }}> {waitingPatients.length} </StyledSpan>
                    Pacientes en espera
                </StyledSpan>
            </StyledH1>

            <StyledWaitingListContainer>
                {
                    waitingPatients.map(({ fullName, dni, avatar }) => <PatientInformationLabel fullName={fullName} dni={dni} avatar={avatar} />)
                }
            </StyledWaitingListContainer>
        </StyledBox>
    </StyledWaitingListCardHome>
}

export default WaitingList;