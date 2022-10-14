import React from "react";
import {StyledBox, StyledCardHome, StyledH1, StyledH3, StyledP1, StyledSpan} from "../../common/styledCommonComponents";
import {useTheme} from "styled-components";


const PatientProfile = () => {
    const theme = useTheme();
    return (
        <StyledBox css>
            <StyledCardHome css={{
                width: '1002px',
                height: '193px',
                background: theme.white,
                borderRadius: '20px',
            }}>
            <StyledH3>
                Agustin Von Staweski
            </StyledH3>
                <StyledBox css={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',}}>

             <StyledSpan>
                 Edad: 52 años
             </StyledSpan>
             <StyledSpan>
                 Sexo: Masculino
             </StyledSpan>
             <StyledSpan>
                 Nro: 123132424
             </StyledSpan>
             <StyledSpan>
                 Estado: Activo
             </StyledSpan>
                </StyledBox>
            </StyledCardHome>
        </StyledBox>
    );
};
export default PatientProfile;
