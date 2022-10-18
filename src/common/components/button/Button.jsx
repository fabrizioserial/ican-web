import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledButton } from './StyledButton';
import { StyledBox } from '../../../common/styledCommonComponents'
import { useTheme } from 'styled-components';

const Button = ({ onClick, text, pending = false, className, icon }) => {
	const theme = useTheme();
	return (
		<StyledButton className={className} onClick={onClick}>
			{pending ? (
				<CircularProgress color={theme.white} size="0.95rem" />
			) :
				<StyledBox css={{
					display: 'flex',
					justifyContent: "center",
				}}
				>
					{icon && icon}
					<span> {text} </span>
				</StyledBox>
			}
		</StyledButton >
	);
};

export default Button;
