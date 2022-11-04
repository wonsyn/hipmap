import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  FollowListWrapperDiv,
  FollowSearchListDiv,
  MyFollowAddButton,
  MyFollowBackButton,
  MyFollowIdWrapper,
  MyFollowListArea,
  MyFollowListDiv,
  MyFollowListWrapperDiv,
  MyFollowProfileImg,
  MyFollowSearchAreaDiv,
  MyFollowSearchBarInput,
  MyFollowSearchBarWrapper,
  MyFollowSearchTitleDiv,
  MyFollowTab,
  MyFollowTabBorder,
  MyFollowTabs,
} from "../styles/MyFollowWrapperStyle";
import { useFetchUserFollow } from "../../../hoc/useFetch";
import MyFollows from "./MyFollows";

const MyFollowList = () => {
  // 유저 아이디 넣기
  const location = useLocation();

  const [follow, setFollow] = useState<boolean | undefined>(undefined);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const state = location.state as { click: string };
    if (state.click === "follow") {
      setFollow(true);
    } else {
      setFollow(false);
    }
  }, [location.state]);

  // useEffect(() => {
  //   if (follow !== undefined) {
  //     if (follow === true && followingData) {
  //       setFollowList(followingData.follow);
  //     } else if (follow === false && followerData) {
  //       setFollowerList(followerData.follow);
  //     }
  //   }
  // }, [follow]);
  const followingHandler = () => {
    setFollow(true);
  };

  const followerHandler = () => {
    setFollow(false);
  };
  return (
    <div>
      <div>
        <MyFollowBackButton>
          <ArrowBackIcon fontSize="medium" />
        </MyFollowBackButton>
      </div>
      <MyFollowTabs>
        <MyFollowTab onClick={followingHandler}>팔로워</MyFollowTab>
        <MyFollowTab onClick={followerHandler}>팔로잉</MyFollowTab>
        {follow !== undefined && <MyFollowTabBorder select={follow} />}
      </MyFollowTabs>

      {follow !== undefined && (
        // 탭 엘레멘트
        <MyFollowListWrapperDiv>
          <MyFollows />
        </MyFollowListWrapperDiv>
      )}
    </div>
  );
};

export default MyFollowList;
