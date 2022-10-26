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

	&.submit {
		width: 100%;
		color: ${(props) => props.theme.white};
		background-color: ${(props) => props.theme.OncoPurple};
		border-radius: 25px;

		span{
			font-size: 16px;
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}

	&.action {
		width: 100%;
		color: ${(props) => props.theme.OncoPurple};
		background-color: ${(props) => props.theme.white};
		border: 1px solid ${(props) => props.theme.OncoPurple};
		border-radius: 25px;
		
		span{
			color: ${(props) => props.theme.OncoPurple};
			font-size: 18px;
			padding-left: 1rem;
			padding-right: 1rem;
		}
		
		&:hover{
			background-color: ${(props) => props.theme.OncoPurple};
			span{
				color: ${(props) => props.theme.white} !important;
			}
		}
  }
`;
