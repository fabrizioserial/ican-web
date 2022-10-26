import HomeIcon from '../assets/HomeIcon';
import React from 'react';
import PatientsListIcon from '../assets/PatientsListIcon';
import StatisticsIcon from '../assets/StatisticsIcon';
import BellIcon from '../assets/BellIcon';
import SettingsIcon from '../assets/SettingsIcon';
import CallIcon from '../assets/CallIcon';
import FormIcon from '../assets/FormIcon';
import { theme } from '../common/theme';

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

export const CapitalizeText = (text) => {
	if (!text) return '';
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
