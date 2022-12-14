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
import LogoutIcon from '../assets/IconLogout';
import { StyledBox } from '../common/styledCommonComponents';
import PurplePinIcon from '../assets/PurplePinIcon';

export const ModalTypeEnum = {
	WEEKLY_MODAL: 'WEEKLY_MODAL',
	DAILY_MODAL: 'DAILY_MODAL',
	TREATMENT_MODAL: 'TREATMENT_MODAL',
	CONTACT_MODAL: 'CONTACT_MODAL',
};

export const TreatmentStatusType = {
	HAS_TREATMENT: 'HAS_TREATMENT',
	FINISHING_TREATMENT: 'FINISHING_TREATMENT',
	WITHOUT_TREATMENT: 'WITHOUT_TREATMENT',
	IS_FINISHED: 'IS_FINISHED',
	IS_COMPLETED: 'IS_COMPLETED',
};

export const InputTypeEnum = {
	BUTTON: 'BUTTON',
	TEXTFIELD: 'TEXTFIELD',
	LIST: 'LIST',
	SELECTOR: 'SELECTOR',
	DATEFIELD: 'DATEFIELD',
	ACTIONFIELD: 'ACTIONFIELD',
	CONDITIONAL: 'CONDITIONAL',
	BIOMARKER_ROW: 'BIOMARKER_ROW',
	SETBACK_ROW: 'SETBACK_ROW',
	MEDICATION_ROW: 'MEDICATION_ROW',
	ADD_SECTION: 'ADD_SECTION',
	MEDICATION_TREATMENT_ROW: 'MEDICATION_TREATMENT_ROW',
};

export const actionTypeEnum = {
	ADD_BIOMARKER: 'ADD_BIOMARKER',
	ADD_SETBACK: 'ADD_SETBACK',
	ADD_TREATMENT: 'ADD_TREATMENT',
	ADD_MEDICATION_TREATMENT_MODAL: 'ADD_MEDICATION_TREATMENT_MODAL',
	ADD_MEDICATION: 'ADD_MEDICATION',
	FINISH_TREATMENT: 'FINISH_TREATMENT',
	DELETE_MEDICATION: 'DELETE_MEDICATION',
};

export const TNMOptions = {
	tumor: {
		no_value: 'Seleccione T',
		TX: 'TX',
		T0: 'T0',
		T1: 'T1',
		T1a: 'T1a',
		T1ami: 'T1ami',
		T1b: 'T1b',
		T1c: 'T1c',
		T1aac: 'T1aac',
		T1aab: 'T1aab',
		T2: 'T2',
		T2a: 'T2a',
		T2b: 'T2b',
		T3: 'T3',
		T4: 'T4',
		T4a: 'T4a',
		T4b: 'T4b',
		T4c: 'T4c',
		T4d: 'T4d',
		Tis: 'Tis',
		TisDCIS: 'TisDCIS',
		TisCLIS: 'TisCLIS',
		TisPaget: 'TisPaget',
	},
	nodule: {
		no_value: 'Seleccione N',
		N0: 'N0',
		N0i: 'N0i',
		N1: 'N1',
		N1a: 'N1a',
		N1b: 'N1b',
		N1c: 'N1c',
		N2: 'N2',
		N2a: 'N2a',
		N2b: 'N2b',
		N3: 'N3',
		N3a: 'N3a',
		N3b: 'N3b',
		N3c: 'N3c',
	},
	metastasis: {
		no_value: 'Seleccione M',
		M0: 'M0',
		cM0Mic: 'cM0Mic',
		M1: 'M1',
		M1a: 'M1a',
		M1b: 'M1b',
		M1c: 'M1c',
		cM1: 'cM1',
		PM1: 'PM1',
	},
	cancerStage: {
		no_value: 'Seleccione Estadio',
		Estadio0: 'Estadio0',
		EstadioIA: 'EstadioIA',
		EstadioIA1: 'EstadioIA1',
		EstadioIA2: 'EstadioIA2',
		EstadioIA3: 'EstadioIA3',
		EstadioIB: 'EstadioIB',
		EstadioIIA: 'EstadioIIA',
		EstadioIIB: 'EstadioIIB',
		EstadioIIIA: 'EstadioIIIA',
		EstadioIIIB: 'EstadioIIIB',
		EstadioIIIC: 'EstadioIIIC',
		EstadioIV: 'EstadioIV',
		EstadioIVA: 'EstadioIVA',
		EstadioIVB: 'EstadioIVB',
		EstadioIVC: 'EstadioIVC',
	},
};

const FormBuilder = {};

export const NavbarConfig = [
	{
		name: 'Home',
		path: ['/home'],
		icon: (active) => <HomeIcon active={active} />,
	},
	{
		name: 'Mis Pacientes',
		path: ['/my-patients', '/profile', '/validate-patient'],
		icon: (active) => <PatientsListIcon active={active} />,
	},
];

export const NavbarConfigBottom = [
	{
		name: 'Cerrar sesi??n',
		path: ['/login'],
		icon: (active) => <LogoutIcon active={active} />,
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

export const ProfileConfigButtonType = {
	FORM: 'form',
	CONTACT: 'contact',
	PIN: 'PIN',
};

export const ProfileConfigButton = [
	{
		text: 'Formulario',
		icon: <FormIcon />,
		color: '#FFFFFF',
		type: ProfileConfigButtonType.FORM,
		textColor: theme.textGrey,
		border: '1px solid rgba(235, 224, 253, 0.24)',
	},
	{
		text: 'Contactar',
		icon: <CallIcon />,
		color: '#5EC386',
		type: ProfileConfigButtonType.CONTACT,
		textColor: theme.white,
		border: '1px solid rgba(235, 224, 253, 0.24)',
	},
	{
		text: 'Fijar',
		color: '#FFFFFF',
		type: ProfileConfigButtonType.PIN,
		textColor: '#9357F7',
		border: '1px solid #9357F7',
	},
];

// Tables

// Patient list

// Header

export const PatientListHeaderConst = [
	{
		label: ' ',
		sortId: '',
		width: '5%',
		minWidth: '82px',
		maxWidth: '82px',
		css: {
			color: ' #9357f7 !important',
			fontSize: '12px',
			paddingLeft: '30px',
		},
	},
	{
		label: 'Nro de Historial Medico',
		sortId: 'medicHistoryNumber',
		width: '12%',
		minWidth: '147.78px',
		maxWidth: '147.78px',
		css: { color: ' #9357f7 !important', fontSize: '12px' },
	},
	{
		label: 'Nombre y Apellido',
		sortId: 'name',
		width: '14%',
		minWidth: '169.95px',
		maxWidth: '169.95px',
		css: { color: ' #9357f7 !important', fontSize: '12px' },
	},
	{
		label: 'DNI',
		sortId: '',
		width: '14%',
		minWidth: '169.95px',
		maxWidth: '169.95px',
		css: { color: ' #9357f7 !important', fontSize: '12px' },
	},

	{
		label: 'Tumor Primario',
		sortId: 'organ',
		width: '10%',
		minWidth: '125.62px',
		maxWidth: '125.62px',
		css: { color: ' #9357f7 !important', fontSize: '12px' },
	},
	{
		label: 'Tratamiento',
		sortId: 'treatment',
		width: '26%',
		minWidth: '303.84px',
		maxWidth: '303.84px',
		css: { color: ' #9357f7 !important', fontSize: '12px' },
	},
	{
		label: 'Tratamiento de Tumor Primario',
		sortId: 'tumorTreatment',
		width: '14%',
		minWidth: '170.83px',
		maxWidth: '170.83px',
		css: { color: ' #9357f7 !important', fontSize: '12px' },
	},
	{
		label: 'Estado',
		sortId: 'status',
		width: '5%',
		minWidth: '120.02px',
		maxWidth: '120.02px',
		css: {
			color: ' #9357f7 !important',
			fontSize: '12px',
			paddingRight: '30px',
		},
	},
];

export const getUserStatusLabel = (type) => {
	switch (type) {
		case 'Accepted':
			return 'Activo';
		case 'innactive':
			return 'Inactivo';
		case 'Pending':
			return 'En espera';
	}
};
export const getPollStatusLabel = (type) => {
	switch (type) {
		case 'Completed':
			return 'Completado';
		case 'Incomplete':
			return 'Incompleto';
		case 'Empty':
			return 'Sin Arrancar';
	}
};

export const CategoryList = {
	Respiratorio: 'Respiratorio',
	Oral: 'Oral',
	Neurologico: 'Neurologico',
	Sue??o: 'Sue??o',
	Sexual: 'Sexual',
	Gastrointestinal: 'Gastrointestinal',
	Cardiaco: 'Cardiaco',
	Cutaneo: 'Cutaneo',
	??nimo: '??nimo',
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
		case CategoryList.Sue??o:
			return <IconSleep />;
		case CategoryList.Memoria:
			return <IconMemory />;
		case CategoryList.Miscelaneo:
			return <IconMiscellaneous />;
		case CategoryList.Visual:
			return <IconVisual />;
		case CategoryList.Sexual:
			return <IconLove />;
		case CategoryList.??nimo:
			return <IconSmile />;
		default:
			return <WeeklyIcon />;
	}
};

export const textColorStatus = {
	Accepted: '#1D6535',
	inactive: '#5784F7',
	Pending: '#EA8053',
};

export const pollTextColorStatus = {
	Completed: '#1D6535',
	Incomplete: '#EA8053',
	Empty: '#5784F7',
};

export const backgroundPollColorStatus = {
	Completed: '#BEE8CF',
	Empty: '#DFE8FF',
	Incomplete: '#F9E0D6',
};

export const backgroundColorStatus = {
	Accepted: '#BEE8CF',
	innactive: '#DFE8FF',
	Pending: '#F9E0D6',
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

export const pollBackgroundColorStatus = {
	completed: '#BEE8CF',
	incomplete: '#DFE8FF',
	unstarted: '#F9E0D6',
};

export const renderStatusPill = (type) => {
	return (
		<StyledBox
			css={{
				color: textColorStatus[type],
				backgroundColor: backgroundColorStatus[type],
				borderRadius: '10px',
				width: '74px',
				height: '24px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{getUserStatusLabel(type)}
		</StyledBox>
	);
};

export const renderPollPill = (type) => {
	return (
		<StyledBox
			css={{
				color: pollTextColorStatus[type],
				backgroundColor: backgroundPollColorStatus[type],
				borderRadius: '10px',
				width: '120px',
				height: '24px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{getPollStatusLabel(type)}
		</StyledBox>
	);
};

export const PollResultsHeaderConst = [
	{
		label: ' ',
		sortId: '',
	},
	{
		label: 'Fecha de Realizaci??n',
		sortId: '',
	},
	{
		label: 'Estado',
		sortId: '',
	},
];
export const CapitalizeText = (text) => {
	if (!text) return '';
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const getProfileImageFromName = (name, surname, size, withMargin) => {
	const sumOfChars = (name.length + surname.length) % 5;
	let color = '';
	switch (sumOfChars) {
		case 0:
			color = '106,209,141';
			break;
		case 1:
			color = '236,164,133';
			break;
		case 2:
			color = '205,125,227';
			break;
		case 3:
			color = '172,122,255';
			break;
		case 4:
			color = '87,132,247';
			break;
		default:
			color = '172,122,255';
			break;
	}
	const letters = [name, surname]
		.map((word) => word.charAt(0))
		.slice(0, 2)
		.map((w) => w);

	return (
		<StyledBox
			css={{
				margin: withMargin ? 2 : '0',
				width: size.width,
				height: size.height,
				borderRadius: '50px',
				backgroundColor: `rgb(${color},0.8)`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				textTransform: 'uppercase',
				fontSize: size?.fontSize ?? '16px',
			}}
		>
			{letters}
		</StyledBox>
	);
};

export const parseDataWithYear = (dayItem) => {
	return parseData(dayItem) + ' de ' + new Date(dayItem).getUTCFullYear();
};

export const parseData = (DayItem) => {
	let dayObject = new Date(DayItem);
	let day =
		dayObject.getUTCDate().toString() +
		' de ' +
		getMonth(dayObject.getUTCMonth() + 1);
	return day;
};

const getMonth = (number) => {
	if (number === 1) return 'Enero';
	if (number === 2) return 'Febrero';
	if (number === 3) return 'Marzo';
	if (number === 4) return 'April';
	if (number === 5) return 'Mayo';
	if (number === 6) return 'Junio';
	if (number === 7) return 'Julio';
	if (number === 8) return 'Agosto';
	if (number === 9) return 'Septiembre';
	if (number === 10) return 'Octubre';
	if (number === 11) return 'Noviembre';
	if (number === 12) return 'Diciembre';
};

export const EndpointsListType = {
	ORDEN: 'ORDEN',
	FILTER: 'FILTER',
	TABLE: 'TABLE',
};
