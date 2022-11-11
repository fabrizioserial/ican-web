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
				if (
					Object.keys(
						tnmOptions[
							cancerList.find((cancer) => cancer.id === values?.organ)
								?.organ
						]?.[name] ?? {},
					).length > 0 &&
					values[name] === ''
				) {
					onChange(
						name,
						Object.keys(
							tnmOptions[
								cancerList.find((cancer) => cancer.id === values?.organ)
									?.organ
							]?.[name],
						)[0],
					);
				}
			} else if (name === 'cancerStage') {
				const options = evaluateTNM(
					cancerList.find((cancer) => cancer.id === values?.organ)?.organ,
					values.tumor,
					values.nodule,
					values.metastasis,
				);
				setOptionsTNM(options);
				if (
					!Object.keys(options).find(
						(id) => id === 'no_value' || id === 'no_exist',
					) &&
					values.cancerStage === ''
				) {
					onChange('cancerStage', Object.keys(options)[0]);
				}
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
