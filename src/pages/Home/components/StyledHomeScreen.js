import styled from 'styled-components';
import {
	StyledBox,
	StyledCardHome,
	StyledSpan,
} from '../../../common/styledCommonComponents';

export const HomeDateSection = styled.section`
	width: 15vw;
	height: 100vh;
	position: relative;

	& > svg {
		height: 100vh;
		width: 100%;
	}
`;

export const HomeDashboardSection = styled.section`
	width: 85vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > div {
		display: flex;
		justify-content: space-evenly;
		width: 80%;
		margin-top: 10px;
	}

	& > div > button:nth-child(2) {
		margin-left: 10px;
		margin-right: 10px;
	}

	& > aside {
		width: 80%;
		background-color: red;
	}
`;

export const DateSectionStyled = styled.div`
	position: absolute;
	display: flex;
	top: 5%;
	left: 50%;
	width: 80%;
	transform: translateX(-45%);
	color: ${(props) => props.theme.text};
	flex-direction: column;

	& > span {
		font-size: 3rem;
		width: 100%;
		word-wrap: break-word;

		@media (max-width: 1629px) {
			font-size: 2.5rem;
		}
		@media (max-width: 1280px) {
			font-size: 2rem;
		}
		@media (max-width: 1024px) {
			font-size: 1.2rem;
		}
	}

	& > span:nth-child(1) {
		padding: 0;
		transform: translateY(10%);
		font-size: 11rem;

		@media (max-width: 1629px) {
			font-size: 8rem;
		}
		@media (max-width: 1280px) {
			font-size: 7rem;
		}
		@media (max-width: 1024px) {
			font-size: 5rem;
		}
	}
`;

export const CardHomeStyled = styled(StyledCardHome)`
	width: 260px;
	height: 230px;
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 20px;

	&::after {
		content: '';
		position: absolute;
		left: 0;
		top: 50px;
		width: 100%;
		height: 1px;
		background-color: ${(props) => props.lineColor};
	}
`;

export const TreatmentsTitleBox = styled(StyledBox)`
	display: flex;
	flex-direction: row;
	height: 20px;
	padding-top: 0px;

	& > h3 {
		flex: 0.9;
		display: flex;
		flex-direction: column;
		transform: translateY(-10%);
		justify-content: center;
		margin-left: 10px;
	}

	& > div {
		flex: 0.1;
		text-align: center;
	}
`;

export const TreatmentsContainer = styled(StyledBox)`
	margin-top: 40px;
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		position: absolute;
	}
`;

export const TreatmentsLegendContainer = styled(StyledSpan)`
	font-weight: normal;
`;
