import { accentColor, inactiveColor, primaryColor } from "../../colors";
import styled from "styled-components";

export const StyledButton = styled.button`
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
      color: white;
    }
  }
`;