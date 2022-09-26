import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledButton } from './StyledButton';
import { useTheme } from 'styled-components';

const Button = ({ onClick, text, pending = false, className }) => {
	const theme = useTheme();
	return (
		<StyledButton className={className} onClick={onClick}>
			{pending ? (
				<CircularProgress color={theme.white} size="0.95rem" />
			) : (
				<span> {text} </span>
			)}
		</StyledButton>
	);
};

export default Button;
