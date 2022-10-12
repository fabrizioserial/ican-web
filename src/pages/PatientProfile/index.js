import React from "react";
import {StyledBox, StyledCardHome} from "../../common/styledCommonComponents";
import {useTheme} from "styled-components";


const PatientProfile = () => {
    const theme = useTheme();
    return (
        <StyledBox css>
        Patient Profile
            <StyledCardHome css={{
                position: 'absolute',
                width: '1002 px',
                height: '193 px',
                left: '108 px',
                top: '42 px',
                background: theme.white,
                borderRadius: '20px',
            }}/>
        </StyledBox>
    );
};
export default PatientProfile;
