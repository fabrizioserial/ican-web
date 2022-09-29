
import React, {useState} from "react";
import {StyledBox} from "../../../common/styledCommonComponents";
import Link from "@material-ui/core/Link";

 const NavItem  = ( {icon,title, pathName, state}) => {
     let handleClick;
     return (
         <StyledBox onClick={()=>setState(title)} css={{
             height: "70px",
             width: "75px",
             textAlign: "center",
             marginBottom: 0,
             fontSize: "2.7em",
             color: "#9FFFCB"
         }}>
             <Link to={pathName}>
             {icon}
             </Link>

         </StyledBox>
     );
 }

export default NavItem