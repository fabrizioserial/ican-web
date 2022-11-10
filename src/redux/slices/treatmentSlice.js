import { createSlice, current } from '@reduxjs/toolkit';
import {
	actionTypeEnum,
	InputTypeEnum,
	TreatmentStatusType,
} from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';
import PlusCircleIcon from '../../assets/PlusCircleIcon';
import { validateFormApi } from '../api/validateFormApi';
import { patientApi } from '../api/patientApi';

const initialState = {
	fields: [
		[
			{
				label: 'Tratamiento del tumor primario ',
				options: {
					no_value: 'Seleccione tumor primario',
					Surgery: 'Cirugía',
					Radiotherapy: 'Radioterapia',
				},
				input_type: InputTypeEnum.SELECTOR,
				name: 'tumorTreatment',
				disabled: true,
			},
			{
				label: 'Tratamiento perioperatorio',
				options: {
					no_value: 'Seleccione tumor primario',
					Chemotherapy: 'Quimioterapia',
					HormoneTherapy: 'Hormonoterapia',
					Immunotherapy: 'Inmunoterapia',
					KinaseInhibitor: 'Kinesioterapia',
					Radiotherapy: 'Radioterapia',
				},
				input_type: InputTypeEnum.SELECTOR,
				name: 'perioperatory',
				disabled: true,
			},
		],
		[
			{
				label: 'Fecha de Comienzo',
				placeholder: 'XX/XX/XX',
				input_type: InputTypeEnum.DATEFIELD,
				name: 'startDate',
				disabled: true,
			},
			{
				label: 'Fecha estimada de finalizacion',
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
		intention: 'Adjuvant',
		objective: '',
		medicationIds: [],
		endingMotive: '',
	},
	edit: false,
	medications: [],
	status: TreatmentStatusType.WITHOUT_TREATMENT,
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
				state.fields.length -
					(state.edit || state.status === TreatmentStatusType.IS_FINISHED
						? 5
						: 3),
			);
			const fixedRows = state.fields.slice(
				state.fields.length -
					(state.edit || state.status === TreatmentStatusType.IS_FINISHED
						? 5
						: 3),
				state.fields.length,
			);

			const newID = uuidv4();

			const medicationToAdd = {
				id: newID,
				input_type: InputTypeEnum.MEDICATION_TREATMENT_ROW,
				names: ['medication', 'grammage'],
				disabled: !action.payload.edited,
			};

			state.fields = [...medications, [medicationToAdd], ...fixedRows];

			state.values = {
				...state.values,
				[`medication${medicationToAdd.id}`]:
					action.payload?.medicationValue ?? '',
				[`grammage${medicationToAdd.id}`]:
					action.payload?.grammageValue ?? '',
				medicationIds: [...state.values.medicationIds, medicationToAdd.id],
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
			state.fields = initialState.fields;
			state.values = initialState.values;
			state.status = initialState.status;
			state.edit = initialState.edit;
		},
		cancelFinishTreatment: (state, action) => {
			state.status = TreatmentStatusType.HAS_TREATMENT;
			const currentState = current(state);
			state.fields = currentState.fields.slice(
				0,
				currentState.fields.length -
					(currentState.values.endingMotive !== 'Other' ? 1 : 2),
			);
			state.values.progress = '';
			state.values.endingMotive = '';
			state.values.otherMotive = '';
		},
		finishTreatment: (state, action) => {
			state.status = TreatmentStatusType.FINISHING_TREATMENT;
			state.values.endingMotive = 'Toxicity';
			state.fields = [
				...state.fields,
				[
					{
						label: 'Progreso',
						// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
						type: 'text',
						input_type: InputTypeEnum.SELECTOR,
						disabled: false,
						options: {
							true: 'Si',
							false: 'No',
						},
						name: 'progress',
					},
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
				],
			];
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			patientApi.endpoints.getTreatmentById.matchFulfilled,
			(state, action) => {
				let currentState = current(state);
				state.fields = currentState.fields.slice(1);

				state.values = {
					...state.values,
					...action.payload,
					medicationIds: [],
				};
				state.status = action.payload.finishDate
					? TreatmentStatusType.IS_FINISHED
					: TreatmentStatusType.HAS_TREATMENT;

				if (action.payload.finishDate) {
					state.fields = [
						state.fields[0],
						[
							{
								label: 'Fecha de Finalización',
								placeholder: 'XX/XX/XX',
								input_type: InputTypeEnum.DATEFIELD,
								name: 'finishDate',
								disabled: true,
							},
							{},
						],
						...state.fields.slice(1),
						[
							{
								label: 'Progreso',
								// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
								type: 'text',
								input_type: InputTypeEnum.SELECTOR,
								disabled: true,
								options: {
									true: 'Si',
									false: 'No',
								},
								name: 'progress',
							},
							{
								label: 'Razon de finalizacion',
								// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
								type: 'text',
								input_type: InputTypeEnum.SELECTOR,
								disabled: true,
								options: {
									Toxicity: 'Toxicidad',
									DiseaseProgression: 'Progresion de la enfermedad',
									DoctorOrPatientDecision:
										'Decision de paciente/medico',
									CompletedTreatment: 'Completó el tratamiento',
									Other: 'Otros',
								},
								name: 'endingMotive',
							},
						],
					];
					if (action.payload.otherMotive) {
						state.fields = [
							...state.fields,
							[
								{
									label: 'Otros motivos',
									// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
									type: 'text',
									input_type: InputTypeEnum.TEXTFIELD,
									name: 'otherMotive',
									disabled: true,
								},
							],
						];
					}
				}

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
	cancelFinishTreatment,
	switchToEdit,
	clearTreatmentModal,
	finishTreatment,
} = treatmentSlice.actions;
export default treatmentSlice.reducer;
