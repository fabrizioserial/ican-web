import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledButton } from "./StyledButton";

const Button = ({ onClick, text, pending = false }) => (
  <StyledButton>
    {pending ? <CircularProgress color={textColor} size="0.95rem" /> : <span> {text} </span>}
  </StyledButton>
);

export default Button;