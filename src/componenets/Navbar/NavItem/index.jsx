import React from 'react';
import { StyledBox } from '../../../common/styledCommonComponents';
import { NavLink } from 'react-router-dom';

const NavItem = ({ icon, title, pathName, state }) => {
	return (
		<StyledBox
			css={{
				height: '70px',
				width: '75px',
				textAlign: 'center',
				marginBottom: 0,
				fontSize: '2.7em',
				color: '#9FFFCB',
			}}
		>
			<NavLink to={pathName}>{icon && icon(state)}</NavLink>
		</StyledBox>
	);
};

export default NavItem;
