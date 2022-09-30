import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useTheme } from 'styled-components';
import { StyledBox, StyledH3, StyledSpan } from "../../../common/styledCommonComponents";
import { CardHomeStyled, TreatmentsContainer, TreatmentsLegendContainer, TreatmentsTitleBox } from './StyledHomeScreen';
import TreatmentIcon from '../../../assets/TreatmentIcon';

// If you want to reduce the size of the component, just modify the "size" of circularProgress
function PatientsInTreatments({ patientsInTreatment, totalPatients }) {
    let progress = (patientsInTreatment / totalPatients) * 100;
    const theme = useTheme();

    return <CardHomeStyled lineColor={theme.itemBackground}>
        <TreatmentsTitleBox>
            <StyledBox><TreatmentIcon color={theme.OncoPurple} width={23} height={19.55} /></StyledBox>
            <StyledH3 css={{ color: theme.OncoPurple, margin: "0", textAlign: "left", fontSize: "1rem", fontWeight: "normal" }}> Pacientes en tratamiento </StyledH3>
        </TreatmentsTitleBox>

        <TreatmentsContainer>
            <CircularProgress
                variant="determinate"
                value="100"
                size="8rem"
                thickness={1.5}
                style={{
                    color: theme.itemBackground,
                    zIndex: 1
                }} />
    
            <CircularProgress
                size="8rem"
                thickness={1.5}
                style={{ color: theme.oncoLightPurple3, zIndex: 2 }}
                value={progress}
                variant="determinate" />
    
            <TreatmentsLegendContainer>
                <StyledSpan css={{ fontSize: "2rem", fontWeight: "500" }}>{patientsInTreatment}</StyledSpan>
                <StyledSpan css={{ fontSize: "0.8rem" }}> /{totalPatients}</StyledSpan>
            </TreatmentsLegendContainer>
        </TreatmentsContainer>
    </CardHomeStyled>;
}

export default PatientsInTreatments;