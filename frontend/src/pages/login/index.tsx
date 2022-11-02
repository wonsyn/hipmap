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
import { useNavigate } from "react-router-dom";

const LoginWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = () => {
    dispatch(login());
    navigate("/");
  };

  return (
    <LoginFormLoginWrapper>
      <LoginFormBackgroundVideo muted loop autoPlay>
        <source src="/movie/login2.mp4" type="video/mp4"></source>
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
            margin-bottom: 5%;
            color: cyan;
          `}
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </div>
        <img src="/img/kakao_login_wide.png" alt="카카오 로그인 버튼" />
      </LoginFormLoginDiv>
    </LoginFormLoginWrapper>
  );
};

export default LoginWrapper;
