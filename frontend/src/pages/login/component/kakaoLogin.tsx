const KakaoLogin = () => {
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=http://localhost:3000/oauth/kakao&response_type=code`;

  return (
    <>
      <a href={kakaoUrl}>
        <img src="/img/kakao_login_wide.png" alt="카카오 로그인 버튼" />
      </a>
    </>
  );
};

export default KakaoLogin;
