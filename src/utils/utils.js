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
