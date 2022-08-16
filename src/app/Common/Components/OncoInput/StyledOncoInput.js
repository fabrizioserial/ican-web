import styled from "styled-components";
import { accentColor, primaryColor } from "../../Colors";

export const OncoInputWrapper = styled.div`
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