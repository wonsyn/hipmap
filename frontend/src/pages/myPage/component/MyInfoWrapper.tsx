import {
  MyButton,
  MyInfoButtonWrapperDiv,
  MyInfoDiv,
  MyInfoWrapperDiv,
} from "../styles/MyInfoWrapperStyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MyFollowWrapper from "./MyFollowWrapper";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchUserInfo } from "../../../hoc/useFetch";
import { useAppSelector } from "../../../hoc/useStoreHooks";

const MyInfoWrapper = () => {
  const [isMyPage, setIsMyPage] = useState<boolean>(false);
  const userIn = useAppSelector((store) => store.userReducer.user.user_id);
  const params = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchUserInfo(parseInt(params.username!));
  useEffect(() => {
    if (params.username && userIn === parseInt(params.username)) {
      setIsMyPage(true);
    }
  }, [params.username, userIn]);
  useEffect(() => {
    if (!isMyPage) {
    }
  }, [isMyPage]);
  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (!isLoading && data) {
    return (
      <MyInfoWrapperDiv>
        <MyInfoDiv>
          <div>
            <AccountCircleIcon fontSize="large" />
          </div>
          <div>{data.nickname}</div>
          <div>{data.labelName}</div>
        </MyInfoDiv>
        <MyInfoButtonWrapperDiv>
          <MyFollowWrapper
            userId={data.userId}
            followerCount={data.followerCount}
            followingCount={data.followingCount}
          />
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
  } else {
    return <div>에러가 났습니다...</div>;
  }
};

export default MyInfoWrapper;
