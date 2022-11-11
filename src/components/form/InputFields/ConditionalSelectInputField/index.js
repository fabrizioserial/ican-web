import React, { useEffect, useMemo, useState } from 'react';
import {
	useGetCancerQuery,
	useLazyGetCancerTypeQuery,
} from '../../../../redux/api/validateFormApi';
// import { TNMOptions } from '../../../../utils/utils';
import SelectorInputField from '../SelectorInputField';
import { evaluateTNM, tnmOptions } from '../../../../utils/tnm_options';

const ConditionalSelectInputField = ({
	properties,
	values,
	onChange,
	disabled,
}) => {
	const { varToEvaluate, type, name, label, options } = properties;
	// const { varToEvaluate, type, name, label } = properties;
	// const currentOption = useMemo(
	// 	() => TNMOptions[values[varToEvaluate]] ?? TNMOptions.default,
	// 	[values[varToEvaluate]],
	// );

	const [optionsTNM, setOptionsTNM] = useState({
		no_value: 'Seleccione valor',
	});
	const { data: cancerList } = useGetCancerQuery();

	useEffect(() => {
		if (cancerList && values.organ) {
			if (['tumor', 'nodule', 'metastasis'].includes(name)) {
				const valuestoSet = {
					no_value: 'Seleccione valor',
					...tnmOptions[
						cancerList.find((cancer) => cancer.id === values?.organ)
							?.organ
					]?.[name],
				};
				// console.log( tnmOptions[cancerList.find((cancer) => cancer.id === values.organ).organ]?.[name], values.organ, name)
				// console.log(valuestoSet)
				setOptionsTNM(valuestoSet);
			} else if (name === 'cancerStage') {
				setOptionsTNM(
					evaluateTNM(
						cancerList.find((cancer) => cancer.id === values?.organ)
							?.organ,
						values.tumor,
						values.nodule,
						values.metastasis,
					),
				);
			}
		}
	}, [
		values.organ,
		cancerList,
		values.tumor,
		values.metastasis,
		values.nodule,
	]);

	return (
		<SelectorInputField
			// type={type}
			value={values[name]}
			label={label}
			name={name}
			onChange={onChange}
			options={optionsTNM ?? {}}
			disabled={disabled}

			// options={TNMOptions[name] ?? {}}
		/>
	);
};

export default ConditionalSelectInputField;
