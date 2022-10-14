import React, { useState } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { FormsSqueleton, validationFormValues } from '../../utils/utils';
import { FormBuilder } from '../../components/form/InputFields/utils';

const Validation = () => {
	const [sections] = useState(FormsSqueleton);
	const [values, setValues] = useState(validationFormValues);

	// set values of validationFormValues
	const handleOnChange = (name, newValue) => {
		if (!name || newValue === undefined) return;
		setValues({
			...values,
			[name]: newValue,
		});
	};

	return (
		<StyledScreen css={{ display: 'flex', justifyContent: 'center' }}>
			<StyledBox
				css={{
					width: '800px',
					backgroundColor: 'white',
					borderRadius: '20px',
					margin: '50px 0',
				}}
			>
				{FormBuilder(sections, values, handleOnChange)}
			</StyledBox>
		</StyledScreen>
	);
};
export default Validation;
