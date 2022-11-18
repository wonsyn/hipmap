import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hoc/useStoreHooks";
import { snsLogin } from "../../../store/login/loginStore";

const baseURL = process.env.REACT_APP_BACKEND_URL;
const frontURL = process.env.REACT_APP_URL + "/oauth/kakao";

const KakaoRedirect = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((store) => store.userReducer.auth);
  const KAKAO_CODE = location.search.split("=")[1];
  console.log(KAKAO_CODE);
  const { data, isLoading } = useQuery(["kakaoLogin"], async () => {
    const response = await axios.post(baseURL + "/oauth/kakao", {
      code: KAKAO_CODE,
      redirectUri: frontURL,
    });
    console.log(response.data);
    return response.data;
  });
  useEffect(() => {
    if (isAuth) {
      navigator("/main");
    }
  }, [isAuth, navigator]);
  useEffect(() => {
    if (data && !data.signed) {
      navigator("/labeling/welcome", {
        state: { email: data.email, snsSign: true },
      });
      // navigator("/signup", {
      //   state: { email: data.email, snsSign: true },
      // });
    } else if (data && data.signed) {
      console.log(data);
      const res = data.userInfo;
      dispatch(
        snsLogin({
          accessToken: data.tokens.accessToken,
          refreshToken: data.tokens.refreshToken,
          expireTime: data.tokens.expireTime,
          user_id: data.userInfo.userId,
          email: data.userInfo.email,
          labeling: res.labeling,
          nickname: res.nickname,
          isAdmin: res.role,
          username: res.username,
        })
      );
    }
  }, [data, dispatch, navigator]);
  if (isLoading) {
    return <div>로그인 처리중입니다...</div>;
  } else if (!isLoading && data) {
    if (!data.signed) {
      return <div></div>;
    } else {
      return <></>;
    }
  } else {
    return <h3>문제가 발생 했습니다....</h3>;
  }
};

export default KakaoRedirect;
