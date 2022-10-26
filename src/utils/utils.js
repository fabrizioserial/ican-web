import HomeIcon from '../assets/HomeIcon';
import React from 'react';
import PatientsListIcon from '../assets/PatientsListIcon';
import StatisticsIcon from '../assets/StatisticsIcon';
import BellIcon from '../assets/BellIcon';
import SettingsIcon from '../assets/SettingsIcon';

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
	ADD_SECTION: 'ADD_SECTION'
};

export const actionTypeEnum = {
	ADD_BIOMARKER: "ADD_BIOMARKER",
	ADD_RELAPSES: "ADD_RELAPSES",
	ADD_TREATMENT: "ADD_TREATMENT",
	ADD_MEDICATION: "ADD_MEDICATION",
	DELETE_MEDICATION: "DELETE_MEDICATION"
}

export const TNMOptions = {
	mama: {
		t: {
			T1: 'T1',
			TX: 'TX',
			T0: 'T0',
		},
		n: {
			NX: 'NX',
			N1: 'N1',
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
