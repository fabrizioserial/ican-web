import React, { useState } from 'react';
import { StyledBox, StyledScreen } from '../../common/styledCommonComponents';
import FormHeader from '../../componenets/form/FormHeader';
import { FormHeaders } from '../../utils/utils';

const Validation = () => {
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
				<FormHeader
					title={FormHeaders['patient-data'].title}
					icon={FormHeaders['patient-data'].icon}
				/>
			</StyledBox>
		</StyledScreen>
	);
};
export default Validation;
