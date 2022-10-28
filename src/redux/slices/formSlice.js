import { createSlice } from '@reduxjs/toolkit';
import UserIcon from '../../assets/UserIcon';
import CrossIcon from '../../assets/CrossIcon';
import BiomarkerIcon from '../../assets/BiomarkerIcon';
import PlusCircleIcon from '../../assets/PlusCircleIcon';
import HeartIcon from '../../assets/HeartIcon';
import StateIcon from '../../assets/StateIcon';
import TreatmentIcon from '../../assets/TreatmentIcon';
import { actionTypeEnum, InputTypeEnum } from '../../utils/utils';
import { patientApi } from '../api/patientApi';

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
                    disabled: true
                },
            ],
            [
                {
                    label: 'Email',
                    placeholder: 'Introduzca email',
                    type: 'email',
                    input_type: InputTypeEnum.TEXTFIELD,
                    name: 'email',
                    disabled: true
                },
                {
                    label: 'Género',
                    options: {
                        Masculine: 'Masculino',
                        Femenine: 'Femenino',
                    },
                    input_type: InputTypeEnum.SELECTOR,
                    name: 'sex',
                    disabled: true
                },
            ],
            [
                {
                    label: 'Numero de historial medico',
                    placeholder: 'Introduzca numero de historial medico',
                    type: 'text',
                    input_type: InputTypeEnum.TEXTFIELD,
                    name: 'medicHistoryNumber',
                    disabled: true
                },
                {
                    label: 'Fecha de carga',
                    placeholder: 'XX/XX/XX',
                    input_type: InputTypeEnum.DATEFIELD,
                    name: 'registerDate',
                    type: 'text',
                    disabled: true
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
                    label: 'Antecedentes personales',
                    options: {
                        hipertension: 'Hipertensión',
                        diabetes_insulina: 'Diabetes en tratamiento con insulina',
                        diabetes_oral: 'Diabetes en tratamiento con medicación oral',
                        epoc: 'Enfermedad pulmonar obstructiva crónica (EPOC)',
                        asma: 'Asma',
                        infarto: 'Infarto',
                        acv: 'Accidente cerebrovascular (ACV)',
                    },
                    input_type: InputTypeEnum.SELECTOR,
                    name: 'personal_history',
                },
                {},
            ],
            [
                {
                    label: 'Fecha de diagnostico',
                    placeholder: 'XX/XX/XX',
                    input_type: InputTypeEnum.DATEFIELD,
                    name: 'diagnostic_date',
                    type: 'text',
                },
                {
                    label: 'Tumor primario',
                    options: {
                        ano: 'Ano',
                        cervix: 'Cervix',
                        colon: 'Colon',
                        esofago: 'Esófago',
                        faringe: 'Faringe',
                        gastrico: 'Gástrico',
                        germinal: 'Germinal',
                        germinal_no_seminomatoso: 'Germinal no seminomatoso',
                        germinal_seminomatoso: 'Germinal seminomatoso',
                        gist: 'GIST',
                        glioblastoma: 'Glioblastoma',
                        higado: 'Hígado',
                        laringe: 'Laringe',
                        lengua: 'Lengua',
                        mama: 'Mama',
                        melanoma: 'Melanoma',
                        mesotelioma: 'Mesotelioma',
                        nasofaringe: 'Nasofaringe',
                        oseo: 'Óseo',
                        ovario: 'Ovario',
                        pancreas: 'Páncreas',
                        primario_desconocido: 'Primario desconocido',
                        prostata: 'Próstata',
                        pulmon: 'Pulmón',
                        recto: 'Recto',
                        renal: 'Renal',
                        sarcoma_de_partes_blandas: 'Sarcoma de partes blandas',
                        Sistema_nervioso_central: 'Sistema nervioso central',
                        glandula_salivales: 'Glandula salivales',
                        tumor_neuroendocrino: 'Tumor Neuroendocrino',
                        utero: 'Útero',
                        vejiga: 'Vejiga',
                        via_biliar: 'Vía Biliar',
                        merkel: 'Merkel',
                        piel_no_melanoma: 'Piel no melanoma',
                    },
                    input_type: InputTypeEnum.SELECTOR,
                    name: 'organ',
                },
            ],
            [
                {
                    label: 'Histologia',
                    options: {
                        adenocarcinoma: 'Adenocarcinoma',
                        adenoescamoso: 'Adenoescamoso',
                        carcinoma_pleomorfico: 'Carcinoma pleomorfico',
                        carcinoma_sarcomatoide: 'Carcinoma sarcomatoide',
                        celulas_grandes: 'Células grandes',
                        escamoso: 'Escamoso',
                        indiferenciado: 'Indiferenciado',
                        otro: 'Otro',
                        nos: 'Tipo NOS',
                        adenoidequistico: 'Adenoidequístico',
                        liposarcoma_bien_diferenciado:
                            'Liposarcoma bien diferenciado',
                        osteosarcoma: 'Osteosarcoma',
                        condrosarcoma: 'Condrosarcoma',
                        liposarcoma_indiferenciado: 'Liposarcoma indiferenciado',
                        basocelular: 'Basocelular',
                    },
                    input_type: InputTypeEnum.SELECTOR,
                    name: 'histology',
                },
                {},
            ],
            [
                {
                    label: 'Expresión de PDL1',
                    options: {
                        hipertension: 'Hipertensión',
                    },
                    input_type: InputTypeEnum.SELECTOR,
                    name: 'PDL1_expresion',
                },
                {
                    label: 'Estadio',
                    input_type: InputTypeEnum.CONDITIONAL,
                    name: 'estadio',
                    varToEvaluate: 'organ',
                },
            ],
            [
                {
                    label: 'T',
                    input_type: InputTypeEnum.CONDITIONAL,
                    name: 'tumor',
                    varToEvaluate: 'organ',
                },
                {
                    label: 'N',
                    input_type: InputTypeEnum.CONDITIONAL,
                    name: 'nodule',
                    varToEvaluate: 'organ',
                },
                {
                    label: 'M',
                    input_type: InputTypeEnum.CONDITIONAL,
                    name: 'metastasis',
                    varToEvaluate: 'organ',
                },
            ],
            [
                {
                    label: 'Tratamiento del tumor primario ',
                    options: {
                        cirugia: 'Cirugía',
                        radioterapia: 'Radioterapia',
                        quimioterapia: 'Quimioterapia',
                        inmunoterapia: 'Inmunoterapia',
                        inhibidor_tirosina_kinasa: 'Inhibidor tirosina kinasa',
                    },
                    input_type: InputTypeEnum.SELECTOR,
                    name: 'primary_tumor',
                },
                {
                    label: 'Tratamiento perioperatorio',
                    options: {
                        radioterapia: 'Radioterapia',
                        quimioterapia: 'Quimioterapia',
                        inmunoterapia: 'Inmunoterapia',
                        inhibidor_tirosina_kinasa: 'Inhibidor tirosina kinasa',
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
                    handleClick: () => actionTypeEnum.ADD_BIOMARKER
                }
            ],
        ],
    },
    relapses: {
        title: 'Recaidas',
        icon: <HeartIcon />,
        fields: [
            // [
            //     {
            //         label: 'Fecha de Recaida',
            //         placeholder: 'XX/XX/XX',
            //         input_type: InputTypeEnum.DATEFIELD,
            //         // name: 'load_date',
            //         type: 'text',
            //     },
            //     {
            //         label: 'Fecha del Diagnostico de la Enferemedad Metatistica',
            //         placeholder: 'XX/XX/XX',
            //         input_type: InputTypeEnum.DATEFIELD,
            //         // name: 'load_date',
            //         type: 'text',
            //     }
            // ],
            // [
            //     {
            //         label: 'Sitio de la Metastasis',
            //         type: 'text',
            //         input_type: InputTypeEnum.TEXTFIELD,
            //         // name: 'name',
            //     },
            //     {
            //         label: 'Tratamiento de la Recaida',
            //         type: 'text',
            //         input_type: InputTypeEnum.TEXTFIELD,
            //         // name: 'name',
            //     },
            // ],
            [
                {
                    label: 'Añadir Nueva Recaida',
                    type: 'text',
                    input_type: InputTypeEnum.ADD_SECTION,
                    icon: <PlusCircleIcon />,
                    handleClick: () => actionTypeEnum.ADD_RELAPSES
                }
            ],
        ],
    },
    state: {
        title: 'Estado',
        icon: <StateIcon />,
        fields: [
            [
                {
                    label: 'Números de Lineas de Tratamiento',
                    type: 'number',
                    input_type: InputTypeEnum.TEXTFIELD,
                    name: 'treatmentLine',
                },
                {
                    label: 'Progresión de la Enfermedad',
                    options: {
                        yes: 'Si',
                        no: 'No',
                    },
                    input_type: InputTypeEnum.SELECTOR,
                    name: 'progression',
                },
            ],
            [
                {
                    label: 'Fecha de Progresión',
                    placeholder: 'XX/XX/XX',
                    input_type: InputTypeEnum.DATEFIELD,
                    // name: 'load_date',
                    type: 'text',
                },

            ],
        ],
    },
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
                    handleClick: () => actionTypeEnum.ADD_TREATMENT
                }
            ],
        ],
    },
    values: undefined
};

export const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {
        addBiomarkers: (state) => {
            const biomarkers = state.biomarkers.fields.slice(0, state.biomarkers.fields.length - 1)
            const fixedRows = state.biomarkers.fields.slice(state.biomarkers.fields.length - 1, state.biomarkers.fields.length)

            const biomarkersToAdd = {
                id: biomarkers.length + 1,
                input_type: InputTypeEnum.BIOMARKER_ROW,
                names: [
                    "biomarker", "evaluation"
                ]
            }

            state.biomarkers.fields = [...biomarkers, [
                biomarkersToAdd
            ],
            ...fixedRows
            ]

            state.values.biomarkers = {
                ...state.values.biomarkers, [`biomarker${biomarkersToAdd.id}`]: { [`biomarker${biomarkersToAdd.id}`]: "", [`evaluation${biomarkersToAdd.id}`]: "" }
            }
        },
        addRelapses: (state) => {
            const relapses = state.relapses.fields.slice(0, state.relapses.fields.length - 1)
            const fixedRows = state.relapses.fields.slice(state.relapses.fields.length - 1, state.relapses.fields.length)

            const relapsesToAdd = {
                id: relapses.length + 1,
                input_type: InputTypeEnum.RELAPSES_ROW,
                names: [
                    "fecha_de_recaída", "fecha_de_diagnostico", "sitio_de_metástasis", "tratamiento_de_recaida"
                ]
            }

            state.relapses.fields = [...relapses, [
                relapsesToAdd
            ],
            ...fixedRows
            ]

            state.values = {
                ...state.values, [`fecha_de_recaída${relapsesToAdd.id}`]: "", [`fecha_de_diagnostico${relapsesToAdd.id}`]: "",
                [`sitio_de_metâstasis${relapsesToAdd.id}`]: "", [`tratamiento_de_recaida${relapsesToAdd.id}`]: "",
            }
        },
        addTreatment: (state) => {
            state.treatment.fields =
                [[
                    {
                        id: 1,
                        input_type: InputTypeEnum.MEDICATION_ROW,
                        names: [
                            "medicamento", "gramaje"
                        ]
                    },
                ],
                [
                    {
                        label: 'Añadir Medicación',
                        type: 'text',
                        input_type: InputTypeEnum.ADD_SECTION,
                        icon: <PlusCircleIcon />,
                        handleClick: () => actionTypeEnum.ADD_MEDICATION
                    }
                ],
                [
                    {
                        label: 'Fecha de Comienzo',
                        placeholder: 'XX/XX/XX',
                        input_type: InputTypeEnum.DATEFIELD,
                        name: 'start_treatment_date'
                    },
                    {
                        label: 'Fecha de Finalización',
                        placeholder: 'XX/XX/XX',
                        input_type: InputTypeEnum.DATEFIELD,
                        name: 'end_treatment_date',
                    }
                ],
                [
                    {
                        label: 'Objetivo',
                        // placeholder: 'El objetivo de este tratamiento es reducir los sintomas de caracter cutaneo presentes en el paciente..',
                        type: 'text',
                        input_type: InputTypeEnum.TEXTFIELD,
                        name: 'objetive',
                    },
                ]]

            state.values = { ...state.values, 'medicamento1': "", "gramaje1": "", "start_treatment_date": "", 'end_treatment_date': "", "objetive": "" }
        },
        addTreatmentMedication: (state) => {
            const medications = state.treatment.fields.slice(0, state.treatment.fields.length - 3)
            const fixedRows = state.treatment.fields.slice(state.treatment.fields.length - 3, state.treatment.fields.length)

            const medicationToAdd = {
                id: medications.length + 1,
                input_type: InputTypeEnum.MEDICATION_ROW,
                names: [
                    "medicamento", "gramaje"
                ]
            }

            state.treatment.fields = [...medications, [
                medicationToAdd
            ],
            ...fixedRows
            ]

            state.values = {
                ...state.values, [`medicamento${medicationToAdd.id}`]: "", [`gramaje${medicationToAdd.id}`]: ""
            }
        },
        removeBiomarker: (state, action) => {
            state.biomarkers.fields = state.biomarkers.fields?.filter(fields =>
                fields.find(item => (!item?.id || item.id !== action.payload))
            )
            let auxValues = state.values
            delete auxValues[action.payload.biomarkerId]
            delete auxValues[action.payload.evaluationId]
            state.values = auxValues
        },
        removeRelapses: (state, action) => {
            state.relapses.fields = state.relapses.fields?.filter(fields =>
                fields.find(item => (!item?.id || item.id !== action.payload))
            )
            let auxValues = state.values
            delete auxValues[action.payload.relapseDateId]
            delete auxValues[action.payload.diagnosticDate]
            delete auxValues[action.payload.metastasisSite]
            delete auxValues[action.payload.treatmentRelapse]
            state.values = auxValues
        },
        removeTreatmentMedication: (state, action) => {
            state.treatment.fields = state.treatment.fields?.filter(fields =>
                fields.find(item => (!item?.id || item.id !== action.payload))
            )
            let auxValues = state.values
            delete auxValues[action.payload.medicationId]
            delete auxValues[action.payload.grammage1]
            state.values = auxValues
        },
        setValue: (state, action) => {
            state.values = {
                ...state.values,
                [action.payload.name]: action.payload.value
            }
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            patientApi.endpoints.getPatientData.matchFulfilled,
            (state, action) => {
                state.values = { ...state.values, ...action.payload }
            },
        );
    },
});

export const {
    addBiomarkers,
    removeRelapses,
    addRelapses,
    addTreatment,
    addTreatmentMedication,
    removeBiomarker,
    removeTreatmentMedication,
    setValue,
} = formSlice.actions;
export default formSlice.reducer;
