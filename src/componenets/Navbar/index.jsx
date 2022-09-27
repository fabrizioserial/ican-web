import * as React from "react";
import {useNavigate} from "react-router";
import Link from "@material-ui/core/Link";
import {StyledBox} from "../../common/styledCommonComponents";



const Navbar = () => {
    const navigate = useNavigate()

        return (
            <StyledBox css={{  position: "fixed",    /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
                height: "100%",
                width: "75px",     /* Set the width of the sidebar */
                zIndex: 1,     /* Stay on top of everything */
                top: "3.4em",     /* Stay at the top */
                backgroundColor: "#222", /* Black */
                overflowX: "hidden",   /* Disable horizontal scroll */
                paddingTop: "10px"}}>
                <Link href={"/"} className={"home"}>
                    Home
                </Link>

                <Link href={"/login"}>
                    Login
                </Link>
            </StyledBox>

        );

}
export default Navbar