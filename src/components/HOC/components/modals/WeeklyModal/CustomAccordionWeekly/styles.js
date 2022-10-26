import styled from 'styled-components';
import { Accordion } from '@mui/material';

export const StyledCustomAccordion = styled(Accordion)`
	min-height: 60px;
	&.MuiAccordion-root {
		box-shadow: none !important;
	}
`;
