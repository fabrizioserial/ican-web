import React from 'react';
import { StyledButton } from '../../styledCommonComponents';

const IconButton = ({ icon, onClick }) => {
	return (
		<StyledButton
			css={{
				backgroundColor: 'transparent',
				border: '1px solid #F3888F',
				padding: '20px 10px',
				borderRadius: '5px',
				cursor: 'pointer',
			}}
			onClick={onClick}
		>
			{icon}
		</StyledButton>
	);
};

export default IconButton;
