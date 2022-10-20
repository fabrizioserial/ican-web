import React from 'react';
import {
    StyledBox, StyledP,
} from '../../../common/styledCommonComponents';
import CalendarIcon from "../../../assets/CalendarIcon";


const WeeklySchedule = () => {
    return (
      <StyledBox>
      <StyledBox css={{
          width: "305px",
          height: "200px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 24px rgba(214, 203, 252, 0.15)",
          borderRadius: "15px",
           }}>
        <StyledBox css={{boxSizing: "border-box",
            width: "305px",
            height: "51px",
            border: "1px solid #F0EDED",
            borderRadius: "15px 15px 0px 0px",
            display:"flex",
            flexDirection:"row",
            columnGap: "9px",
            padding:"21px 22px" }}>
          <CalendarIcon/>
          <StyledP css={{
              width: "167px",
              height: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "17px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "0.05em",
              textTransform: "capitalize2",
              color: "#AF7EFF",}}> Agenda Semanal
          </StyledP>
        </StyledBox>

      </StyledBox>
      </StyledBox>
    );
};

export default WeeklySchedule;