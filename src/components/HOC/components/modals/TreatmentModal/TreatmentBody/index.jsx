import { StyledBox } from '../../../../../../common/styledCommonComponents';
import React, { useEffect, useState } from 'react';
import { FormBuilderWithoutHeader } from '../../../../../form/InputFields/utils';
import { useDispatch, useSelector } from 'react-redux';
import {
	finishTreatment,
	setValue,
	switchToEdit,
} from '../../../../../../redux/slices/treatmentSlice';
import Button from '../../../../../../common/components/button/Button';
import PlusCircelIcon from '../../../../../../assets/PlusCircleIcon';
import { useGetTreatmentByIdQuery } from '../../../../../../redux/api/patientApi';
import { StyledCircularProgress } from '../../../../../CustomCircularProgress/styles';

const TreatmentBody = () => {
	const { reportId } = useSelector((state) => state.utilsSlice);
	const { fields, values } = useSelector((state) => state.treatmentSlice);
	const dispatch = useDispatch();
	const { isLoading } = useGetTreatmentByIdQuery(reportId, {
		skip: !reportId,
	});
	const onChangeHandler = (name, value) => {
		dispatch(setValue({ name, value }));
	};

	// useEffect(()=>{dispatch(switchToEdit())},[])

	return (
		<StyledBox css={{ padding: '20px 0 40px 0', boxSizing: 'border-box' }}>
			{isLoading ? (
				<StyledBox
					css={{
						height: '300px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<StyledCircularProgress />
				</StyledBox>
			) : (
				<>
					<StyledBox>
						{FormBuilderWithoutHeader(fields, values, onChangeHandler)}
					</StyledBox>
					<StyledBox css={{ padding: '30px 45px 0' }}>
						<Button
							className="rejected"
							text={'Finalizar Tratamiento'}
							disabled={false}
							onClick={() => dispatch(finishTreatment())}
						/>
					</StyledBox>
				</>
			)}
		</StyledBox>
	);
};
export default TreatmentBody;
