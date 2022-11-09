import { ReactEventHandler, useEffect, useRef, useState } from "react";
import { useFetchUserFollow } from "../../../hoc/useFetch";
import {
  FollowListWrapperDiv,
  FollowSearchListDiv,
  MyFollowAddButton,
  MyFollowIdWrapper,
  MyFollowListArea,
  MyFollowListDiv,
  MyFollowProfileImg,
  MyFollowProfileWrapper,
  MyFollowSearchAreaDiv,
  MyFollowSearchBarInput,
  MyFollowSearchBarWrapper,
  MyFollowSearchTitleDiv,
} from "../styles/MyFollowWrapperStyle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFollowAdd, useFollowDelete } from "../../../hoc/useMutation";
import { useNavigate } from "react-router-dom";
import { myFindFollows } from "./myFindFollow";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MyFollows = ({ id, select }: { id: number; select: boolean }) => {
  const [followingSearchWord, setFollowingSearchWord] = useState<string>();
  const [followerSearchWord, setFollowerSearchWord] = useState<string>();
  const [followingList, setFollowingList] = useState<
    {
      userId: number;
      followUserName: string;
      proImgSrc: string;
    }[]
  >();
  const [followerList, setFollowerList] = useState<
    {
      userId: number;
      followUserName: string;
      proImgSrc: string;
    }[]
  >();

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

  useEffect(() => {
    if (!followingIsLoading && followingData) {
      setFollowingList(followingData.follow);
    }
  }, [followingIsLoading, followingData]);

  useEffect(() => {
    if (followingSearchWord !== undefined && followingSearchWord.length > 0) {
      const result = followingData?.follow.filter((e) => {
        return e.followUserName.includes(followingSearchWord);
      });
      setFollowingList(result);
    } else if (followingData) {
      setFollowingList(followingData.follow);
    }
  }, [followingSearchWord, followingData]);

  useEffect(() => {
    if (!followerIsLoading && followerData) {
      setFollowerList(followerData.follow);
    }
  }, [followerIsLoading, followerData]);

  useEffect(() => {
    if (followerSearchWord !== undefined && followerSearchWord.length) {
      const result = followerData?.follow.filter((e) => {
        return e.followUserName.includes(followerSearchWord);
      });
      setFollowerList(result);
      console.log(result);
    } else if (followerData) {
      setFollowerList(followerData.follow);
    }
  }, [followerData, followerSearchWord]);

  const searchFollowingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFollowingSearchWord(e.currentTarget.value);
  };

  const searchFollowerHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFollowerSearchWord(e.currentTarget.value);
  };

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
  if (followingList) {
    console.log(followingList);
  }

  return (
    <MyFollowListArea select={select}>
      {/* 팔로잉 영역 */}
      <FollowSearchListDiv>
        <MyFollowSearchBarWrapper>
          <MyFollowSearchAreaDiv>
            <MyFollowSearchTitleDiv>팔로잉</MyFollowSearchTitleDiv>
            <MyFollowSearchBarInput
              onChange={searchFollowingHandler}
            ></MyFollowSearchBarInput>
          </MyFollowSearchAreaDiv>
        </MyFollowSearchBarWrapper>
        {/* 리스트 */}
        <FollowListWrapperDiv>
          {!followingIsLoading &&
            followingList &&
            followingList.map((e, i) => (
              <MyFollowListDiv key={i}>
                {e.proImgSrc === null ? (
                  <MyFollowProfileWrapper>
                    <AccountCircleIcon sx={{ fontSize: 60 }} />
                  </MyFollowProfileWrapper>
                ) : (
                  <MyFollowProfileImg src={e.proImgSrc} alt="프로필 이미지" />
                )}
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
            <MyFollowSearchBarInput
              onChange={searchFollowerHander}
            ></MyFollowSearchBarInput>
          </MyFollowSearchAreaDiv>
        </MyFollowSearchBarWrapper>
        {/* 리스트 */}
        <FollowListWrapperDiv>
          {!followerIsLoading &&
            followerList &&
            followingData &&
            followingCrossFollower &&
            followerList.map((e, i) => (
              <MyFollowListDiv key={i}>
                {e.proImgSrc === null ? (
                  <MyFollowProfileWrapper>
                    <AccountCircleIcon sx={{ fontSize: 60 }} />
                  </MyFollowProfileWrapper>
                ) : (
                  <MyFollowProfileImg src={e.proImgSrc} alt="프로필 이미지" />
                )}
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
