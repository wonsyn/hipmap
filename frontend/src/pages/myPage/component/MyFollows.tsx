import { useEffect, useState } from "react";
import { useFetchUserFollow } from "../../../hoc/useFetch";
import {
  FollowListWrapperDiv,
  FollowSearchListDiv,
  MyFollowAddButton,
  MyFollowIdWrapper,
  MyFollowListArea,
  MyFollowListDiv,
  MyFollowSearchAreaDiv,
  MyFollowSearchBarInput,
  MyFollowSearchBarWrapper,
  MyFollowSearchTitleDiv,
} from "../styles/MyFollowWrapperStyle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFollowAdd, useFollowDelete } from "../../../hoc/useMutation";
import { useNavigate } from "react-router-dom";
import { myFindFollows } from "./myFindFollow";

const MyFollows = ({ id, select }: { id: number; select: boolean }) => {
  const {
    data: followingData,
    isLoading: followingIsLoading,
    isError: followingIsEorror,
  } = useFetchUserFollow({
    id: id,
    fetchType: "following",
  });

  const {
    data: followerData,
    isLoading: followerIsLoading,
    isError: followerIsError,
  } = useFetchUserFollow({
    id: id,
    fetchType: "follower",
  });

  // 현재 팔로잉과 팔로워가 겹치는지 여부 판단.
  const [followingCrossFollower, setFollowoingCrossFollower] =
    useState<boolean[]>();
  const { mutate: followAddMutate } = useFollowAdd();
  const { mutate: followDeleteMutate } = useFollowDelete();
  const navigator = useNavigate();
  useEffect(() => {
    if (
      !followingIsLoading &&
      !followerIsLoading &&
      followingData &&
      followerData
    ) {
      setFollowoingCrossFollower(
        myFindFollows(followingData.follow, followerData.follow)
      );
    }
  }, [followingIsLoading, followerIsLoading, followingData, followerData]);

  console.log(followingCrossFollower);

  return (
    <MyFollowListArea select={select}>
      {/* 팔로잉 영역 */}
      <FollowSearchListDiv>
        <MyFollowSearchBarWrapper>
          <MyFollowSearchAreaDiv>
            <MyFollowSearchTitleDiv>팔로잉</MyFollowSearchTitleDiv>
            <MyFollowSearchBarInput></MyFollowSearchBarInput>
          </MyFollowSearchAreaDiv>
        </MyFollowSearchBarWrapper>
        {/* 리스트 */}
        <FollowListWrapperDiv>
          {!followingIsLoading &&
            followingData &&
            followingData.follow.map((e, i) => (
              <MyFollowListDiv key={i}>
                {/* <MyFollowProfileImg
                        src={e.profile_img}
                        alt="프로필 이미지"
                      /> */}
                <ArrowBackIcon />
                <MyFollowIdWrapper
                  onClick={() => {
                    navigator("/myPage/" + e.userId);
                  }}
                >
                  {e.followUserName}
                </MyFollowIdWrapper>

                <MyFollowAddButton
                  onClick={() => {
                    followDeleteMutate(e.userId);
                  }}
                >
                  삭제
                </MyFollowAddButton>
              </MyFollowListDiv>
            ))}
        </FollowListWrapperDiv>
      </FollowSearchListDiv>
      <FollowSearchListDiv>
        <MyFollowSearchBarWrapper>
          <MyFollowSearchAreaDiv>
            <MyFollowSearchTitleDiv>팔로워</MyFollowSearchTitleDiv>
            <MyFollowSearchBarInput></MyFollowSearchBarInput>
          </MyFollowSearchAreaDiv>
        </MyFollowSearchBarWrapper>
        {/* 리스트 */}
        <FollowListWrapperDiv>
          {!followerIsLoading &&
            followerData &&
            followingData &&
            followingCrossFollower &&
            followerData.follow.map((e, i) => (
              <MyFollowListDiv key={i}>
                {/* <MyFollowProfileImg
                        src={e.profile_img}
                        alt="프로필 이미지"
                      /> */}
                <ArrowBackIcon />
                <MyFollowIdWrapper
                  onClick={() => {
                    navigator("/myPage/" + e.userId);
                  }}
                >
                  {e.followUserName}
                </MyFollowIdWrapper>
                <MyFollowAddButton
                  onClick={() => {
                    followAddMutate(e.userId);
                  }}
                  disabled={followingCrossFollower[i]}
                >
                  팔로우
                </MyFollowAddButton>
              </MyFollowListDiv>
            ))}
        </FollowListWrapperDiv>
      </FollowSearchListDiv>
    </MyFollowListArea>
  );
};

export default MyFollows;
