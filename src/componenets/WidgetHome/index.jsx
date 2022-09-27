import React from 'react'
import { StyledBox, StyledCardHome } from "../../common/styledCommonComponents";
import WeeklySummary from "../WeeklySummary";

const WidgetHome = () => {
    return (
        <StyledBox css={{ width: "inherit", height: "230px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <WeeklySummary />
            <StyledCardHome css={{ width: "230px", height: "230px" }}>

            </StyledCardHome>
        </StyledBox>
    )
}

export default WidgetHome