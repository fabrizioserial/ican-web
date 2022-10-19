import {useTheme} from "styled-components";
import {StyledBox, StyledP, StyledPatientsListCard} from "../../../common/styledCommonComponents";
import React from "react";

function PatientsHeaderCard({text,number,positive,pillText}) {
    const theme = useTheme();
    const color = positive ? theme.patientListPillPositive : theme.patientListPillNegative;
    return (
        <StyledPatientsListCard>
            <StyledBox css={{ paddingLeft:"24px",
                paddingRight:"29px",
                paddingTop:"22px",
                paddingBottom:"22px",}}>
                <StyledBox css={{display:"flex",flexDirection:"row",flexWrap: "wrap",columnGap:"100px"}}>
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
                            letterSpacing: "0.05em",flexDirection:"row", whiteSpace: "nowrap",}}>{text}</StyledP>
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
                            color: "#5F5F5F",}}>{number}</StyledP>
                    </StyledBox>
                    <StyledBox css={{alignItems:"flex-end",display:"flex",flexDirection:"column",justifyContent: "flex-end"}}>
                        <StyledBox css={{
                            width: "45px",
                            height: "18px",
                            background: color,
                            boxShadow: "0px 4px 24px rgba(214, 203, 252, 0.3)",
                            borderRadius: "15px"}}>
                            <StyledP css={{
                                width: "12px",
                                height: "13px",
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "11px",
                                lineHeight: "13px",
                                display: "flex",
                                alignContent:"center",
                                color: "#949494",
                                paddingTop:"2px",
                                paddingBottom:"3px",
                                paddingRight:"16px",
                                paddingLeft:"16px"}}>{pillText}</StyledP>
                        </StyledBox>
                    </StyledBox>
                </StyledBox>
            </StyledBox>
        </StyledPatientsListCard>
    )
}

export default PatientsHeaderCard