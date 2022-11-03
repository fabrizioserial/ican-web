import React from 'react';
import {
	StyledBox,
	StyledInput,
	StyledP,
} from '../../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';

const TextInputField = ({
	height,
	width = '100%',
	placeholder,
	value,
	label,
	onChange,
	name,
	type,
	disabled,
	maxCharacters,
}) => {
	const theme = useTheme();
	const handleOnChange = (newValue) => onChange(name, newValue);
	return (
		<StyledBox
			css={{
				width: width,
				height: height,
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
			<StyledInput
				css={{
					padding: '20px 16px',
					borderStyle: 'none',
					fontSize: '16px',
					boxSizing: 'border-box',
					width: '100%',
					backgroundColor: disabled ? theme.oncoGrey : 'transparent',
					border: !disabled && '1px solid #E5D7FD',
					borderRadius: '5px',
				}}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(e) => handleOnChange(e.target.value)}
			/>
		</StyledBox>
	);
};

export default TextInputField;
