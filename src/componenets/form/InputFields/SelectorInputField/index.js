import React from 'react';
import {
	StyledBox,
	StyledInput,
	StyledOption,
	StyledP,
	StyledSelect,
} from '../../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';

const SelectorInputField = ({
	height,
	width = '100%',
	value,
	label,
	onChange,
	name,
	options,
}) => {
	const theme = useTheme();

	return (
		<StyledBox
			css={{
				width: width,
				height: height,
				display: 'flex',
				flexDirection: 'column',
				boxSizing: 'border-box',
			}}
		>
			<StyledP
				css={{ fontSize: '16px', marginBottom: '10px', fontWeight: 200 }}
			>
				{label}
			</StyledP>
			<StyledSelect
				css={{
					padding: '20px 16px',
					borderStyle: 'none',
					fontSize: '16px',
					boxSizing: 'border-box',
					width: '100%',
					backgroundColor: theme.oncoGrey,
				}}
				onChange={(e) => onChange(name, e.target.value)}
				value={value}
			>
				{Object.keys(options).map((item, index) => (
					<StyledOption key={index} value={item}>
						{options[item]}
					</StyledOption>
				))}
			</StyledSelect>
		</StyledBox>
	);
};

export default SelectorInputField;
