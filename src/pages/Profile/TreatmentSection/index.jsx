import React from 'react';
import {StyledBox, StyledP} from '../../../common/styledCommonComponents';

import {useTheme} from "styled-components";
import Card from "../../../components/Card";
import CalendarIcon from "../../../assets/CalendarIcon";
import PillIcon from "../../../assets/PillIcon";
import PlusCircleIcon from "../../../assets/PlusCircleIcon";

const TreatmentSection = () => {
    const theme = useTheme();
    return (
        <Card
            title={'Tratamientos en Curso'}
            icon={<PillIcon/>}
            width={305}
            height={676}
           align={"top"}
        >
            <>
                <StyledBox css={ {display:"flex",
                    flexDirection:"column", flexWrap: "wrap",
                    rowGap: "497px"}}>
                 <StyledBox css={{display:"flex",
                     flexDirection:"column",
                     justifyContent:"flex-start",
                     alignItems: 'top',
                     marginTop:"14px",
                    alignSelf:"top"}}>
                     <StyledBox css={{
                         boxSizing: "border-box",
                         width: "255px",
                         height: "63px",
                         background: theme.white,
                         border: "1px solid rgba(225, 209, 252, 0.22)",
                         boxShadow: "0px 4px 24px rgba(214, 203, 252, 0.15)",
                         borderRadius: "10px",
                         padding:"16px 16px"}}>
                         <StyledBox css={{display:"flex",flexDirection:"row",  columnGap: "60px"}}>
                         <StyledP css={{
                             width: "224px",
                             height: "16px",
                             fontStyle: "normal",
                             fontWeight: "400",
                             fontSize: "13px",
                             lineHeight: "16px",
                             display: "flex",
                             alignItems: "center",
                             letterSpacing: "0.05em",
                             textTransform: "capitalize",
                             color: "#949494",
                             whiteSpace: 'nowrap',}}>Abiraterona (Zytiga) </StyledP>
                            <StyledP css={{
                                width: "224px",
                                height: "16px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "13px",
                                lineHeight: "16px",
                                display: "flex",
                                alignItems: "center",
                                letterSpacing: "0.05em",
                                textTransform: "capitalize",
                                color: theme.OncoPurple, justifyContent:"flexEnd"}}> + 1 </StyledP>
                         </StyledBox>
                         <StyledP css={{
                             width: "100px",
                             height: "11px",
                             fontStyle: "normal",
                             fontWeight: 400,
                             fontSize: "9px",
                             lineHeight: "11px",
                             display: "flex",
                             alignItems: "center",
                             letterSpacing: "0.05em",
                             textTransform: "capitalize",
                             color: "#AF7EFF",
                             whiteSpace: 'nowrap'}}>Comienzo 09/11/2021</StyledP>
                     </StyledBox >

                 </StyledBox >
                    <StyledBox >
                    <StyledBox css={{boxSizing: "border-box",
                        width: "255px",
                        height: "31px",
                        background: "#FFFFFF",
                        border: "1px solid #E1D1FC",
                        boxShadow: "0px 4px 24px rgba(214, 203, 252, 0.15)",
                        borderRadius: "20px",
                        padding:"7px 62px",
                        display:"flex",
                        flexDirection:"row",
                        columnGap:"5px",
                        alignItems:"center"}}>

                        <PlusCircleIcon/>
                        <StyledP css={{
                            width: "108px",
                            height: "13px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "11px",
                            lineHeight: "13px",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "0.05em",
                            textTransform: "capitalize",
                            color: "#AF7EFF",
                            whiteSpace: 'nowrap'}}>
                            Nuevo Tratamiento
                        </StyledP>
                    </StyledBox>


                </StyledBox>
                </StyledBox>

            </>
        </Card>


    );
};

export default TreatmentSection;
