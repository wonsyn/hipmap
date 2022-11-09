/** @jsxImportSource @emotion/react */
import MyInfoWrapper from "./component/MyInfoWrapper";
import MyPagePostWrapper from "./component/myPagePostWrapper";
import { MyPageDiv } from "./styles/MyInfoWrapperStyle";
import { css } from "@emotion/react";

const MyPage = () => {
  return (
    <MyPageDiv>
      <MyInfoWrapper></MyInfoWrapper>
      <div
        css={css`
          margin-top: 3vh;
        `}
      ></div>
      <MyPagePostWrapper />
    </MyPageDiv>
  );
};

export default MyPage;
