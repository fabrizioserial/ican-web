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
				height: '70px',
				width: '75px',
				textAlign: 'center',
				marginBottom: 0,
				fontSize: '2.7em',
				backgroundColor: color,
			}}
		>
			<NavLink to={pathName}>{icon && icon(state)}</NavLink>
		</StyledBox>
	);
};

export default NavItem;
