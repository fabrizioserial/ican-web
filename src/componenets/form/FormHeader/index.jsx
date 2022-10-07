import React from 'react';
import { StyledBox, StyledP } from '../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';

const FormHeader = ({ icon, title }) => {
	const theme = useTheme();

	return (
		<StyledBox
			css={{
				width: 'inherit',
				height: '72px',
				display: 'flex',
				flexDirection: 'row',
				borderBottom: `1px solid ${theme.OncoPurple}`,
				alignItems: 'center',
				paddingLeft: '40px',
				boxSizing: 'border-box',
			}}
		>
			{icon}
			<StyledP
				css={{
					fontSize: '24px',
					color: theme.OncoPurple,
					fontWeight: 500,
					marginLeft: '20px',
				}}
			>
				{title}
			</StyledP>
		</StyledBox>
	);
};

export default FormHeader;
