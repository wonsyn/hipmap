import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  MyFollowBackButton,
  MyFollowListWrapperDiv,
  MyFollowTab,
  MyFollowTabBorder,
  MyFollowTabs,
} from "../styles/MyFollowWrapperStyle";
import MyFollows from "./MyFollows";

const MyFollowList = () => {
  // 유저 아이디 넣기
  const location = useLocation();

  const [follow, setFollow] = useState<boolean | undefined>(undefined);

  const params = useParams();
  let id = undefined;
  if (params.userid !== undefined) {
    id = parseInt(params.userid);
  }
  console.log(params);
  useEffect(() => {
    const state = location.state.click;
    if (state === "following") {
      setFollow(true);
    } else {
      setFollow(false);
    }
  }, [location.state]);

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
        <MyFollowTab onClick={followingHandler}>팔로잉</MyFollowTab>
        <MyFollowTab onClick={followerHandler}>팔로워</MyFollowTab>
        {follow !== undefined && <MyFollowTabBorder select={follow} />}
      </MyFollowTabs>

      {follow !== undefined && id !== undefined && (
        // 탭 엘레멘트
        <MyFollowListWrapperDiv>
          <MyFollows select={follow} id={id} />
        </MyFollowListWrapperDiv>
      )}
    </div>
  );
};

export default MyFollowList;
