/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  LoginFormBackgroundVideo,
  LoginFormLoginButton,
  LoginFormLoginDiv,
  LoginFormLoginInput,
  LoginFormLoginWrapper,
  LogoWrapper,
} from "./styles/loginForm";
import { useNavigate } from "react-router-dom";
import KakaoLogin from "./component/kakaoLogin";
import { useAppDispatch, useAppSelector } from "../../hoc/useStoreHooks";
import { fetchLoginThunk } from "../../store/login/loginStore";
import { useEffect, useState } from "react";

const LoginWrapper = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [correctLogin, setCorrectLogin] = useState<boolean>(false);

  const auth = useAppSelector((store) => store.userReducer.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginHandler = () => {
    if (username && password) {
      dispatch(fetchLoginThunk({ id: username, password: password }))
        .unwrap()
        .then((res) => {
          console.log("rest", res);
        })
        .catch((e) => {
          console.log("rest", e);
          setCorrectLogin(true);
        });
    }
  };

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth, navigate]);
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  return (
    <LoginFormLoginWrapper>
      <LoginFormBackgroundVideo muted loop autoPlay>
        <source src="/movie/login2.mp4" type="video/mp4"></source>
      </LoginFormBackgroundVideo>
      <LogoWrapper src="/img/logo.png"></LogoWrapper>
      <LoginFormLoginDiv>
        <LoginFormLoginInput
          id="username"
          placeholder="ID"
          onChange={onChangeId}
        />
        <LoginFormLoginInput
          id="password"
          placeholder="PASSWORD"
          type="password"
          onChange={onChangePassword}
        />
        {correctLogin && <div>아이디 혹은 비밀번호가 틀렸습니다.</div>}
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
        <KakaoLogin />
      </LoginFormLoginDiv>
    </LoginFormLoginWrapper>
  );
};

export default LoginWrapper;
