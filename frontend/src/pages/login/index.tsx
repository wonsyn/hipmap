/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { login } from "../../store/login/loginStore";
import {
  LoginFormBackgroundVideo,
  LoginFormLoginButton,
  LoginFormLoginDiv,
  LoginFormLoginInput,
  LoginFormLoginWrapper,
  LogoWrapper,
} from "./styles/loginForm";
const LoginWrapper = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(login());
  };

  return (
    <LoginFormLoginWrapper>
      <LoginFormBackgroundVideo muted loop autoPlay>
        <source src="/movie/loginBackground.mp4" type="video/mp4"></source>
      </LoginFormBackgroundVideo>
      <LogoWrapper src="/img/logo.png"></LogoWrapper>
      <LoginFormLoginDiv>
        <LoginFormLoginInput id="username" placeholder="ID" />
        <LoginFormLoginInput
          id="password"
          placeholder="PASSWORD"
          type="password"
        />
        <LoginFormLoginButton onClick={loginHandler}>
          로그인
        </LoginFormLoginButton>
        <div>회원이 아니신가요?</div>
        <div
          css={css`
            margin-top: 1%;
            color: cyan;
          `}
        >
          회원가입
        </div>
      </LoginFormLoginDiv>
    </LoginFormLoginWrapper>
  );
};

export default LoginWrapper;
