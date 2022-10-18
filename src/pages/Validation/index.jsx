import React, { useState } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import { FormsSqueleton, validationFormValues } from '../../utils/utils';
import { FormBuilder } from '../../components/form/InputFields/utils';
import Button from '../../common/components/button/Button';

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
		<StyledScreen css={{ justifyContent: 'center', flexDirection: "column" }}>
			{/* <StyledBox
				css={{
					width: '800px',
					backgroundColor: 'red',
					borderRadius: '20px',
					margin: '50px',
				}}
			>
				{FormBuilder(sections, values, handleOnChange)}
			</StyledBox>
			<StyledBox
				css={{
					margin: "0 50px",
					width: '800px',
					backgroundColor: 'blue',
				}}
			>
				<Button />
			</StyledBox> */}
			<StyledBox
				css={{
					margin: "50px 0",
					display: 'flex',
					justifyContent: "center",
					alignSelf: 'center',
					flexDirection: 'column',
				}}
			>
				<StyledBox
					css={{
						backgroundColor: 'white',
						width: "800px",
						borderRadius: '20px',
						margin: '50px',
					}}
				>
					{FormBuilder(sections, values, handleOnChange)}
				</StyledBox>
				<StyledBox
					css={{
						margin: "0 50px",
					}}
				>
					<Button className="submit" text={'Guardar cambios'} />
				</StyledBox>
			</StyledBox>
		</StyledScreen>
	);
};
export default Validation;
