import React from 'react';
import {useTheme} from 'styled-components';
import PatientsHeaderCard from "./PatientsHeaderCard";
import {StyledBox, StyledScreen} from "../../common/styledCommonComponents";


function PatientsListScreen() {
    const theme = useTheme();
    return (
        <StyledScreen>
        <StyledBox>
          <PatientsHeaderCard></PatientsHeaderCard>
          <PatientsHeaderCard></PatientsHeaderCard>
          <PatientsHeaderCard></PatientsHeaderCard>


        </StyledBox>
        </StyledScreen>
    );
}

export default PatientsListScreen;