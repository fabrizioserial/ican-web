import styled from "styled-components";
import { accentColor, primaryColor } from "../../colors";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;

  & > input {
    border-radius: 7px;
    border: 1px solid ${primaryColor};
    flex: 1;
    padding: 12px;
    font-size: 1rem;
  }

  & > input:focus {
    border-color: transparent;
    outline: 2px solid ${accentColor};
  }
`;