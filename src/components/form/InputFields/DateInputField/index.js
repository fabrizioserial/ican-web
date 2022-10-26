import React from 'react';
import TextInputField from '../TextInputField';

const DateInputField = ({
	height,
	width = '100%',
	placeholder,
	value,
	label,
	onChange,
	name,
	disabled,
}) => {
	const handleOnChange = (_, newValue) => {
		if (newValue.length > value?.length) {
			if (newValue.length === 2 || newValue.length === 5) {
				onChange(name, newValue + '-');
			} else {
				onChange(name, newValue);
			}
		} else {
			onChange(name, newValue);
		}
	};
	return (
		<TextInputField
			disabled={disabled}
			type={'date'}
			maxCharacters={10}
			label={label}
			placeholder={placeholder}
			value={value}
			onChange={handleOnChange}
		/>
	);
};

export default DateInputField;
