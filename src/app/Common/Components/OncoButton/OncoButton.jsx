import styled from "styled-components";
import CircularProgress from '@material-ui/core/CircularProgress';

const OncoButton = ({ onClick, text, pending = false }) => (
  <OncoStyledButton>
    {pending ? <CircularProgress color={textColor} size="0.95rem" /> : <span> {text} </span>}
  </OncoStyledButton>
);

export default OncoButton;