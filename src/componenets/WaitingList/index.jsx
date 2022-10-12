import React, { useState } from 'react';
import { StyledBox, StyledCardHome } from '../../common/styledCommonComponents';

function WaitingList({ waitingPatients }){

    const PatientInformationLabel = ({ fullName, dni }) => <StyledBox>
        {fullName} <br />
        {dni}
    </StyledBox>

    return <StyledCardHome>
        {
            waitingPatients.map(({ fullName, dni }) => <PatientInformationLabel fullName={fullName} dni={dni}  /> )
        }
    </StyledCardHome>
}

export default WaitingList;