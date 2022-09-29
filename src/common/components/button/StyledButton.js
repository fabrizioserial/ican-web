import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 80%;
	color: ${(props) => props.theme.white};
	padding: 1rem;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	background-color: ${(props) => props.theme.OncoPurple};
	opacity: 0.7;
	transition: 0.5s;

	& > span {
		color: ${(props) => props.theme.white};
		transition: inherit;
		font-size: 1rem;
	}

	&:hover {
		cursor: pointer;
	}

	&.inactive {
		background-color: ${(props) => props.theme.inactive};
	}
`;
