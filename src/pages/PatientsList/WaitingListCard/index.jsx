import {useTheme} from "styled-components";
import {StyledBox, StyledP, StyledPatientsListCard} from "../../../common/styledCommonComponents";
import React from "react";

function WaitingListHeaderCard() {
    const theme = useTheme();

    return (
        <StyledPatientsListCard css={{paddingLeft:"24px",
            paddingRight:"29px",
            paddingTop:"22px",
            paddingBottom:"22px"}}>
                <StyledBox css={{display:"flex",flexDirection:"row",rowGap:"17px",flexWrap: "wrap",columnGap:"100px"}}>
                    <StyledBox css={{display:"flex",flexDirection:"column",columnGap:"17px",rowGap: "14px",flexWrap: "wrap"}}>
                        <StyledP css={{
                            width: "107px",
                            height: "13px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: "11px",
                            lineHeight: "13px",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "0.05em",flexDirection:"row", whiteSpace: "nowrap"}}>En espera de aceptacion</StyledP>
                        <StyledP css={{
                            width: "107px",
                            height: "29px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            fontSize: 35,
                            lineHeight: "42px",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "0.05em",
                            color: "#5F5F5F",}}>10</StyledP>
                    </StyledBox>
                    <StyledBox css={{alignItems:"flex-end"}}>
                    <StyledP css={{
                        width: "43px",
                        height: "13px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "11px",
                        lineHeight: "13px",
                        display: "flex",
                        alignSelf: "flex-end",
                        color: theme.OncoPurple,flexDirection:"row", whiteSpace: "nowrap"}}> Ver más</StyledP>
                    </StyledBox>
                </StyledBox>
        </StyledPatientsListCard>
    )
}

export default WaitingListHeaderCard