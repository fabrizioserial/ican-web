import styled, {
	css as styledComponentCss,
	CSSObject,
} from 'styled-components';

export const StyledBox = styled.div`
	${(props) => styledComponentCss`${props.css}`}
`;

export const StyledP = styled.p`
	margin: 0;
	${(props) => styledComponentCss`${props.css}`}
`;

export const StyledSpan = styled.span`
	${(props) => styledComponentCss`${props.css}`}
`;

export const StyledH1 = styled.h1`
	${(props) => styledComponentCss`${props.css}`}
`;
export const StyledH3 = styled.h3`
	${(props) => styledComponentCss`${props.css}`}
`;

export const StyledButton = styled.button`
	${(props) => styledComponentCss`${props.css}`}
`;

export const StyledInput = styled.input`
	${(props) => styledComponentCss`${props.css}`}
	&::placeholder {
		${(props) => styledComponentCss`${props.placeholderCss}`}
	}
`;

export const StyledImg = styled.img`
	${(props) => styledComponentCss`${props.css}`}
	&:first-child {
		${(props) => props.firstChild}
	}
`;

/// Custom components

export const StyledCardHome = styled(StyledBox)`
	border-radius: 20px;
	background-color: white;
	box-shadow: 0 2px 24px rgba(214, 203, 252, 0.3);
	box-sizing: border-box;
	padding: 24px 20px;
`;
