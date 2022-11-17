/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { logout } from "../../store/login/loginStore";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hoc/useStoreHooks";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import Noti from "../noti";
import { useQuery } from "@tanstack/react-query";
import http from "../../utils/http-commons";
import CircleIcon from "@mui/icons-material/Circle";

const ProfileImgWrapper = () => {
  const userNickName = useSelector(
    (store: RootState) => store.userReducer.user.nickname
  );
  const [openNoti, setOpenNoti] = useState<boolean>(false);
  const userId = useAppSelector((store) => store.userReducer.user.user_id);
  const userProfile = useAppSelector(
    (store) => store.userReducer.user.profileImg
  );
  console.log("나는 겁쟁이가 아니다.", userId);
  const {
    isLoading: notiLoading,
    data: noti,
    refetch: notiRefatch,
  } = useQuery<any>(
    ["noti"],
    async () => {
      const response = await http.get(`/notifications`);
      return response.data;
    },
    {}
  );
  console.log(noti);
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
        width: 90%;
        height: 100%;
        align-items: center;
        margin-left: auto;
        position: relative;
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
        {userProfile && userProfile.length > 0 ? (
          <img
            css={css`
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 3%;
            `}
            src={userProfile}
            alt="프로필이미지"
          />
        ) : (
          <AccountCircleIcon sx={{ fontSize: 30 }} />
        )}
        {userNickName}님
      </div>
      {openNoti && (
        <Noti
          data={noti}
          isLoading={notiLoading}
          refetch={notiRefatch}
          openHandler={() => {
            setOpenNoti((prev) => {
              return !prev;
            });
          }}
        />
      )}
      <div
        css={css`
          position: relative;
          margin-left: 3px;
          margin-right: 3px;
        `}
        onClick={() => {
          setOpenNoti((prev) => {
            return !prev;
          });
        }}
      >
        {noti && (
          <div
            css={css`
              position: absolute;
              right: 0;
              top: 0;
            `}
          >
            {noti.unreadCount > 0 && (
              <CircleIcon sx={{ fontSize: 15, color: "red" }} />
            )}
          </div>
        )}

        <NotificationsIcon />
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
