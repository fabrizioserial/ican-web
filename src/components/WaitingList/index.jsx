import React, { useState } from 'react';
import { StyledBox, StyledCardHome, StyledH1, StyledSpan } from '../../common/styledCommonComponents';
import UsersIcon from "../../assets/UsersIcon";
import { useTheme } from 'styled-components';
import PatientContainer from '../PatientsList/PatientContainer';
import { StyledWaitingListCardHome, StyledWaitingListContainer, StyledGeneralContainer } from './styles';

function WaitingList({ waitingPatients = [] }) {
    const theme = useTheme();
    return <StyledWaitingListCardHome>
        <StyledGeneralContainer>
            <StyledH1 css={{ display: "flex", margin: 0, justifyContent: "flex-start", alignItems: "center", padding: "20px 20px 0 20px" }}>
                <UsersIcon width={"1.1rem"} />
                <StyledSpan css={{ fontSize: "1rem", paddingLeft: "5px", fontWeight: "normal" }}>
                    <StyledSpan css={{ fontWeight: "bold" }}> {waitingPatients.length} </StyledSpan>
                    Pacientes en espera
                </StyledSpan>
            </StyledH1>

            <StyledWaitingListContainer>
                {
                    waitingPatients.map(({ fullName, dni, avatar }) => <PatientContainer
                        fullName={fullName}
                        legend={dni}
                        css={{
                            border: `solid 1px ${theme.oncoLightOrange3}`,
                            marginTop: "15px",
                            padding: "5px 10px"
                        }}
                    // avatar = {avatarImg} 
                    />
                    )
                }
            </StyledWaitingListContainer>
        </StyledGeneralContainer>
    </StyledWaitingListCardHome>
}

export default WaitingList;