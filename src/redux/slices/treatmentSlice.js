import { createSlice, current } from '@reduxjs/toolkit';
import { actionTypeEnum, InputTypeEnum } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';
import PlusCircleIcon from '../../assets/PlusCircleIcon';
import { validateFormApi } from '../api/validateFormApi';
import { patientApi } from '../api/patientApi';

const initialState = {
	fields: [
		[
			{
				label: 'Fecha de Comienzo',
				placeholder: 'XX/XX/XX',
				input_type: InputTypeEnum.DATEFIELD,
				name: 'treatmentStartDate',
				disabled: true,
			},
			{
				label: 'Fecha de Finalización',
				placeholder: 'XX/XX/XX',
				input_type: InputTypeEnum.DATEFIELD,
				name: 'estimateFinishDate',
				disabled: true,
			},
		],
		[
			{
				label: 'Intension del medicamente',
				// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
				type: 'text',
				input_type: InputTypeEnum.SELECTOR,
				disabled: true,
				options: {
					Adjuvant: 'Adyuvante',
					Concurrent: 'Concurrante',
					Neoadjuvant: 'Neoadyuvante',
					Palliative: 'Paliativa',
				},
				name: 'intention',
			},
		],
		[
			{
				label: 'Objetivo',
				// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
				type: 'text',
				input_type: InputTypeEnum.TEXTFIELD,
				name: 'objective',
				disabled: true,
			},
		],
	],
	values: {
		treatmentStartDate: '',
		estimateFinishDate: '',
		intention: '',
		objective: '',
		medicationsIds: [],
		endingMotive: '',
	},
	edit: false,
	medications: [],
};

const treatmentSlice = createSlice({
	name: 'treatmentSlice',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.values = {
				...state.values,
				[action.payload.name]: action.payload.value,
			};
			const aux = current(state.fields);
			if (state.values?.endingMotive === 'Other') {
				state.fields = [
					...state.fields,
					[
						{
							label: 'Otros motivos',
							// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
							type: 'text',
							input_type: InputTypeEnum.TEXTFIELD,
							name: 'otherMotive',
							disabled: false,
						},
					],
				];
			} else if (
				aux.find((column) =>
					column.find((field) => field.name === 'otherMotive'),
				)
			) {
				state.fields = aux.filter((column) =>
					column.find((field) => field.name !== 'otherMotive'),
				);
				state.values.otherMotive = '';
			}
		},
		addNewMedication: (state, action) => {
			const medications = state.fields.slice(
				0,
				state.fields.length - (state.edit ? 4 : 3),
			);
			const fixedRows = state.fields.slice(
				state.fields.length - (state.edit ? 4 : 3),
				state.fields.length,
			);

			const newID = uuidv4();

			const medicationToAdd = {
				id: newID,
				input_type: InputTypeEnum.MEDICATION_TREATMENT_ROW,
				names: ['medication', 'grammage'],
				disabled: true,
			};

			state.fields = [...medications, [medicationToAdd], ...fixedRows];

			state.values = {
				...state.values,
				[`medication${medicationToAdd.id}`]:
					action.payload?.medicationValue ?? '',
				[`grammage${medicationToAdd.id}`]:
					action.payload?.grammageValue ?? '',
				medicationsIds: [...state.values.medicationIds, newID],
			};
		},
		removeMedication: (state, action) => {
			const idToRemove = action.payload;

			state.fields = state.fields?.filter((fields) =>
				fields.find((item) => !item?.id || item.id !== action.payload),
			);

			const valueAux = state.values;
			delete valueAux[`medication${idToRemove}`];
			delete valueAux[`grammage${idToRemove}`];

			state.values = {
				...valueAux,
				medicationIds: state.values.medicationIds.filter(
					(id) => id !== idToRemove,
				),
			};
		},
		switchToEdit: (state, action) => {
			state.fields = state.fields.map((column) =>
				column.map((field) => ({ ...field, disabled: !field.disabled })),
			);
			state.edit = !state.edit;
			if (state.edit) {
				const medications = state.fields.slice(0, state.fields.length - 3);
				const fixedRows = state.fields.slice(
					state.fields.length - 3,
					state.fields.length,
				);

				state.fields = [
					...medications,
					[
						{
							label: 'Añadir Medicación',
							type: 'text',
							input_type: InputTypeEnum.ADD_SECTION,
							icon: <PlusCircleIcon />,
							handleClick: () =>
								actionTypeEnum.ADD_MEDICATION_TREATMENT_MODAL,
						},
					],
					...fixedRows,
				];
			}
		},
		clearTreatmentModal: (state, action) => {
			state = initialState;
		},
		finishTreatment: (state, action) => {
			state.fields = [
				...state.fields,
				[
					{
						label: 'Razon de finalizacion',
						// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
						type: 'text',
						input_type: InputTypeEnum.SELECTOR,
						disabled: false,
						options: {
							Toxicity: 'Toxicidad',
							DiseaseProgression: 'Progresion de la enfermedad',
							DoctorOrPatientDecision: 'Decision de paciente/medico',
							CompletedTreatment: 'Completó el tratamiento',
							Other: 'Otros',
						},
						name: 'endingMotive',
					},
					{},
				],
			];
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			patientApi.endpoints.getTreatmentById.matchFulfilled,
			(state, action) => {
				state.values = {
					...state.values,
					...action.payload,
					medicationIds: [],
				};

				/*
                grammage
:
10
grammageId
:
"63f9702e-537f-4ac8-af96-5488d7d39b39"
intention
:
"Neoadjuvant"
medication
:
"medication1"
medicationId
:
"e55439c5-962a-438f-8b73-26c171de7c94"
typeOfMedication
:
"HormoneTherapy"
unit
:
"Grams"

                 */
				action.payload?.medications.forEach((medication) => {
					treatmentSlice.caseReducers.addNewMedication(state, {
						payload: {
							medicationValue: medication.medicationId,
							grammageValue: medication.grammageId,
						},
					});
				});

				let medications = {};
				action.payload.medications.forEach((medication) => {
					medications[medication.typeOfMedication] = {
						...medications[medication.typeOfMedication],
						[medication.medicationId]: {
							id: medication.medicationId,
							label: medication.medication,
							grammages: [
								...(medications[medication.medicationId]?.grammages ??
									[]),
								{
									id: medication.grammageId,
									label: medication.grammage,
								},
							],
						},
					};
				});
				state.medications = medications;
			},
		);
	},
});

export const {
	setValue,
	addNewMedication,
	removeMedication,
	switchToEdit,
	clearTreatmentModal,
	finishTreatment,
} = treatmentSlice.actions;
export default treatmentSlice.reducer;
