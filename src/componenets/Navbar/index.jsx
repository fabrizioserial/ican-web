import React, {useState} from "react";
import {StyledBox} from "../../common/styledCommonComponents";
import NavItem from "./NavItem";
import HomeIcon from "../../assets/HomeIcon";
import PatientsListIcon from "../../assets/PatientsListIcon";
import StatisticsIcon from "../../assets/StatisticsIcon";



const Navbar = ({state}) => {
    const [navbarItems]=useState(["Home","Mis Pacientes","Estadísticas"])
    const [navbarPath]=useState(["/home","/patients","/statistics"])
    const [navbarIcons]= useState([<HomeIcon state={state}/>,<PatientsListIcon state={state}/>,<StatisticsIcon state={state}/> ])
        return (
            <StyledBox css={{  position: "fixed",    /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
                height: "100%",
                width: "75px",     /* Set the width of the sidebar */
                zIndex: 1,     /* Stay on top of everything */
                top: "3.4em",     /* Stay at the top */
                backgroundColor: "#222", /* Black */
                overflowX: "hidden",   /* Disable horizontal scroll */
                paddingTop: "10px"}}>

                {navbarItems.map((name,index) => (
                    <NavItem icon={navbarIcons[index]} pathName={navbarPath[index]} title={name} state={state}/>

                ))}


            </StyledBox>

        );

}
  export default Navbar