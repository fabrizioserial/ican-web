import CircularProgress from '@material-ui/core/CircularProgress';
import { OncoStyledButton } from "./StyledOncoButton";

const OncoButton = ({ onClick, text, pending = false }) => (
  <OncoStyledButton>
    {pending ? <CircularProgress color={textColor} size="0.95rem" /> : <span> {text} </span>}
  </OncoStyledButton>
);

export default OncoButton;