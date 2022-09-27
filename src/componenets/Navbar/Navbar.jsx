import * as React from "react";
import {useNavigate} from "react-router";
import {StyledNav} from "./StyledNavbar";
import {StyledNavItem} from "./NavItem/StyledNavItem";



 export const Navbar = () => {
    const navigate = useNavigate()

        return (
            <StyledNav>
                <a href={"/"} className={"home"}>
                    Home
                </a>

                <a href={"/login"}>
                    Login
                </a>
            </StyledNav>

        );

}