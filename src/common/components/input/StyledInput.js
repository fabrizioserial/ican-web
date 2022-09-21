import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;

  & > input {
    border-radius: 7px;
    border: 1px solid ${props => props.theme.primary};
    flex: 1;
    padding: 12px;
    font-size: 1rem;
  }

  & > input:focus {
    border-color: transparent;
    outline: 2px solid ${props => props.theme.accent};
  }
`;