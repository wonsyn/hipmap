/** @jsxImportSource @emotion/react */
import MyInfoWrapper from "./component/MyInfoWrapper";
import MyPagePostWrapper from "./component/myPagePostWrapper";
import { MyPageDiv } from "./styles/MyInfoWrapperStyle";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hoc/useStoreHooks";

const MyPage = () => {
  const [username, setUsername] = useState<string>();
  const params = useParams();
  const isAuth = useAppSelector((store) => store.userReducer.auth);
  if (window.location.pathname.includes("myProfile")) {
    
  }
  useEffect(() => {
    return setUsername(undefined);
  }, []);
  console.log(username);
  if (isAuth) {
    return (
      <MyPageDiv>
        {params && params.username && (
          <MyInfoWrapper
            setUsername={setUsername}
            username={params.username}
          ></MyInfoWrapper>
        )}

        <div
          css={css`
            margin-top: 3vh;
          `}
        ></div>
        {username !== undefined && <MyPagePostWrapper username={username} />}
      </MyPageDiv>
    );
  } else {
    return <div>로딩중...</div>;
  }
};

export default MyPage;
