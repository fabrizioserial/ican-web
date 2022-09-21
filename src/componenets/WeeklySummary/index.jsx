import {StyledBox, StyledCardHome, StyledP} from "../../common/styledCommonComponents";
import React from "react";
import {useTheme} from "styled-components";
import TaskContainer from "./TaskContainer";
import CheckIcon from "../../assets/CheckIcon";
import TimeIcon from "../../assets/TimeIcon";
import MarkIcon from "../../assets/MarkIcon";
import ReloadIcon from "../../assets/ReloadIcon";

const WeeklySummary = () => {
    const theme = useTheme()
    return(
        <StyledCardHome css={{width:"500px", height:"230px",display:"flex",flexDirection:"column"}}>
            <StyledBox css={{
                height: "24px",
                marginBottom: "16px",
                display:"flex",
                justifyContent:"space-between",
            }}>
                <StyledP css={{color:theme.OncoBlack, fontWeight: 500}}>
                    Encuesta semanal
                </StyledP>
                <StyledBox css={{cursor: "pointer"}}>
                    <ReloadIcon/>
                </StyledBox>
            </StyledBox>
            <TaskContainer color={"blue"} title={"Completado"} quantity={30} progress={50} icon={CheckIcon}/>
            <TaskContainer color={"purple"} title={"En proceso"} quantity={30} progress={70} icon={TimeIcon}/>

            <TaskContainer color={"orange"} title={"Sin arrancar"} quantity={30} progress={40} icon={MarkIcon}/>


        </StyledCardHome>
    )
}

export default WeeklySummary