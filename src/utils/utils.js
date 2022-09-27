import UserIcon from '../assets/UserIcon';
import CrossIcon from '../assets/CrossIcon';
import BiomarkerIcon from '../assets/BiomarkerIcon';
import HeartIcon from '../assets/HeartIcon';
import StateIcon from '../assets/StateIcon';
import TreatmentIcon from '../assets/TreatmentIcon';

export const FormHeaders = {
	'patient-data': {
		title: 'Datos del paciente',
		icon: <UserIcon />,
		fields: [],
	},
	'medic-data': {
		title: 'Datos Hospitalario',
		icon: <CrossIcon />,
		fields: [],
	},
	biomarker: {
		title: 'Biomarcadores',
		icon: <BiomarkerIcon />,
		fields: [],
	},
	recaidas: {
		title: 'Recaidas',
		icon: <HeartIcon />,
		fields: [],
	},
	state: {
		title: 'Estado',
		icon: <StateIcon />,
		fields: [],
	},
	treatment: {
		title: 'Tratamiento',
		icon: <TreatmentIcon />,
		fields: [],
	},
};
