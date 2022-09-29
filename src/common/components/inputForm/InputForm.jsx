import React from 'react';
import Input from '../input/Input';
import { InputFormWrapper, InputIconWrapper } from './StyledInputForm';

const InputForm = ({ placeholder, legend, onChangeText, type, Icon }) => (
	<InputFormWrapper>
		<legend>{legend}</legend>
		<Input
			placeholder={placeholder}
			onChangeText={onChangeText}
			type={type}
		/>
		<InputIconWrapper>{Icon && <Icon />}</InputIconWrapper>
	</InputFormWrapper>
);

export default InputForm;
