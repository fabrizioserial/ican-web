import HomeIcon from '../assets/HomeIcon';
import React from 'react';
import PatientsListIcon from '../assets/PatientsListIcon';
import StatisticsIcon from '../assets/StatisticsIcon';
import BellIcon from "../assets/BellIcon";
import SettingsIcon from "../assets/SettingsIcon";

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
