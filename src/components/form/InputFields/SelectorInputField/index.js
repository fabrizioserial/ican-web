import React from 'react';
import {
	StyledBox,
	StyledInput,
	StyledOption,
	StyledP,
	StyledSelect,
} from '../../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';
import { useLazyGetCancerTypeQuery } from '../../../../redux/api/validateFormApi';

const SelectorInputField = ({
	height,
	width = '100%',
	value,
	label,
	onChange,
	name,
	options,
	disabled
}) => {
	const theme = useTheme();

	const [refetch, { data: dataCancerType, isSuccess: successType }] = useLazyGetCancerTypeQuery();

	const handleChange = (name2, value) => {
		console.log(value, name)
		if (name === 'organ') {

			console.log(options)
			refetch("956205d1-ce8b-4137-be4e-4d7b973011cf")
		}
		onChange(name2, value)
	}

	return (
		<StyledBox
			css={{
				width: width,
				height: height,
				display: 'flex',
				flexDirection: 'column',
				boxSizing: 'border-box',
				pointerEvents: disabled && 'none',
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
					backgroundColor: disabled ? theme.oncoGrey : "transparent",
					border: !disabled && "1px solid #E5D7FD",
					borderRadius: "5px"
				}}
				onChange={(e) => handleChange(name, e.target.value)}
				value={value}
			>
				{Object.keys(options)?.map((item, index) => (
					// <StyledOption key={index} value={item}>
					<StyledOption key={index} value={options[item].value ?? item}>
						{/* <StyledOption key={index} value={item}> */}
						{options[item].label ?? options[item]}
					</StyledOption>
				))}
			</StyledSelect>
		</StyledBox>
	);
};

export default SelectorInputField;
