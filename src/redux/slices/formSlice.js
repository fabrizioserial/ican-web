import { createSlice } from '@reduxjs/toolkit';
import UserIcon from '../../assets/UserIcon';
import CrossIcon from '../../assets/CrossIcon';
import BiomarkerIcon from '../../assets/BiomarkerIcon';
import PlusCircleIcon from '../../assets/PlusCircleIcon';
import HeartIcon from '../../assets/HeartIcon';
import StateIcon from '../../assets/StateIcon';
import TreatmentIcon from '../../assets/TreatmentIcon';
import {
	actionTypeEnum,
	CapitalizeText,
	InputTypeEnum,
	TNMOptions,
} from '../../utils/utils';
import { patientApi } from '../api/patientApi';
import { validateFormApi } from '../api/validateFormApi';
import { authSlice } from './authSlice';

const initialState = {
	patients: {
		title: 'Datos del paciente',
		icon: <UserIcon />,
		fields: [
			[
				{
					label: 'Nombre',
					placeholder: 'Introduzca nombre',
					type: 'text',
					input_type: InputTypeEnum.TEXTFIELD,
					name: 'name',
					disabled: true,
				},
				{
					label: 'Apellido',
					placeholder: 'Introduzca apellido',
					type: 'text',
					input_type: InputTypeEnum.TEXTFIELD,
					name: 'surname',
					disabled: true,
				},
			],
			[
				{
					label: 'Email',
					placeholder: 'Introduzca email',
					type: 'email',
					input_type: InputTypeEnum.TEXTFIELD,
					name: 'email',
					disabled: true,
				},
				{
					label: 'Género',
					options: {
						Masculine: 'Masculino',
						Femenine: 'Femenino',
					},
					input_type: InputTypeEnum.SELECTOR,
					name: 'sex',
					disabled: true,
				},
			],
			[
				{
					label: 'Numero de historial medico',
					placeholder: 'Introduzca numero de historial medico',
					type: 'text',
					input_type: InputTypeEnum.TEXTFIELD,
					name: 'medicHistoryNumber',
					disabled: true,
				},
				{
					label: 'Fecha de carga',
					placeholder: 'XX/XX/XX',
					input_type: InputTypeEnum.DATEFIELD,
					name: 'registerDate',
					type: 'text',
					disabled: true,
				},
			],
		],
	},
	hospital: {
		title: 'Datos Hospitalario',
		icon: <CrossIcon />,
		fields: [
			[
				{
					label: 'Fumador',
					values: [],
					input_type: InputTypeEnum.LIST,
					name: 'smoker',
					disabled: true,
				},
				{},
			],
			[
				{
					label: 'Antecedentes personales',
					values: [],
					input_type: InputTypeEnum.LIST,
					name: 'personal_history',
					disabled: true,
				},
				{
					label: 'Medicamentos ocasionales',
					values: [],
					input_type: InputTypeEnum.LIST,
					name: 'medication_history',
					disabled: true,
				},
			],
			[
				{
					label: 'Fecha de diagnostico',
					placeholder: 'XX/XX/XX',
					input_type: InputTypeEnum.DATEFIELD,
					name: 'diagnosisDate',
					type: 'text',
				},
				{
					label: 'Tumor primario',
					options: {
						no_value: 'Seleccionar Tumor primario',
					},
					input_type: InputTypeEnum.SELECTOR,
					name: 'organ',
				},
			],
			[
				{
					label: 'Tipo',
					options: {
						no_value: 'Seleccionar Tipo',
					},
					input_type: InputTypeEnum.SELECTOR,
					name: 'cancerType',
				},
				{
					label: 'Subtipo',
					options: {
						no_value: 'Seleccionar Subtipo',
					},
					input_type: InputTypeEnum.SELECTOR,
					name: 'cancerSubType',
				},
			],
			[
				{
					placeholder: 'Introduzca Expresion del PDL1',
					type: 'text',
					label: 'Expresión de PDL1',
					input_type: InputTypeEnum.TEXTFIELD,
					name: 'expresionPDL1',
				},
				{
					label: 'Estadio',
					input_type: InputTypeEnum.CONDITIONAL,
					name: 'cancerStage',
					varToEvaluate: 'organ',
					options: TNMOptions,
				},
			],
			[
				{
					label: 'T',
					input_type: InputTypeEnum.CONDITIONAL,
					name: 'tumor',
					varToEvaluate: 'organ',
					options: TNMOptions,
				},
				{
					label: 'N',
					input_type: InputTypeEnum.CONDITIONAL,
					name: 'nodule',
					varToEvaluate: 'organ',
					options: TNMOptions,
				},
				{
					label: 'M',
					input_type: InputTypeEnum.CONDITIONAL,
					name: 'metastasis',
					varToEvaluate: 'organ',
					options: TNMOptions,
				},
			],
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
				},
			],
		],
	},
	biomarkers: {
		title: 'Biomarcadores',
		icon: <BiomarkerIcon />,
		fields: [
			[
				{
					label: 'Añadir Nuevo Biomarcador',
					type: 'text',
					input_type: InputTypeEnum.ADD_SECTION,
					icon: <PlusCircleIcon />,
					handleClick: () => actionTypeEnum.ADD_BIOMARKER,
				},
			],
		],
	},
	setbacks: {
		title: 'Recaidas',
		icon: <HeartIcon />,
		fields: [
			[
				{
					label: 'Añadir Nueva Recaida',
					type: 'text',
					input_type: InputTypeEnum.ADD_SECTION,
					icon: <PlusCircleIcon />,
					handleClick: () => actionTypeEnum.ADD_SETBACK,
				},
			],
		],
	},
	// state: {
	// 	title: 'Estado',
	// 	icon: <StateIcon />,
	// 	fields: [
	// 		[
	// 			{
	// 				label: 'Números de Lineas de Tratamiento',
	// 				type: 'number',
	// 				input_type: InputTypeEnum.TEXTFIELD,
	// 				name: 'treatmentLine',
	// 			},
	// 			{
	// 				label: 'Progresión de la Enfermedad',
	// 				options: {
	// 					yes: 'Si',
	// 					no: 'No',
	// 				},
	// 				input_type: InputTypeEnum.SELECTOR,
	// 				name: 'progression',
	// 			},
	// 		],
	// 		[
	// 			{
	// 				label: 'Fecha de Progresión',
	// 				placeholder: 'XX/XX/XX',
	// 				input_type: InputTypeEnum.DATEFIELD,
	// 				name: 'load_date',
	// 				type: 'text',
	// 			},
	// 		],
	// 	],
	// },
	treatment: {
		title: 'Tratamiento',
		icon: <TreatmentIcon width={30} height={25} />,
		fields: [
			[
				{
					label: 'Añadir Nuevo Tratamiento',
					type: 'text',
					input_type: InputTypeEnum.ADD_SECTION,
					icon: <PlusCircleIcon />,
					handleClick: () => actionTypeEnum.ADD_TREATMENT,
				},
			],
		],
	},
	values: {
		organ: 'no_value',
		cancerType: 'no_value',
		cancerSubType: 'no_value',
	},
};

export const formSlice = createSlice({
	name: 'formSlice',
	initialState,
	reducers: {
		addBiomarkers: (state) => {
			const biomarkers = state.biomarkers.fields.slice(
				0,
				state.biomarkers.fields.length - 1,
			);
			const fixedRows = state.biomarkers.fields.slice(
				state.biomarkers.fields.length - 1,
				state.biomarkers.fields.length,
			);

			const biomarkersToAdd = {
				id: biomarkers.length + 1,
				input_type: InputTypeEnum.BIOMARKER_ROW,
				names: ['biomarker', 'evaluation'],
			};

			state.biomarkers.fields = [
				...biomarkers,
				[biomarkersToAdd],
				...fixedRows,
			];

			state.values.biomarkers = {
				...state.values.biomarkers,
				[`biomarker${biomarkersToAdd.id}`]: {
					[`biomarker${biomarkersToAdd.id}`]: '',
					[`evaluation${biomarkersToAdd.id}`]: '',
				},
			};
		},
		addSetBacks: (state) => {
			const setbacks = state.setbacks.fields.slice(
				0,
				state.setbacks.fields.length - 1,
			);
			const fixedRows = state.setbacks.fields.slice(
				state.setbacks.fields.length - 1,
				state.setbacks.fields.length,
			);

			const setbacksToAdd = {
				id: setbacks.length + 1,
				input_type: InputTypeEnum.SETBACK_ROW,
				names: ['setBackDate', 'setBackPlace', 'diagnosisDate'],
			};

			state.setbacks.fields = [...setbacks, [setbacksToAdd], ...fixedRows];

			state.values.setbacks = {
				...state.values.setbacks,
				[`setBackDate${setbacksToAdd.id}`]: '',
				[`setBackPlace${setbacksToAdd.id}`]: '',
				[`diagnosisDate${setbacksToAdd.id}`]: '',
			};
		},
		addTreatment: (state) => {
			state.treatment.fields = [
				[
					{
						id: 1,
						input_type: InputTypeEnum.MEDICATION_ROW,
						names: ['medication', 'grammage'],
					},
				],
				[
					{
						label: 'Añadir Medicación',
						type: 'text',
						input_type: InputTypeEnum.ADD_SECTION,
						icon: <PlusCircleIcon />,
						handleClick: () => actionTypeEnum.ADD_MEDICATION,
					},
				],
				[
					{
						label: 'Fecha de Comienzo',
						placeholder: 'XX/XX/XX',
						input_type: InputTypeEnum.DATEFIELD,
						name: 'treatmentStartDate',
					},
					{
						label: 'Fecha de Finalización',
						placeholder: 'XX/XX/XX',
						input_type: InputTypeEnum.DATEFIELD,
						name: 'estimateFinishDate',
					},
				],
				[
					{
						label: 'Intension del medicamente',
						// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
						type: 'text',
						input_type: InputTypeEnum.SELECTOR,
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
						name: 'treatmentObjective',
					},
				],
			];

			state.values = {
				...state.values,
				treatment: {
					medicalHistoryId: '',
					objetive: '',
					tumorTreatment: '',
					treatmentLine: 0,
					medications: {
						medication1: { medication1: '', grammage1: '' },
					},
					startDate: '',
					estimateFinishDate: '',
				},
			};
		},
		addTreatmentMedication: (state) => {
			const medications = state.treatment.fields.slice(
				0,
				state.treatment.fields.length - 3,
			);
			const fixedRows = state.treatment.fields.slice(
				state.treatment.fields.length - 3,
				state.treatment.fields.length,
			);

			const medicationToAdd = {
				id: medications.length + 1,
				input_type: InputTypeEnum.MEDICATION_ROW,
				names: ['medication', 'grammage'],
			};

			state.treatment.fields = [
				...medications,
				[medicationToAdd],
				...fixedRows,
			];

			state.values.treatment.medications = {
				...state.values.treatment.medications,
				[`medication${medicationToAdd.id}`]: {
					[`medication${medicationToAdd.id}`]: '',
					[`grammage${medicationToAdd.id}`]: '',
				},
			};
		},
		removeBiomarker: (state, action) => {
			state.biomarkers.fields = state.biomarkers.fields?.filter((fields) =>
				fields.find((item) => !item?.id || item.id !== action.payload),
			);
			let auxValues = state.values;
			delete auxValues[action.payload.biomarkerId];
			delete auxValues[action.payload.evaluationId];
			state.values = auxValues;
		},
		removeSetBacks: (state, action) => {
			state.setbacks.fields = state.setbacks.fields?.filter((fields) =>
				fields.find((item) => !item?.id || item.id !== action.payload),
			);
			let auxValues = state.values;
			delete auxValues[action.payload.setBackDateId];
			delete auxValues[action.payload.diagnosisDate];
			delete auxValues[action.payload.setBackPlace];
			state.values = auxValues;
		},
		removeTreatmentMedication: (state, action) => {
			state.treatment.fields = state.treatment.fields?.filter((fields) =>
				fields.find((item) => !item?.id || item.id !== action.payload),
			);
			let auxValues = state.values;
			delete auxValues[action.payload.medicationId];
			delete auxValues[action.payload.grammage1];
			state.values = auxValues;
		},
		setValue: (state, action) => {
			state.values = {
				...state.values,
				[action.payload.name]: action.payload.value,
			};
		},
		cleanForm: (state, action) => {
			state.patients = initialState.patients;
			state.hospital = initialState.hospital;
			state.biomarkers = initialState.biomarkers;
			state.setbacks = initialState.setbacks;
			state.state = initialState.state;
			state.treatment = initialState.treatment;
			state.values = initialState.values;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(authSlice.actions.logout, (state) => {
				state = initialState;
			})
			.addMatcher(
				patientApi.endpoints.getPatientDataForm.matchFulfilled,
				(state, action) => {
					const accepted = action.payload.status === 'Accepted';
					const hasTreatment =
						action.payload?.medications?.length > 0 ?? false;
					state.values = {
						...state.values,
						...action.payload,
						perioperatory: action.payload.perioperativeTreatment,
						organ: action.payload.organId,
						cancerSubType: action.payload.cancerSutypeId,
						cancerType: action.payload.cancerTypeId,
						medication_history: action.payload.otherMedications,
						personal_history: action.payload.diseases,
						name: CapitalizeText(action.payload.name),
						surname: CapitalizeText(action.payload.surname),
						smoker: [
							{
								name: `Tiempo fumado: ${action.payload.timeSmoking} año`,
							},
							{
								name: `Cantidad fumada por dia: ${action.payload.quantitySmoked} cigarrillos por dia`,
							},
						],
					};

					if (!action.payload?.isSmoker) {
						state.hospital.fields = state.hospital.fields.map((b) =>
							b.filter((a) => a.name !== 'smoker'),
						);
					}
					if (action.payload.otherMedications.length === 0) {
						state.hospital.fields = state.hospital.fields.map((b) =>
							b.filter((a) => a.name !== 'personal_history'),
						);
					}
					if (action.payload.diseases.length === 0) {
						state.hospital.fields = state.hospital.fields.map((b) =>
							b.filter((a) => a.name !== 'medication_history'),
						);
					}
					if (accepted) {
						state.hospital.fields = state.hospital.fields?.map((row) =>
							row?.map((column) => {
								if (column?.name) {
									return {
										...column,
										disabled: true,
									};
								} else {
									return { ...column };
								}
							}),
						);
						// state.state.fields = state.state.fields.map((row) => row?.map((column) => {
						// 	if(column?.name){
						// 		return({
						// 			...column,
						// 			disabled: true
						// 		})
						// 	}else{
						// 		return {...column}
						// 	}
						// }))
					}
					state.hospital.fields = state.hospital.fields.map((row) =>
						row.map((column) => {
							if (
								column.name === 'cancerType' &&
								action.payload.cancerTypeId &&
								action.payload.cancerType
							) {
								let auxObj = { no_value: 'Seleccionar Tipo' };
								auxObj[action.payload.cancerTypeId] = CapitalizeText(
									action.payload.cancerType,
								);
								return {
									...column,
									options: auxObj,
								};
							} else if (
								column.name === 'cancerSubType' &&
								action.payload.cancerSutypeId &&
								action.payload.cancerSubtype
							) {
								let auxObj = { no_value: 'Seleccionar Tipo' };
								auxObj[action.payload.cancerSutypeId] = CapitalizeText(
									action.payload.cancerSubtype,
								);
								return {
									...column,
									options: auxObj,
								};
							} else {
								return column;
							}
						}),
					);
					if (action.payload?.treatmentObjective) {
						state.treatment.fields = hasTreatment
							? [
									[
										{
											id: 1,
											input_type: InputTypeEnum.MEDICATION_ROW,
											names: ['medication', 'grammage'],
											disabled: true,
										},
									],
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
											name: 'treatmentObjective',
											disabled: true,
										},
									],
							  ]
							: [
									[
										{
											id: 1,
											input_type: InputTypeEnum.MEDICATION_ROW,
											names: ['medication', 'grammage'],
										},
									],
									[
										{
											label: 'Añadir Medicación',
											type: 'text',
											input_type: InputTypeEnum.ADD_SECTION,
											icon: <PlusCircleIcon />,
											handleClick: () =>
												actionTypeEnum.ADD_MEDICATION,
										},
									],
									[
										{
											label: 'Fecha de Comienzo',
											placeholder: 'XX/XX/XX',
											input_type: InputTypeEnum.DATEFIELD,
											name: 'treatmentStartDate',
										},
										{
											label: 'Fecha de Finalización',
											placeholder: 'XX/XX/XX',
											input_type: InputTypeEnum.DATEFIELD,
											name: 'estimateFinishDate',
										},
									],
									[
										{
											label: 'Intension del medicamente',
											// placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
											type: 'text',
											input_type: InputTypeEnum.SELECTOR,
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
											name: 'treatmentObjective',
										},
									],
							  ];

						action.payload.medications.forEach((item, index) => {
							if (index !== 0) {
								state.values[`medication${index}`] = item.medicationId;
								state.values[`grammage${index}`] = item.grammageId;
							}
						});
						state.values = {
							...state.values,
							medication1: action.payload.medications[0].medicationId,
							grammage1: action.payload.medications[0]?.grammageId,
							treatment: {
								medicalHistoryId: action.payload.medicalHistoryId,
								objetive: action.payload.treatmentObjective,
								tumorTreatment: '',
								medications: {
									medication1: {
										grammage1: action.payload.medications[0].grammage,
										medication1:
											action.payload.medications[0].medicationId,
									},
								},
								startDate: action.payload.treatmentStartDate,
								estimateFinishDate: action.payload.estimateFinishDate,
							},
						};
					}
					if (action.payload?.medications?.length > 1) {
						action.payload?.medications?.forEach((med) => {
							addTreatmentMedication(state);
						});
					}
					if (action.payload.biomarkers?.length > 0) {
						const biomarkers = state.biomarkers.fields.slice(
							0,
							state.biomarkers.fields.length - 1,
						);

						const aux = [];
						action.payload.biomarkers?.forEach((biomarker, index) => {
							aux.push([
								{
									id: index + 1,
									input_type: InputTypeEnum.BIOMARKER_ROW,
									names: ['biomarker', 'evaluation'],
									disabled: true,
								},
							]);

							state.values = {
								...state.values,
								[`biomarker${index + 1}`]:
									action.payload.biomarkers[index].id,
								[`evaluation${index + 1}`]:
									action.payload.biomarkers[index].evaluation,
							};
						});

						state.biomarkers.fields = [...aux];

						state.values = {
							...state.values,
							[`biomarker1`]: action.payload.biomarkers[0].id,
							[`evaluation1`]: action.payload.biomarkers[0].evaluation,
						};

						// console.log(state.values)
					}

					if (action.payload.setbacks?.length > 0) {
						const setbacks = state.setbacks.fields.slice(
							0,
							state.setbacks.fields.length - 1,
						);

						const setbacksToAdd = {
							id: setbacks.length + 1,
							input_type: InputTypeEnum.SETBACK_ROW,
							names: ['setBackDate', 'setBackPlace', 'diagnosisDate'],
							disabled: true,
						};

						state.setbacks.fields = [...setbacks, [setbacksToAdd]];

						state.values = {
							...state.values,
							[`setBackDate1`]: action.payload.setbacks[0].setBackDate,
							[`setBackPlace1`]: action.payload.setbacks[0].setBackPlace,
							[`diagnosisDate1`]:
								action.payload.setbacks[0].diagnosisDate,
						};
					}
					// console.log(action.payload)
					// console.log(action.payload.biomarkers ? console.log("tiene bio") : console.log("no tiene"))
					// action.payload.biomarkers && formSlice.caseReducers.addBiomarkers()
					//     console.log(action.payload.diseases ? console.log("tiene bdiseaseso") : console.log("no tiene"))
					// console.log(action.payload.otherMedications ? console.log("tiene med") : console.log("no tiene"))
					// console.log(action.payload.setbacks ? console.log("tiene setb") : console.log("no tiene"))
				},
			)
			.addMatcher(
				validateFormApi.endpoints.getCancerType.matchFulfilled,
				(state, action) => {
					state.hospital.fields = state.hospital.fields.map((row) =>
						row.map((column) => {
							if (column.name === 'cancerType') {
								let auxObj = {
									no_value: 'Seleccionar Tipo',
								};
								action.payload.forEach(
									(item) =>
										(auxObj = {
											...auxObj,
											[item.id]: CapitalizeText(item.cancerType),
										}),
								);
								return {
									...column,
									options: auxObj,
								};
							} else {
								return column;
							}
						}),
					);
				},
			)
			.addMatcher(
				validateFormApi.endpoints.getCancer.matchFulfilled,
				(state, action) => {
					state.hospital.fields = state.hospital.fields.map((row) =>
						row.map((column) => {
							if (column.name === 'organ') {
								let auxObje = {
									no_value: 'Seleccionar Tumor primario',
								};
								action.payload.forEach(
									(item) =>
										(auxObje = {
											...auxObje,
											[item.id]: CapitalizeText(item.organ),
										}),
								);
								return {
									...column,
									options: auxObje,
								};
							} else {
								return column;
							}
						}),
					);
				},
			)
			.addMatcher(
				validateFormApi.endpoints.getCancerSubType.matchFulfilled,
				(state, action) => {
					state.hospital.fields = state.hospital.fields.map((row) =>
						row.map((column) => {
							if (column.name === 'cancerSubType') {
								let auxObje = {
									no_value: 'Seleccionar Subtipo',
								};
								action.payload.forEach(
									(item, index) =>
										(auxObje = {
											...auxObje,
											[item.id]: CapitalizeText(item.cancerSubtype),
										}),
								);
								return {
									...column,
									options: auxObje,
								};
							} else {
								return column;
							}
						}),
					);
				},
			);
	},
});

export const {
	addBiomarkers,
	removeSetBacks,
	addSetBacks,
	addTreatment,
	addTreatmentMedication,
	removeBiomarker,
	removeTreatmentMedication,
	setValue,
	cleanForm,
} = formSlice.actions;
export default formSlice.reducer;
