import React from 'react';

import {useTheme} from 'styled-components';
import {StyledBox, StyledCardHome} from "../../../common/styledCommonComponents";

function PatientsHeaderCard() {
    const theme = useTheme();
    return (
            <StyledBox>
                <StyledCardHome css={{
                    boxSizing: "border-box",
                    width: "306px",
                    height: "104px",
                    background: theme.white,
                    boxShadow: "0px 4px 24px rgba(214, 203, 252, 0.3)",
                    borderRadius: "15px",

                    }   }
                />
            </StyledBox>


    );
}

export default PatientsHeaderCard;