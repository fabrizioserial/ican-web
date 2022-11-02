import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import TrashIcon from '../../../../assets/TrashIcon';
import IconButton from '../../../../common/components/iconButton';
import { StyledBox } from '../../../../common/styledCommonComponents';
import { useGetCancerMedicationQuery } from '../../../../redux/api/validateFormApi';
import { removeTreatmentMedication } from '../../../../redux/slices/formSlice';
import SelectorInputField from '../SelectorInputField';

const optionsMed = {
	Aspirina: 'Aspirina',
	Ribotril: 'Ribotril',
	Tafirol: 'Tafirol',
	Actron: 'Actron',
	Amoxixilina: 'Amoxixilina',
};
const optionsGram = {
	0: '0',
	1: '1',
	2: '2',
	3: '3',
	4: '4',
};

const MedicationField = ({ id, names, values, onChange, type }) => {
	// pegar directo al endpoint que trae la medicacion y el gramaje

	// crear funciones 1: onchange para gramaje, 2: onChange para medication
	// argumentos para onChange: names y values

    const { data: dataCancerMed, isSuccess: isSuccessCancerMed } = useGetCancerMedicationQuery()

    const [optionsMed, setOptionsMed] = useState([])
    const [optionsGram, setOptionsGram] = useState([])

    useEffect(() => {
        if (isSuccessCancerMed) {
            let auxOptMed = []
            let auxOptGram = []

            Object.values(dataCancerMed).map(med => (
                auxOptMed[med.id] = med.name
            ))
            Object.values(dataCancerMed).map(med => (
                med.possibleGrammages.map(gram => (
                    auxOptGram[gram.grammage.id] = gram.grammage.grammage
                ))
            ))

            setOptionsMed(auxOptMed)
            setOptionsGram(auxOptGram)
        }
    }, [dataCancerMed, isSuccessCancerMed])

    const handleChangeMed = () => {};

	const handleChangeGram = () => {};

	// onDelete, usa el dispatch(removeTreatmentMedication(id))
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(removeTreatmentMedication(id));
	};

	return (
		<StyledBox
			css={{
				width: '100%',
				columnGap: '30px',
				display: 'flex',
				boxSizing: 'border-box',
			}}
		>
			<StyledBox
				css={{
					flex: 0.6,
				}}
			>
				<SelectorInputField
					type={type}
					value={values.medication}
					label={'Medicamento'}
					name={names.medication}
					onChange={onChange} // onChange medicacion
					options={optionsMed} // recibe del endpoint
				/>
			</StyledBox>
			<StyledBox
				css={{
					flex: 0.4,
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'flex-end',
					columnGap: '20px',
				}}
			>
				<SelectorInputField
					type={type}
					value={values.grammage}
					label={'Gramaje'}
					name={names.grammage}
					onChange={onChange} // onChange gramaje
					options={optionsGram} // recibe del endpoint
				/>
				{id !== 1 && (
					<StyledBox>
						<IconButton
							icon={<TrashIcon />}
							onClick={() => handleDelete(id)}
						/>
					</StyledBox>
				)}
			</StyledBox>
		</StyledBox>
	);
};

export default MedicationField;
