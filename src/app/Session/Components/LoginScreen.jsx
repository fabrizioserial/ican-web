import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import OncoButton from "../../Common/Components/OncoButton";
import OncoText from "../../Common/Components/OncoText";
import OncoInputForm from "../../Common/Components/OncoInputForm";
import { LoginImage } from "../../Common/SvgImages";
import { accentColor } from "../../Common/Colors";
import { setLoginPending } from "../auth.slice";
import sessionWrapper from "../session.api.wrapper";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const LoginWrapper = styled.main`
  display: flex;
  flex: 1;
  height: 100vh;
  overflow: hidden;
`;

const LoginFormSection = styled.section`
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

const LoginImageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex: 0.7;
`;

const OncoLoginText = styled(OncoText)`
  flex: 0.2;
  width: 80%;
  font-weight: bolder;
  font-size: 3rem;

  &::after {
    content: ".";
    font-weight: bolder;
    font-size: 3rem;
    color: ${accentColor};
  }
`;

function LoginScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("manuelhernandez@sirius.com.ar");
  const [password, setPassword] = useState("manuel123");
  const [showPassword, setShowPassword] = useState(false);
  const { loginError, loginPending } = useSelector((state) => state.authState.ui);
  const { login } = sessionWrapper(dispatch);

  const generalState = useSelector((state) => state); // TODO dev
  console.log(generalState); // TODO dev

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(setLoginPending());
    login(email, password);
  };

  return (
    <LoginWrapper>
      <LoginFormSection>
        <OncoLoginText>Log in</OncoLoginText>
        <form onSubmit={onSubmit}>
          <OncoInputForm
            error={loginError}
            legend="Dirección de email"
            onChangeText={setEmail}
            placeholder="name@example.com"
          />
          <OncoInputForm
            error={loginError}
            legend="Contraseña"
            onChangeText={setPassword}
            placeholder="at least 8 characters"
            type={showPassword ? "text" : "password"}
            icon={showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            iconAction={() => setShowPassword(!showPassword)}
          />
          <OncoButton text="Log in" pending={loginPending} />
        </form>
      </LoginFormSection>
      <LoginImageSection>
        <LoginImage />
      </LoginImageSection>
    </LoginWrapper>
  );
}

export default LoginScreen;
