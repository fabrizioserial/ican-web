import HomeIcon from '../assets/HomeIcon';
import React from 'react';
import PatientsListIcon from '../assets/PatientsListIcon';
import StatisticsIcon from '../assets/StatisticsIcon';

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
