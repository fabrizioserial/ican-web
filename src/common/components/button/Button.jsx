import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledButton } from './StyledButton';
import { StyledBox } from '../../../common/styledCommonComponents';
import { useTheme } from 'styled-components';

const Button = ({ onClick, css, text, pending = false, icon }) => {
	const theme = useTheme();

	return (
		<StyledButton
			onClick={onClick}
			css={
				css || {
					display: 'flex',
					justifyContent: 'center',
				}
			}
		>
			{pending ? (
				<CircularProgress color={theme.white} size="0.95rem" />
			) : (
				<StyledBox>
					{icon && icon}
					<span> {text} </span>
				</StyledBox>
			)}
		</StyledButton>
	);
};

export default Button;
