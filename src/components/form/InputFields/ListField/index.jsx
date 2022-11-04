import React from 'react';
import { StyledBox, StyledP } from '../../../../common/styledCommonComponents';
import { CapitalizeText } from '../../../../utils/utils';

const ListField = ({
	value,
	disabled,
	label,
	height = '100%',
	width = '100%',
}) => {
	return (
		<StyledBox
			css={{
				height: height,
				width: width,
				display: 'flex',
				flexDirection: 'column',
				boxSizing: 'border-box',
				justifyContent: 'flex-end',
				pointerEvents: disabled && 'none',
			}}
		>
			<StyledP
				css={{ fontSize: '16px', marginBottom: '10px', fontWeight: 200 }}
			>
				{label}
			</StyledP>
			<StyledBox
				css={{
					display: 'flex',
					flexDirection: 'column',
					marginTop: '20px',
				}}
			>
				{value?.map((value) => (
					<StyledP css={{ margin: '8px 0' }}>
						{CapitalizeText(value.name)}
					</StyledP>
				))}
			</StyledBox>
		</StyledBox>
	);
};

export default ListField;
