import styled from 'styled-components';

export const InputFormWrapper = styled.div`
	position: relative;
	width: 80%;

	& > legend {
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}
`;

export const InputIconWrapper = styled.div`
	position: absolute;
	top: 50%;
	right: 5%;
	transform: translateY(25%);
	cursor: pointer;
`;
