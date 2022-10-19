import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {StyledBox, StyledH3, StyledP, StyledPatientsListCard, StyledScreen} from "../../common/styledCommonComponents";
import NavItem from "../../components/Navbar/NavItem";
import PatientsHeaderCard from "./HeaderCard";
import {NavbarConfigBottom, PatientsListHeaderConfig} from "../../utils/utils";
import WaitingListHeaderCard from "./WaitingListCard";


function PatientsListScreen() {
    const theme = useTheme();
    const [headerCards, setHeaderCards] = useState(PatientsListHeaderConfig);
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
            <WaitingListHeaderCard></WaitingListHeaderCard>
            {headerCards.map((item, index) => (
                <PatientsHeaderCard key={index} text={item.text} number={item.number} positive={item.positive} pillText={item.pillText}/>
            ))}


        </StyledBox>
        </StyledBox>
        </StyledScreen>
    );
}

export default PatientsListScreen;