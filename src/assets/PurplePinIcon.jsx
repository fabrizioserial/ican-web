const PurplePinIcon = (props) => {
	const { color = '#9357F7' } = props;
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M4.146 0.146001C4.19252 0.099599 4.24773 0.0628209 4.30847 0.0377692C4.36921 0.0127175 4.4343 -0.00011655 4.5 7.97493e-07H11.5C11.6326 7.97493e-07 11.7598 0.0526792 11.8536 0.146447C11.9473 0.240216 12 0.367393 12 0.500001C12 1.18 11.658 1.674 11.354 1.979C11.228 2.104 11.104 2.203 11 2.277V6.708L11.078 6.756C11.281 6.883 11.554 7.07 11.829 7.311C12.36 7.775 13 8.527 13 9.5C13 9.63261 12.9473 9.75979 12.8536 9.85355C12.7598 9.94732 12.6326 10 12.5 10H8.5V14.5C8.5 14.776 8.276 16 8 16C7.724 16 7.5 14.776 7.5 14.5V10H3.5C3.36739 10 3.24021 9.94732 3.14645 9.85355C3.05268 9.75979 3 9.63261 3 9.5C3 8.527 3.64 7.775 4.17 7.311C4.4287 7.08637 4.70641 6.88461 5 6.708V2.277C4.8739 2.18771 4.75548 2.08803 4.646 1.979C4.342 1.674 4 1.179 4 0.500001C3.99988 0.434296 4.01272 0.369212 4.03777 0.30847C4.06282 0.247728 4.0996 0.19252 4.146 0.146001V0.146001Z"
				fill={color}
			/>
		</svg>
	);
};

export default PurplePinIcon;
