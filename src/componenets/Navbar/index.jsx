import * as React from "react";
import {useNavigate} from "react-router";
import Link from "@material-ui/core/Link";
import {StyledBox} from "../../common/styledCommonComponents";
import NavItem from "./NavItem";
import HomeIcon from "../../assets/HomeIcon";
import PatientsListIcon from "../../assets/PatientsListIcon";
import StatisticsIcon from "../../assets/StatisticsIcon";



const Navbar = ({state}) => {

        return (
            <StyledBox css={{  position: "fixed",    /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
                height: "100%",
                width: "75px",     /* Set the width of the sidebar */
                zIndex: 1,     /* Stay on top of everything */
                top: "3.4em",     /* Stay at the top */
                backgroundColor: "#222", /* Black */
                overflowX: "hidden",   /* Disable horizontal scroll */
                paddingTop: "10px"}}>
               <NavItem icon={<HomeIcon state={state}/>} pathName={"/"} title={"Home"} state={state}/>
               <NavItem icon={<PatientsListIcon state={state}/>} pathName={"/login"} title={"Mis Pacientes"} state={state}/>
               <NavItem icon={<StatisticsIcon state={state}/>} pathName={"/login"} title={"Estadísticas"} state={state}/>
               //array con objetos
            </StyledBox>

        );

}
export default Navbar