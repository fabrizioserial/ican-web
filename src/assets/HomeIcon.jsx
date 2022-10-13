import React from 'react';
import { useTheme } from 'styled-components';
const HomeIcon = ({ active }) => {
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
				d="M0 8.55436C0 8.94301 0.294358 9.27934 0.765331 9.27934C0.993459 9.27934 1.19951 9.15228 1.38348 9.0028L8.68356 2.77695C8.88962 2.59757 9.1251 2.59757 9.33115 2.77695L16.6239 9.0028C16.8005 9.15228 17.0065 9.27934 17.2347 9.27934C17.6688 9.27934 18 9.0028 18 8.56931C18 8.31519 17.9043 8.11339 17.713 7.94897L15.6451 6.1851V3.07591C15.6451 2.73958 15.4317 2.5303 15.1006 2.5303H14.085C13.7612 2.5303 13.5405 2.73958 13.5405 3.07591V4.38386L10.0523 1.4092C9.4121 0.863599 8.60262 0.863599 7.96239 1.4092L0.294358 7.94897C0.0956664 8.11339 0 8.33762 0 8.55436ZM2.39166 15.2735C2.39166 16.3498 3.05397 17 4.15045 17H13.8569C14.946 17 15.6157 16.3498 15.6157 15.2735V9.59325L9.45625 4.35396C9.16926 4.09985 8.82338 4.10732 8.54374 4.35396L2.39166 9.59325V15.2735ZM10.9354 15.5949H7.07195V10.8115C7.07195 10.4602 7.30008 10.236 7.64595 10.236H10.3688C10.7146 10.236 10.9354 10.4602 10.9354 10.8115V15.5949Z"
				fill={color}
			/>
		</svg>
	);
};
export default HomeIcon;