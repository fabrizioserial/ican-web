import styled from 'styled-components';

const ComponentWrapperStyled = styled.div`
	position: relative;
	background-color: ${(props) => props.theme.itemBackground};
	width: ${(props) => props.width};
	border: none;
	border-radius: 7px 0 0 7px;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 20px;
		height: 100%;
		border-radius: 0 7px 7px 0;
		background-color: ${(props) => props.theme.accent};
	}
`;

export default ComponentWrapperStyled;
