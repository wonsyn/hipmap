import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const KakaoRedirect = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  console.log(KAKAO_CODE);
  // const { data, isLoading } = useQuery(["kakaoLogin"], async () => {
  //   const response = await axios.get(
  //     baseURL + "/oauth/kakao?code=" + KAKAO_CODE
  //   );
  //   console.log(response.data);
  //   return response.data;
  // });
  // if (isLoading) {
  //   return <div>로그인 처리중입니다...</div>;
  // } else if (!isLoading && data) {
  //   return (
  //     <div>
  //       <h1>회원가입이 완료 되었습니다!</h1>
  //       <h3>대동힙지도를 사용하기 위해서는 레이블링을 진행 해야합니다.</h3>
  //       <button>레이블링 진행하러 가기!</button>
  //     </div>
  //   );
  // } else {
    return <h3>문제가 발생 했습니다....</h3>;
  // }
};

export default KakaoRedirect;
