/** @jsxImportSource @emotion/react */

import { HeaderContainer } from "../../../styles/layout/header";
import Title from "./Title";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ProfileImgWrapper from "../../profileImage";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import CommonButton from "../../button/CommonButton";

function Header() {
  const auth = useSelector((store: RootState) => store.userReducer.auth);
  const navigator = useNavigate();

  const onClick = () => {
    navigator(`/login`);
  };
  return (
    <HeaderContainer>
      <Title />
      <div
        css={css`
          margin-left: auto;
          width: 10vw;
          height: 100%;
          display: flex;
          align-items: center;
        `}
      >
        {auth ? (
          <ProfileImgWrapper />
        ) : (
          <CommonButton onClick={onClick} color="white" height="50%">
            <div>로그인</div>
          </CommonButton>
        )}
      </div>
    </HeaderContainer>
  );
}

export default Header;
