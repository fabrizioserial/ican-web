import React, { useMemo } from 'react';
import { useLazyGetCancerTypeQuery } from '../../../../redux/api/validateFormApi';
// import { TNMOptions } from '../../../../utils/utils';
import SelectorInputField from '../SelectorInputField';

const ConditionalSelectInputField = ({ properties, values, onChange }) => {
	const { varToEvaluate, type, name, label, options } = properties;
	// const { varToEvaluate, type, name, label } = properties;
	// const currentOption = useMemo(
	// 	() => TNMOptions[values[varToEvaluate]] ?? TNMOptions.default,
	// 	[values[varToEvaluate]],
	// );

	return (
		<SelectorInputField
			// type={type}
			value={values[name]}
			label={label}
			name={name}
			onChange={onChange}
			options={options[name] ?? {}}
		// options={TNMOptions[name] ?? {}}
		/>
	);
};

export default ConditionalSelectInputField;
