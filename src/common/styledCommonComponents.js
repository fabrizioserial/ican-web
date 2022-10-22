import styled, {
	css as styledComponentCss,
	CSSObject,
} from 'styled-components';

export const StyledBox = styled.div`
	${(props) => styledComponentCss`${props.css}`}
	&.withBoxShadow {
		box-shadow: 0 4px 24px rgba(214, 203, 252, 0.3);
	}
`;

export const StyledP = styled.p`
	margin: 0;
	color: ${(props) => props.theme.oncoBlack};
	${(props) => styledComponentCss`${props.css}`}
`;

export const StyledSpan = styled.span`
	${(props) => styledComponentCss`${props.css}`}
`;
export const StyledHr = styled.hr`
	${(props) => styledComponentCss`${props.css}`}
`;

export const StyledH1 = styled.h1`
	${(props) => styledComponentCss`${props.css}`}
`;
export const StyledH3 = styled.h3`
	${(props) => styledComponentCss`${props.css}`}
`;

export const StyledH2 = styled.h2`
	${(props) => styledComponentCss`${props.css}`}
`;
export const StyledH4 = styled.h4`
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

export const StyledSelect = styled.select`
	${(props) => styledComponentCss`${props.css}`}
`;
export const StyledOption = styled.option`
	${(props) => styledComponentCss`${props.css}`}
`;

/// Custom components

export const StyledCardHome = styled(StyledBox)`
	border-radius: 20px;
	background-color: white;
	box-shadow: 0 2px 24px rgba(214, 203, 252, 0.3);
	box-sizing: border-box;
	//padding: 24px 20px;
	${(props) => styledComponentCss`${props.css}`}
`;

export const StyledScreen = styled(StyledBox)`
	background-color: #fafbfc;
	display: flex;
	width: calc(100vw - 70px);
	min-height: 100vh;
	max-width: 100vw;
`;

export const StyledPatientsListCard = styled(StyledBox)`
	box-sizing: border-box;
	/* max-width: 306px;
     min-width: 206px;
     flex: 1;	*/
	height: 104px;
	background: #ffffff;
	box-shadow: 0px 4px 24px rgba(214, 203, 252, 0.3);
	border-radius: 15px;
`;
