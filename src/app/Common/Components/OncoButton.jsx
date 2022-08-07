import styled from "styled-components";
import { accentColor, inactiveColor, primaryColor, textColor } from "../Colors";
import CircularProgress from '@material-ui/core/CircularProgress';

const OncoStyledButton = styled.button`
  width: 80%;
  color: ${primaryColor};
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${inactiveColor};
  opacity: 0.7;
  transition: 0.5s;

  & > span {
    color: black;
    transition: inherit;
    font-size: 1rem;
  }

  &:hover {
    opacity: 1;
    background-color: ${accentColor};

    & > span {
      color: ${textColor};
    }
  }
`;

const OncoButton = ({ onClick, text, pending = false }) => (
  <OncoStyledButton>
    {pending ? <CircularProgress color={textColor} size="0.95rem" style={{ color: textColor }} /> : <span> {text} </span>}
  </OncoStyledButton>
);

export default OncoButton;
