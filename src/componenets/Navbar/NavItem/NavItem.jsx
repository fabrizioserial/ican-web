import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {StyledNavItem} from "./StyledNavItem";
import React from "react";
export const NavItem  = () =>{
    let handleClick;
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={handleClick}>
                </Link>
            </StyledNavItem>
        );

}