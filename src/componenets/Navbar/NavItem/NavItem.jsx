import {StyledNavItem} from "./StyledNavItem";
import React from "react";

export const NavItem  = ( ) =>{
    let handleClick;
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }
        return (
            <div></div>
        );

}