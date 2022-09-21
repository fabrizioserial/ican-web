import styled from "styled-components";
import Text from "../../common/components/text/Text";

export const LoginWrapper = styled.main`
  display: flex;
  flex: 1;
  height: 100vh;
  overflow: hidden;
`;

export const LoginFormSection = styled.section`
  position: relative;
  display: flex;
  flex: 0.3;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > form {
    display: inherit;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex: 0.4;
    width: 100%;
  }
`;

export const LoginImageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex: 0.7;
`;

export const LoginText = styled(Text)`
  flex: 0.2;
  width: 80%;
  font-weight: bolder;
  font-size: 3rem;

  &::after {
    content: ".";
    font-weight: bolder;
    font-size: 3rem;
    color: ${props => props.theme.accent};
  }
`;