import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

export const StyledCircularProgress = styled(CircularProgress)`
	&.MuiCircularProgress-root {
		color: ${(props) => props.theme.oncoGrey3};
	}
`;
