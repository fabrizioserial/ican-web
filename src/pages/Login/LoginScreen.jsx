import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LoginImage } from "../../utils/SvgImages";
import { LoginFormSection, LoginImageSection, LoginWrapper, LoginText } from "./StyledLoginScreen";
import Button from "../../common/components/button/Button";
import InputForm from "../../common/components/inputForm/InputForm";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../redux/api/sessionApi"
import classNames from "classnames";


function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, data] = useLoginMutation();

  const accessToken = useSelector((state) => state.authSlice.accessToken);
  const navigate = useNavigate()
  
  useEffect(() => {
    if (accessToken) {
      navigate("/home")
    }
  }, [accessToken])

  console.log(data)

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email: email.trim(), password: password.trim() })
  };

  return (
    <LoginWrapper>
      <LoginFormSection>
        <LoginText>Log in</LoginText>
        <form onSubmit={onSubmit}>
          <InputForm
            legend="Dirección de email"
            onChangeText={setEmail}
            placeholder="name@example.com"
          />
          <InputForm
            legend="Contraseña"
            onChangeText={setPassword}
            placeholder="at least 8 characters"
            Icon={() => (
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "ocultar" : "ver"}
              </span>
            )} // TODO IconType definition
            type={showPassword ? "text" : "password"}
          />
          <Button  className={classNames({"inactive": (email.length === 0 || password.length === 0)})} text="Log in" /> {/* TODO ADD PENDING PARAM  */}
        </form>
      </LoginFormSection>
      <LoginImageSection>
        <LoginImage />
      </LoginImageSection>
    </LoginWrapper>
  );
}

export default LoginScreen;
