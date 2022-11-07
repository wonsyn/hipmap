/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { logout } from "../../store/login/loginStore";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hoc/useStoreHooks";

const ProfileImgWrapper = () => {
  const userNickName = useSelector(
    (store: RootState) => store.userReducer.user.nickname
  );
  const userId = useAppSelector((store) => store.userReducer.user.user_id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
  };

  const myPageHandler = () => {
    navigate("/myProfile/" + userId);
  };

  return (
    <div
      css={css`
        display: flex;
        width: 70%;
        height: 100%;
        align-items: center;
        margin-left: auto;
      `}
    >
      <div
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: end;
        `}
        onClick={myPageHandler}
      >
        <AccountCircleIcon /> {userNickName}님
      </div>
      <img
        css={css`
          display: flex;
          width: 30%;
          max-width: 40px;
          margin-left: auto;
          align-items: center;
        `}
        onClick={logoutHandler}
        src="/img/logout.png"
        alt=""
      ></img>
    </div>
  );
};

export default ProfileImgWrapper;
