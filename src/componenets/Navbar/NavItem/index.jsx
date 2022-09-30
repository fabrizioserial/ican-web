import React from 'react';
import { StyledBox } from '../../../common/styledCommonComponents';
import { NavLink } from 'react-router-dom';
import {useTheme} from "styled-components";

const NavItem = ({ icon, title, pathName, state }) => {
	const theme = useTheme();
	const color= state ? theme.oncoNavbarSelection : theme.white
	return (
		<StyledBox
			css={{
				height: '40px',
				width: '70px',
				textAlign: 'center',
				backgroundColor: color,
				left:"0px",
				top:"97px"
			}}
		>
			<NavLink to={pathName}>
				<StyledBox css={{ paddingTop:'10px'}}>
					{icon && icon(state)}
				</StyledBox>

			</NavLink>
			<StyledBox css={{ position: 'absolute',
				width: '4px',
				height: '34.96px',
				left: '66px',
				top: '100px',
				background: '#AF7EFF',
				borderRadius: '10px 0px 0px 10px',}}/>
		</StyledBox>

	);
};

export default NavItem;
