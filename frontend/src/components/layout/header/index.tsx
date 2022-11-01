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
      <div
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          max-width: 1024px;
          /* justify-content: center; */
          align-items: center;
        `}
      >
        <Title />
        <div
          css={css`
            margin-left: auto;
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: end;
            margin-right: 5%;
            @media (min-width: 700px) {
              font-size: 0.8rem;
              width: 35%;
              margin-right: 2%;
            }
            @media (min-width: 1024px) {
              font-size: 1.1rem;
              width: 30%;
              margin-right: 2%;
            }
            font-size: 0.6rem;
          `}
        >
          {auth ? (
            <ProfileImgWrapper />
          ) : (
            <CommonButton
              onClick={onClick}
              color="white"
              width="20vw"
              height="75%"
            >
              <div>로그인</div>
            </CommonButton>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
