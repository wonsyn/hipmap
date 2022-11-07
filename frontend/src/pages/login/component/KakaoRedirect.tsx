import { useLocation } from "react-router-dom";

const KakaoRedirect = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1];
  console.log(KAKAO_CODE);
  return <div>로그인 처리중입니다...</div>;
};

export default KakaoRedirect;
