import React from 'react';
import {
    StyledBox,
} from '../../../common/styledCommonComponents';


const WeeklySchedule = () => {
    return (
      <StyledBox> this is my weekly schedule
      <StyledBox css={{
          width: "305px",
          height: "200px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 24px rgba(214, 203, 252, 0.15)",
          borderRadius: "15px"}}></StyledBox>
      </StyledBox>
    );
};

export default WeeklySchedule;