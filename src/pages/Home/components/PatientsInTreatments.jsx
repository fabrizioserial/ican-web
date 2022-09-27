import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useTheme } from 'styled-components';
import { StyledH3, StyledSpan } from "../../../common/styledCommonComponents";
import { CardHomeStyled } from './StyledHomeScreen';

// If you want to reduce the size of the component, just modify the "size" of circularProgress
function PatientsInTreatments({ patientsInTreatment, totalPatients }) {
    let progress = (patientsInTreatment / totalPatients) * 100;
    const theme = useTheme();

    return <CardHomeStyled>
        <StyledH3 css={{ color: theme.oncoPurpleTitle, margin: "0", paddingBottom: "12px", textAlign: "left", fontSize: "1rem", fontWeight: "normal" }}> Pacientes en tratamiento </StyledH3>
        <StyledSpan css={{
            backgroundColor: theme.itemBackground,
            height: "2px", width: "112.5%",
            marginLeft: "-15px"
        }} />

        <CircularProgress
            variant="determinate"
            value="100"
            size="14rem"
            thickness={0.5}
            style={{
                position: "absolute",
                transform: "translate(0%, -39%)",
                top: "50%",
                color: theme.itemBackground,
            }} />

        <CircularProgress
            size="14rem"
            thickness={0.5}
            style={{ color: theme.oncoPurpleTitle, marginTop: "15px" }}
            value={progress}
            variant="determinate" />

        <StyledSpan css={{
            position: "absolute",
            fontWeight: "lighter",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -20%)",
        }}>
            <StyledSpan css={{ fontSize: "3.5rem" }}>{patientsInTreatment}</StyledSpan>
            <StyledSpan css={{ fontSize: "1rem" }}>/ {totalPatients}</StyledSpan>
        </StyledSpan>
    </CardHomeStyled>;
}

export default PatientsInTreatments;