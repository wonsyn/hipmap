import { useState } from "react";
import { useFetchUserFollow } from "../../../hoc/useFetch";
import {
  FollowListWrapperDiv,
  FollowSearchListDiv,
  MyFollowAddButton,
  MyFollowIdWrapper,
  MyFollowListDiv,
  MyFollowSearchAreaDiv,
  MyFollowSearchBarInput,
  MyFollowSearchBarWrapper,
  MyFollowSearchTitleDiv,
} from "../styles/MyFollowWrapperStyle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface followInterface {
  message: string;
  username: string;
  follow: {
    user_id: number;
    followUserName: string;
    profile_img: string;
  }[];
}

const MyFollows = ({
  id,
  fetchType,
  follow,
}: {
  id: number;
  fetchType: string;
  follow: boolean;
}) => {
  const [followList, setFollowList] = useState<followInterface["follow"]>();
  const [followerList, setFollowerList] = useState<followInterface["follow"]>();
  const {
    data: followingData,
    isLoading: followingIsLoading,
    isError: followingIsEorror,
  } = useFetchUserFollow({
    id: id,
    fetchType,
  });

  const {
    data: followerData,
    isLoading: followerIsLoading,
    isError: followerIsError,
  } = useFetchUserFollow({
    id: id,
    fetchType,
  });

  return (
    <MyFollowListArea select={follow}>
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
            followerList &&
            followerList.map((e, i) => (
              <MyFollowListDiv key={i}>
                {/* <MyFollowProfileImg
                        src={e.profile_img}
                        alt="프로필 이미지"
                      /> */}
                <ArrowBackIcon />
                <MyFollowIdWrapper>{e.followUserName}</MyFollowIdWrapper>
                <MyFollowAddButton>팔로우</MyFollowAddButton>
              </MyFollowListDiv>
            ))}
        </FollowListWrapperDiv>
      </FollowSearchListDiv>

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
            followList &&
            followList.map((e, i) => (
              <MyFollowListDiv key={i}>
                {/* <MyFollowProfileImg
                        src={e.profile_img}
                        alt="프로필 이미지"
                      /> */}
                <ArrowBackIcon />
                <MyFollowIdWrapper>{e.followUserName}</MyFollowIdWrapper>

                <MyFollowAddButton>삭제</MyFollowAddButton>
              </MyFollowListDiv>
            ))}
        </FollowListWrapperDiv>
      </FollowSearchListDiv>
    </MyFollowListArea>
  );
};

export default MyFollows;
