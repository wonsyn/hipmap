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
import { useFetchPostCount, useFetchUserInfo } from "../../../hoc/useFetch";
import { useAppSelector } from "../../../hoc/useStoreHooks";
import {
  MyFollowProfileImg,
  MyFollowProfileWrapper,
} from "../styles/MyFollowWrapperStyle";
import { useFollowAdd, useFollowDelete } from "../../../hoc/useMutation";
import { useQueryClient } from "@tanstack/react-query";

const MyInfoWrapper = () => {
  const [isMyPage, setIsMyPage] = useState<boolean>(false);
  const userIn = useAppSelector((store) => store.userReducer.user.user_id);
  const params = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchUserInfo(parseInt(params.username!));
  const { mutate: followAdd } = useFollowAdd();
  const { mutate: followDelete } = useFollowDelete();
  // const { mutate: postCount } = useFetchPostCount();
  const queryClient = useQueryClient();
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
    console.log(data);
    return (
      <MyInfoWrapperDiv>
        <MyInfoDiv>
          <div>
            {data.userInfo.proImgSrc === null ? (
              <MyFollowProfileWrapper>
                <AccountCircleIcon sx={{ fontSize: 60 }} />
              </MyFollowProfileWrapper>
            ) : (
              <MyFollowProfileImg
                src={data.userInfo.proImgSrc}
                alt="프로필 이미지"
              />
            )}
          </div>
          <div>{data.userInfo.nickname}</div>
          <div>{data.userInfo.labelName}</div>
        </MyInfoDiv>
        <MyInfoButtonWrapperDiv>
          <MyFollowWrapper
            shortsCount={data.userInfo.shortsCount}
            userId={data.userInfo.userId}
            followerCount={data.userInfo.followerCount}
            followingCount={data.userInfo.followingCount}
          />
          <MyButton
            onClick={() => {
              if (isMyPage) {
                navigate("/profileModify");
              } else {
                if (data.isFollow) {
                  followDelete(data.userInfo.userId, {
                    onSuccess: () => {
                      queryClient.invalidateQueries(["userInformation"]);
                    },
                  });
                } else if (!data.isFollow) {
                  followAdd(data.userInfo.userId, {
                    onSuccess: () => {
                      queryClient.invalidateQueries(["userInformation"]);
                    },
                  });
                }
              }
            }}
          >
            {isMyPage ? (
              `프로필수정`
            ) : (
              <> {data.isFollow ? `팔로우 해제` : `팔로우`}</>
            )}
          </MyButton>
        </MyInfoButtonWrapperDiv>
      </MyInfoWrapperDiv>
    );
  } else {
    return <div>에러가 났습니다...</div>;
  }
};

export default MyInfoWrapper;
