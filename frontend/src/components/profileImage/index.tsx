/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { logout } from "../../store/login/loginStore";
import { useNavigate } from "react-router-dom";

const ProfileImgWrapper = () => {
  const userNickName = useSelector(
    (store: RootState) => store.userReducer.user.nickname
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const myPageHandler = () => {
    navigate("/myPage/myProfile");
  };

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
      `}
      onClick={myPageHandler}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-right: center;
        `}
      >
        <AccountCircleIcon /> {userNickName}님
      </div>
      <div
        css={css`
          display: flex;
          margin-left: auto;
        `}
        onClick={logoutHandler}
      >
        로그아웃
      </div>
    </div>
  );
};

export default ProfileImgWrapper;
