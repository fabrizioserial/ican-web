import React from 'react';
import { StyledBox} from '../../../common/styledCommonComponents';

import {useTheme} from "styled-components";

const TreatmentSection = () => {
    const theme = useTheme();
    return (
      <StyledBox css={{
          width: "305px",
          height: "676px",
          background: theme.white,
          borderRadius: "15px",}}>
                <StyledBox>

                </StyledBox>
      </StyledBox>

    );
};

export default TreatmentSection;
