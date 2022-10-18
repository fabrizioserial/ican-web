import React from 'react';
import {useTheme} from 'styled-components';
import {StyledBox, StyledH3, StyledP, StyledPatientsListCard, StyledScreen} from "../../common/styledCommonComponents";


function PatientsListScreen() {
    const theme = useTheme();
    return (
        <StyledScreen>
        <StyledBox css={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'top,'}}>
            <StyledH3 css={{marginLeft:"46px"}}>
                Mis Pacientes
            </StyledH3>
        <StyledBox css={{display: 'flex',
            flexDirection: 'row',
            alignItems: 'top,',
            marginLeft:"46px",
            marginRight:"46px",
            boxSizing: "border-box",
            width: "1250px",
            height: "16px",
            borderBottom: "1px solid #E1D1FC",
        }}>
        </StyledBox>
        <StyledBox css={{display: 'flex',
            flexDirection: 'row',
            alignItems: 'top,',
            columnGap: "42px",
            paddingTop:"35px",
            paddingLeft:"46px",
            }}>
          <StyledPatientsListCard>
           <StyledBox css={{ paddingLeft:"24px",
               paddingRight:"29px",
               paddingTop:"22px",
               paddingBottom:"22px",}}>
           <StyledBox css={{display:"flex",flexDirection:"column",columnGap:"17px"}}>
          <StyledP css={{
              width: "107px",
              height: "13px",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "11px",
              lineHeight: "13px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "0.05em",}}>Pacientes Activos</StyledP>
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
              color: "#5F5F5F",}}>47</StyledP>
           </StyledBox>
               <StyledBox css={{
              width: "45px",
              height: "18px",}}>
              <StyledBox css={{
                width: "45px",
                height: "18px",
                background: "rgba(247, 97, 87, 0.42)",
                boxShadow: "0px 4px 24px rgba(214, 203, 252, 0.3)",
                borderRadius: "15px",}}/>
          </StyledBox>
           </StyledBox>
          </StyledPatientsListCard>
          <StyledPatientsListCard/>
          <StyledPatientsListCard/>


        </StyledBox>
        </StyledBox>
        </StyledScreen>
    );
}

export default PatientsListScreen;