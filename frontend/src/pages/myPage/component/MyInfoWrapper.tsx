import {
  MyButton,
  MyInfoButtonWrapperDiv,
  MyInfoDiv,
  MyInfoWrapperDiv,
} from "../styles/MyInfoWrapperStyle";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MyFollowWrapper from "./MyFollowWrapper";
import { useMatch, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface userType {
  userId: number;
  username: string;
  usernickname: string;
  labeling: string;
  profileImg: string;
}

const MyInfoWrapper = () => {
  const [isMyPage, setIsMyPage] = useState<boolean>(false);
  const [user, setUser] = useState<userType>();
  const userInfo = useSelector((store: RootState) => store.userReducer.user);
  const urlMatch = useMatch("/myPage/myProfile");
  const navigate = useNavigate();
  useEffect(() => {
    if (urlMatch !== null) {
      setIsMyPage(true);
    }
  }, [urlMatch]);
  useEffect(() => {
    if (!isMyPage) {
    }
  }, [isMyPage]);

  return (
    <MyInfoWrapperDiv>
      <MyInfoDiv>
        <div>
          <AccountCircleIcon fontSize="large" />
        </div>
        <div>{userInfo.nickname}</div>
        <div>{userInfo.labeling}</div>
      </MyInfoDiv>
      <MyInfoButtonWrapperDiv>
        <MyFollowWrapper />
        <MyButton
          onClick={() => {
            if (isMyPage) {
              navigate("/profileModify");
            }
          }}
        >
          {isMyPage ? `프로필수정` : `팔로우`}
        </MyButton>
      </MyInfoButtonWrapperDiv>
    </MyInfoWrapperDiv>
  );
};

export default MyInfoWrapper;
