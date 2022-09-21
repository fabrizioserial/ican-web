import {StyledBox, StyledP} from "../../../common/styledCommonComponents";
import React, {useEffect, useState} from "react";
import {useTheme} from "styled-components";

const TaskContainer = ({quantity, title,color, progress=0, icon}) => {
    const [colors, setColors] = useState({})
    const theme = useTheme()

    useEffect(()=>{
        switch (color){
            case "blue":
                setColors({
                    background: "oncoLightBlue",
                    colorBar:"oncoLightBlue2",
                    mainColor: "oncoBlue",
                    titleColor:"oncoBlueTitle",
                    subtitleColor: "oncoBlueSubtitle",
                })
                break
            case "purple":
                setColors({
                    background: "oncoLightPurple",
                    colorBar:"oncoLightPurple2",
                    mainColor: "OncoPurple",
                    titleColor:"oncoPurpleTitle",
                    subtitleColor: "oncoPurpleSubtitle",
                })
                break
            case "orange":
                setColors({
                    background: "oncoLightOrange",
                    colorBar:"oncoLightOrange2",
                    mainColor: "oncoOrange",
                    titleColor:"oncoOrangeTitle",
                    subtitleColor: "oncoOrangeSubtitle",
                })
                break
            default:
                break
        }
    },[color])

    return(
        <StyledBox css={{
            display:"flex",
            backgroundColor:theme[colors?.background],
            width:"100%",
            height:"40px",
            borderRadius: "5px",
            position:"relative",
            marginTop:"6px",
        }}>
            <StyledBox css={{
                backgroundColor: theme[colors?.colorBar],
                width:`calc(${progress}%)`,
                height:"40px",
                borderRadius: "5px",
                position:"absolute",
                top: 0,
                left: 0,
                transition: "all 0.5s ease-out 1s",
            }}/>
            <StyledBox css={{
                display:"flex",
                flexDirection: "row",
                position:"absolute",
                top: 7,
                left: 7,
            }}>
                <StyledBox css={{
                    width:"26px",
                    height:"26px",
                    backgroundColor:theme[colors?.mainColor],
                    zIndex:2,
                    borderRadius:"50%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                    {
                        icon()
                    }
                </StyledBox>
                <StyledBox css={{marginLeft:"5px"}}>
                    <StyledP css={{color:theme[colors?.titleColor],
                        fontSize:"14px",
                        height:"14px", fontWeight:600, marginBottom:"2px",
                        marginTop:"-2px"
                    }}>
                        {title}
                    </StyledP>
                    <StyledP css={{fontSize:'10px', color:theme[colors?.subtitleColor]}}>
                        {quantity} pacientes
                    </StyledP>
                </StyledBox>
            </StyledBox>
        </StyledBox>
    )
}

export default TaskContainer