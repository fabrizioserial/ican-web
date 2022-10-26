import UserIcon from '../assets/UserIcon';
import CrossIcon from '../assets/CrossIcon';
import BiomarkerIcon from '../assets/BiomarkerIcon';
import HeartIcon from '../assets/HeartIcon';
import StateIcon from '../assets/StateIcon';
import TreatmentIcon from '../assets/TreatmentIcon';
import HomeIcon from '../assets/HomeIcon';
import React from 'react';
import PatientsListIcon from '../assets/PatientsListIcon';
import StatisticsIcon from '../assets/StatisticsIcon';
import BellIcon from '../assets/BellIcon';
import SettingsIcon from '../assets/SettingsIcon';
import CallIcon from '../assets/CallIcon';
import FormIcon from '../assets/FormIcon';
import { theme } from '../common/theme';
import IconLung from '../assets/IconLung';
import IconSmile from '../assets/IconSmile';
import IconOral from '../assets/IconOral';
import WeeklyIcon from '../assets/WeeklyIcon';
import IconSad from '../assets/IconSad';
import IconSkin from '../assets/IconSkin';
import IconHeart from '../assets/IconHeart';
import IconStomach from '../assets/IconStomach';
import IconUnderWear from '../assets/IconUnderWear';
import IconBrain from '../assets/IconBrain';
import IconSleep from '../assets/IconSleep';
import IconMemory from '../assets/IconMemory';
import IconMiscellaneous from '../assets/IconMiscellaneous';
import IconVisual from '../assets/IconVisual';
import IconLove from '../assets/IconLove';

export const ModalTypeEnum = {
	WEEKLY_MODAL: 'WEEKLY_MODAL',
	DAILY_MODAL: 'DAILY_MODAL',
	TREATMENT_MODAL: 'TREATMENT_MODAL',
};

export const InputTypeEnum = {
	TEXTFIELD: 'TEXTFIELD',
	SELECTOR: 'SELECTOR',
	DATEFIELD: 'DATEFIELD',
	ACTIONFIELD: 'ACTIONFIELD',
	CONDITIONAL: 'CONDITIONAL',
};

export const validationFormValues = {
	name: '',
	surname: '',
	email: '',
	gender: '',
	medical_history_id: '',
	load_date: '',
	diagnostic_date: '',
	tumor: 'gastrico',
	PDL1_expresion: '',
	estadio: '',
	t: '',
	n: '',
	m: '',
};

export const FormsSqueleton = [
	{
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
				},
				{
					label: 'Apellido',
					placeholder: 'Introduzca apellido',
					type: 'text',
					input_type: InputTypeEnum.TEXTFIELD,
					name: 'surname',
				},
			],
			[
				{
					label: 'Email',
					placeholder: 'Introduzca email',
					type: 'email',
					input_type: InputTypeEnum.TEXTFIELD,
					name: 'email',
				},
				{
					label: 'Género',
					options: {
						Masculine: 'Masculino',
						Femenine: 'Femenino',
					},
					input_type: InputTypeEnum.SELECTOR,
					name: 'gender',
				},
			],
			[
				{
					label: 'Numero de historial medico',
					placeholder: 'Introduzca numero de historial medico',
					type: 'text',
					input_type: InputTypeEnum.TEXTFIELD,
					name: 'medical_history_id',
				},
				{
					label: 'Fecha de carga',
					placeholder: 'XX/XX/XX',
					input_type: InputTypeEnum.DATEFIELD,
					name: 'load_date',
					type: 'text',
				},
			],
		],
	},
	{
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
					name: 'tumor',
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
					varToEvaluate: 'tumor',
				},
			],
			[
				{
					label: 'T',
					input_type: InputTypeEnum.CONDITIONAL,
					name: 't',
					varToEvaluate: 'tumor',
				},
				{
					label: 'N',
					input_type: InputTypeEnum.CONDITIONAL,
					name: 'n',
					varToEvaluate: 'tumor',
				},
				{
					label: 'M',
					input_type: InputTypeEnum.CONDITIONAL,
					name: 'm',
					varToEvaluate: 'tumor',
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
	{
		title: 'Biomarcadores',
		icon: <BiomarkerIcon />,
		fields: [],
	},
	{
		title: 'Recaidas',
		icon: <HeartIcon />,
		fields: [],
	},
	{
		title: 'Estado',
		icon: <StateIcon />,
		fields: [],
	},
	{
		title: 'Tratamiento',
		icon: <TreatmentIcon />,
		fields: [],
	},
];

export const TNMOptions = {
	mama: {
		t: {
			TX: 'TX',
			T0: 'T0',
		},
		n: {
			NX: 'NX',
			N0: 'N0',
		},
		m: {
			MX: 'MX',
			M0: 'M0',
		},
		estadio: {
			O: 'O',
			IA: 'IA',
			IB: 'IB',
		},
	},
	prostata: {
		t: {
			TX: 'TX',
			T0: 'T0',
		},
		n: {
			NX: 'NX',
			N0: 'N0',
		},
		m: {
			MX: 'MX',
			M0: 'M0',
		},
		estadio: {
			O: 'O',
			IA: 'IA',
			IB: 'IB',
		},
	},
	pulmon: {
		t: {
			TX: 'TX',
			T0: 'T0',
		},
		n: {
			NX: 'NX',
			N0: 'N0',
		},
		m: {
			MX: 'MX',
			M0: 'M0',
		},
		estadio: {
			O: 'O',
			IA: 'IA',
			IB: 'IB',
		},
	},
	colon: {
		t: {
			TX: 'Colon TX',
			T0: 'T0',
		},
		n: {
			NX: 'Colon NX',
			N0: 'N0',
		},
		m: {
			MX: 'Colon MX',
			M0: 'M0',
		},
		estadio: {
			O: 'Colon O',
			IA: 'IA',
			IB: 'IB',
		},
	},
	cervix: {
		t: {
			TX: 'Cer TX',
			T0: 'T0',
		},
		n: {
			NX: 'Cer NX',
			N0: 'N0',
		},
		m: {
			MX: 'Cer MX',
			M0: 'M0',
		},
		estadio: {
			O: 'Cer O',
			IA: 'IA',
			IB: 'IB',
		},
	},
	gastrico: {
		t: {
			TX: 'TX',
			T0: 'T0',
		},
		n: {
			NX: 'NX',
			N0: 'N0',
		},
		m: {
			MX: 'MX',
			M0: 'M0',
		},
		estadio: {
			O: 'O',
			IA: 'IA',
			IB: 'IB',
		},
	},
	higado: {
		t: {
			TX: 'TX',
			T0: 'T0',
		},
		n: {
			NX: 'NX',
			N0: 'N0',
		},
		m: {
			MX: 'MX',
			M0: 'M0',
		},
		estadio: {
			O: 'O',
			IA: 'IA',
			IB: 'IB',
		},
	},
	utero: {
		t: {
			TX: 'TX',
			T0: 'T0',
		},
		n: {
			NX: 'NX',
			N0: 'N0',
		},
		m: {
			MX: 'MX',
			M0: 'M0',
		},
		estadio: {
			O: 'O',
			IA: 'IA',
			IB: 'IB',
		},
	},
	ovario: {
		t: {
			TX: 'TX',
			T0: 'T0',
		},
		n: {
			NX: 'NX',
			N0: 'N0',
		},
		m: {
			MX: 'MX',
			M0: 'M0',
		},
		estadio: {
			O: 'O',
			IA: 'IA',
			IB: 'IB',
		},
	},
};

const FormBuilder = {};

export const NavbarConfig = [
	{
		name: 'Home',
		path: '/home',
		icon: (active) => <HomeIcon active={active} />,
	},
	{
		name: 'Mis Pacientes',
		path: '/my-patients',
		icon: (active) => <PatientsListIcon active={active} />,
	},
	{
		name: 'Estadísticas',
		path: '/statistics',
		icon: (active) => <StatisticsIcon active={active} />,
	},
];

export const NavbarConfigBottom = [
	{
		name: 'Notificaciones',
		path: '/notifications',
		icon: (active) => <BellIcon active={active} />,
	},
	{
		name: 'Configuración',
		path: '/settings',
		icon: (active) => <SettingsIcon active={active} />,
	},
];

export const WeeklyScheduleConfig = [
	{
		dayNumber: '1',
		dayName: 'L',
		state: 'green',
		detail: 'Completo la encuesta semanal 1',
	},
	{
		dayNumber: '2',
		dayName: 'M',
		state: 'grey',
		detail: 'Nada para reportar 2',
	},
	{
		dayNumber: '3',
		dayName: 'M',
		state: 'green',
		detail: 'Completo la encuesta semanal 3',
	},
	{
		dayNumber: '4',
		dayName: 'J',
		state: 'green',
		detail: 'Completo la encuesta semanal 4',
	},
	{
		dayNumber: '5',
		dayName: 'V',
		state: 'grey',
		detail: 'Nada para reportar 5',
	},
	{
		dayNumber: '6',
		dayName: 'S',
		state: 'grey',
		detail: 'Nada para reportar 6',
	},
	{
		dayNumber: '7',
		dayName: 'D',
		state: 'grey',
		detail: 'Nada para reportar 7',
	},
];
export const PatientsListHeaderConfig = [
	{
		text: 'Pacientes Activos',
		number: '47',
		positive: false,
		pillText: '-2',
		pillDetail: '4 pacientes que se volvieron inactivos',
	},
	{
		text: 'Pacientes Totales',
		number: '55',
		positive: true,
		pillText: '+4',
		pillDetail: '4 nuevos pacientes',
	},
	{
		text: 'Pacientes en Tratamiento',
		number: '42',
		positive: true,
		pillText: '+4',
		pillDetail: '4 nuevos pacientes en tratamiento ',
	},
];

export const ProfileConfigButton = [
	{
		text: 'Formulario',
		icon: <FormIcon />,
		color: '#FFFFFF',
		textColor: theme.textGrey,
	},
	{
		text: 'Contactar',
		icon: <CallIcon />,
		color: '#5EC386',
		textColor: theme.white,
	},
];

// Tables

// Patient list

// Header

export const PatientListHeaderConst = [
	{
		label: ' ',
		sortId: '',
	},
	{
		label: 'Nro de Historial Medico',
		sortId: '',
	},
	{
		label: 'Nombre y Apellido',
		sortId: '',
	},
	{
		label: 'Tumor Primario',
		sortId: '',
	},
	{
		label: 'Tratamiento',
		sortId: '',
	},
	{
		label: 'Tratamiento de Tumor Primario',
		sortId: '',
	},
	{
		label: 'Tratamiento Perioperatorio',
		sortId: '',
	},
	{
		label: 'Estado',
		sortId: '',
	},
];

export const getUserStatusLabel = (type) => {
	switch (type) {
		case 'active':
			return 'Activo';
		case 'innactive':
			return 'Inactivo';
	}
};

export const CategoryList = {
	Respiratorio: 'Respiratorio',
	Oral: 'Oral',
	Neurologico: 'Neurologico',
	Sueño: 'Sueño',
	Sexual: 'Sexual',
	Gastrointestinal: 'Gastrointestinal',
	Cardiaco: 'Cardiaco',
	Cutaneo: 'Cutaneo',
	Ánimo: 'Ánimo',
	Visual: 'Visual',
	Memoria: 'Memoria',
	Dolor: 'Dolor',
	Genital: 'Genital',
	Miscelaneo: 'Miscelaneo',
};

export const getIconByCategory = (category) => {
	switch (category) {
		case CategoryList.Respiratorio:
			return <IconLung />;
		case CategoryList.Oral:
			return <IconOral />;
		case CategoryList.Dolor:
			return <IconSad />;
		case CategoryList.Cutaneo:
			return <IconSkin />;
		case CategoryList.Cardiaco:
			return <IconHeart />;
		case CategoryList.Gastrointestinal:
			return <IconStomach />;
		case CategoryList.Genital:
			return <IconUnderWear />;
		case CategoryList.Neurologico:
			return <IconBrain />;
		case CategoryList.Sueño:
			return <IconSleep />;
		case CategoryList.Memoria:
			return <IconMemory />;
		case CategoryList.Miscelaneo:
			return <IconMiscellaneous />;
		case CategoryList.Visual:
			return <IconVisual />;
		case CategoryList.Sexual:
			return <IconLove />;
		case CategoryList.Ánimo:
			return <IconSmile />;
		default:
			return <WeeklyIcon />;
	}
};

export const textColorStatus = {
	active: '#1D6535',
	innactive: '#5F5F5F',
	in_progress: '#EA8053',
};
export const backgroundColorStatus = {
	active: '#BEE8CF',
	innactive: '#C4C4C4',
	in_progress: '#F9E0D6',
};

export const FrequencyAnswers = [
	{
		label: 'Nunca',
		value: 0,
	},
	{
		label: 'Raramente',
		value: 1,
	},
	{
		label: 'Ocasionalmente',
		value: 2,
	},
	{
		label: 'Frecuentemente',
		value: 3,
	},
	{
		label: 'Constantemente',
		value: 4,
	},
];
export const SeverityAnswers = [
	{
		label: 'Ninguna',
		value: 0,
	},
	{
		label: 'Leve',
		value: 1,
	},
	{
		label: 'Moderado',
		value: 2,
	},
	{
		label: 'Severo',
		value: 3,
	},
	{
		label: 'Muy severo',
		value: 4,
	},
];
export const InterferenceAnswers = [
	{
		label: 'No del todo',
		value: 0,
	},
	{
		label: 'Un poco',
		value: 1,
	},
	{
		label: 'Moderada',
		value: 2,
	},
	{
		label: 'Bastante',
		value: 3,
	},
	{
		label: 'Mucho',
		value: 4,
	},
];
export const AmountAnswers = [
	{
		label: 'No del todo',
		value: 0,
	},
	{
		label: 'Un poco',
		value: 1,
	},
	{
		label: 'Un poco',
		value: 2,
	},
	{
		label: 'Bastante',
		value: 3,
	},
	{
		label: 'Mucho',
		value: 4,
	},
];
export const PresenceAnswers = [
	{
		label: 'No',
		value: 0,
	},
	{
		label: 'Si',
		value: 1,
	},
];

export const getAnswersByType = (type) => {
	switch (type) {
		case 'Severity':
			return SeverityAnswers;
		case 'Frequency':
			return FrequencyAnswers;
		case 'Interference':
			return InterferenceAnswers;
		case 'Amount':
			return AmountAnswers;
		case 'Presence':
			return PresenceAnswers;
	}
};

export const translateQuestion = (type) => {
	switch (type) {
		case 'Severity':
			return 'Severidad';
		case 'Frequency':
			return 'Frecuencia';
		case 'Interference':
			return 'Interferencia';
		case 'Amount':
			return 'Cantidad';
		case 'Presence':
			return 'Presencia';
	}
};
