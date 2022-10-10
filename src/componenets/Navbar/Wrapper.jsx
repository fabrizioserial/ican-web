import React from 'react';
import Navbar from './index';
import { StyledBox } from '../../common/styledCommonComponents';
import { Outlet } from 'react-router';

const Wrapper = () => {
	return (
		<div css={{ flexDirection: 'row', display: 'flex' }}>
			<Navbar />
			<StyledBox css={{ paddingLeft: '70px' }}>
				<Outlet />
			</StyledBox>
		</div>
	);
};

export default Wrapper;
