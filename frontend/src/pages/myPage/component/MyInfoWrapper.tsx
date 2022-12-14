import {
  MyButton,
  MyButtonWrapperDiv,
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
import {
  MyFollowProfileWrapper,
  MyFollowProfileWrapperDiv,
} from "../styles/MyFollowWrapperStyle";
import { useFollowAdd, useFollowDelete } from "../../../hoc/useMutation";
import { useQueryClient } from "@tanstack/react-query";

const MyInfoWrapper = ({
  setUsername,
  username,
}: {
  setUsername: (e: string) => void;
  username: string;
}) => {
  const [isMyPage, setIsMyPage] = useState<boolean>(false);
  const userIn = useAppSelector((store) => store.userReducer.user.user_id);
  const params = useParams();
  const flag = window.location.pathname.includes("/myProfile");
  const navigate = useNavigate();
  const { data, isLoading } = useFetchUserInfo(
    flag ? userIn : parseInt(username!)
  );
  const { mutate: followAdd } = useFollowAdd();
  const { mutate: followDelete } = useFollowDelete();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (params.username && userIn === parseInt(params.username)) {
      setIsMyPage(true);
    }
  }, [params.username, userIn]);
  useEffect(() => {
    if (data && data.userInfo && data.userInfo.username) {
      setUsername(data.userInfo.username);
    }
  }, [data, data?.userInfo.username, setUsername, username, isMyPage]);
  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (!isLoading && data) {
    return (
      <MyInfoWrapperDiv>
        <MyInfoDiv>
          <div>
            {data.userInfo.proImgSrc === null ? (
              <MyFollowProfileWrapper>
                <AccountCircleIcon sx={{ fontSize: 60 }} />
              </MyFollowProfileWrapper>
            ) : (
              <MyFollowProfileWrapperDiv url={data.userInfo.proImgSrc} />
            )}
          </div>
          <div>{data.userInfo.nickname}</div>
          <div>{data.userInfo.labelName}</div>
        </MyInfoDiv>
        {/* 팔로우 구역 */}
        {!data.userInfo.followPrivate || isMyPage ? (
          <MyInfoButtonWrapperDiv>
            <MyFollowWrapper
              shortsCount={data.userInfo.shortsCount}
              userId={data.userInfo.userId}
              followerCount={data.userInfo.followerCount}
              followingCount={data.userInfo.followingCount}
            />
            {isMyPage ? (
              <MyButtonWrapperDiv>
                <MyButton
                  onClick={() => {
                    if (isMyPage) {
                      navigate("/profileModify");
                    } else {
                      if (data.follow) {
                        followDelete(data.userInfo.userId, {
                          onSuccess: () => {
                            queryClient.invalidateQueries(["userInformation"]);
                          },
                        });
                      } else if (!data.follow) {
                        followAdd(data.userInfo.userId, {
                          onSuccess: () => {
                            queryClient.invalidateQueries(["userInformation"]);
                          },
                        });
                      }
                    }
                  }}
                >
                  프로필수정
                </MyButton>
                {isMyPage && (
                  <MyButton
                    onClick={() => {
                      navigate("/myPage/bookmark");
                    }}
                  >
                    북마크
                  </MyButton>
                )}
              </MyButtonWrapperDiv>
            ) : (
              <MyButton
                onClick={() => {
                  if (isMyPage) {
                    navigate("/profileModify");
                  } else {
                    if (data.follow) {
                      followDelete(data.userInfo.userId, {
                        onSuccess: () => {
                          queryClient.invalidateQueries(["userInformation"]);
                        },
                      });
                    } else if (!data.follow) {
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
                  <> {data.follow ? `팔로우 해제` : `팔로우`}</>
                )}
              </MyButton>
            )}
          </MyInfoButtonWrapperDiv>
        ) : (
          <h2>비공개 계정입니다.</h2>
        )}

        {/* 여기 까지 */}
      </MyInfoWrapperDiv>
    );
  } else {
    return <div>에러가 났습니다...</div>;
  }
};

export default MyInfoWrapper;
