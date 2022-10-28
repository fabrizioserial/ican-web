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
import { StyledBox } from '../common/styledCommonComponents';


export const ModalTypeEnum = {
	WEEKLY_MODAL: 'WEEKLY_MODAL',
	DAILY_MODAL: 'DAILY_MODAL',
	TREATMENT_MODAL: 'TREATMENT_MODAL',
};

export const InputTypeEnum = {
	BUTTON: 'BUTTON',
	TEXTFIELD: 'TEXTFIELD',
	SELECTOR: 'SELECTOR',
	DATEFIELD: 'DATEFIELD',
	ACTIONFIELD: 'ACTIONFIELD',
	CONDITIONAL: 'CONDITIONAL',
	BIOMARKER_ROW: 'BIOMARKER_ROW',
	RELAPSES_ROW: 'RELAPSES_ROW',
	MEDICATION_ROW: 'MEDICATION_ROW',
	ADD_SECTION: 'ADD_SECTION',
};

export const actionTypeEnum = {
	ADD_BIOMARKER: 'ADD_BIOMARKER',
	ADD_RELAPSES: 'ADD_RELAPSES',
	ADD_TREATMENT: 'ADD_TREATMENT',
	ADD_MEDICATION: 'ADD_MEDICATION',
	DELETE_MEDICATION: 'DELETE_MEDICATION',
};

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
		path: ['/home'],
		icon: (active) => <HomeIcon active={active} />,
	},
	{
		name: 'Mis Pacientes',
		path: ['/my-patients', '/profile'],
		icon: (active) => <PatientsListIcon active={active} />,
	},
	{
		name: 'Estadísticas',
		path: ['/statistics'],
		icon: (active) => <StatisticsIcon active={active} />,
	},
];

export const NavbarConfigBottom = [
	{
		name: 'Notificaciones',
		path: ['/notifications'],
		icon: (active) => <BellIcon active={active} />,
	},
	{
		name: 'Configuración',
		path: ['/settings'],
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
export const getPollStatusLabel = (type) => {
	switch (type) {
		case 'completed':
			return 'Completado';
		case 'incomplete':
			return 'Incomplete';
		case 'unstarted':
			return 'Sin Arrancar';
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
	inactive: '#5F5F5F',
	in_progress: '#EA8053',

};

export const pollTextColorStatus = {
	completed: '#1D6535',
	incomplete: '#5F5F5F',
	unstarted: '#EA8053',

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


export const pollBackgroundColorStatus = {
	completed: '#BEE8CF',
	incomplete: '#C4C4C4',
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
	console.log(type)
	return (
		<StyledBox
			css={{
				color: pollTextColorStatus[type],
				backgroundColor: pollBackgroundColorStatus[type],
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
		label: 'Fecha de Realización',
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

export const getProfileImageFromName = (name, surname, size) => {
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
