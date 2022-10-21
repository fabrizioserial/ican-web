import React, {useEffect} from 'react';
import {StyledBox, StyledP} from "../../../../common/styledCommonComponents";
import {useTheme} from "styled-components";



const DayCard = ({dayNumber,dayName,state,detail}) => {
    const theme = useTheme();
    const border = state==="green" ? "1px solid rgba(100, 201, 140, 0.5)" :"1px solid rgba(225, 209, 252, 0.22)" ;



    return (
        <StyledBox css={{boxSizing: "border-box",
            width: "33px",
            height: "52px",
            background: "#FFFFFF",
            boxShadow: "0px 4px 24px rgba(214, 203, 252, 0.15)",
            borderRadius: "10px",
            padding:"13px 13px",
            border: border}}>

            <StyledP css={{
                width: "14px",
                height: "15px",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                color: "#949494",}}>{dayNumber}</StyledP>
            <StyledP css={{
                width: "14px",
                height: "15px",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "15px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                color: "#949494",}}> {dayName}</StyledP>

        </StyledBox>
    );
};

export default DayCard;