/** @jsxImportSource @emotion/react */
import MyInfoWrapper from "./component/MyInfoWrapper";
import MyPagePostWrapper from "./component/myPagePostWrapper";
import { MyPageDiv } from "./styles/MyInfoWrapperStyle";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

const MyPage = () => {
  const [username, setUsername] = useState<string>();
  useEffect(() => {
    return setUsername(undefined);
  }, []);

  return (
    <MyPageDiv>
      <MyInfoWrapper setUsername={setUsername}></MyInfoWrapper>
      <div
        css={css`
          margin-top: 3vh;
        `}
      ></div>
      {username !== undefined && <MyPagePostWrapper username={username} />}
    </MyPageDiv>
  );
};

export default MyPage;
