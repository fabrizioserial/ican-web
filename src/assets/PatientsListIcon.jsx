import React from 'react';
import { useTheme } from 'styled-components';
const PatientsListIcon = ({ active }) => {
	const theme = useTheme();
	const color = active ? theme.OncoPurple : theme.oncoDarkGrey;
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.4428 8.82421C13.8831 8.82421 15.0997 7.53731 15.0997 5.87231C15.0997 4.2471 13.8765 3 12.4428 3C11.0157 3 9.7859 4.267 9.79247 5.88557C9.79247 7.53731 11.0026 8.82421 12.4428 8.82421ZM4.84034 8.97678C6.09646 8.97678 7.15528 7.84909 7.15528 6.40298C7.15528 4.98342 6.0833 3.90216 4.84034 3.90216C3.59737 3.90216 2.52539 5.00332 2.53197 6.41625C2.53197 7.84909 3.59079 8.97678 4.84034 8.97678ZM1.21666 15H6.14907C5.44538 13.9851 6.20168 11.9818 7.68798 10.801C6.96456 10.33 6.02411 9.98507 4.84034 9.98507C1.90062 9.98507 0 12.1675 0 13.9652C0 14.6219 0.328827 15 1.21666 15ZM8.34563 14.9934H16.54C17.6251 14.9934 18 14.6617 18 14.0514C18 12.3466 15.8495 9.99834 12.4428 9.99834C9.02959 9.99834 6.88564 12.3466 6.88564 14.0514C6.88564 14.6617 7.2605 14.9934 8.34563 14.9934Z"
				fill={color}
			/>
		</svg>
	);
};
export default PatientsListIcon;
