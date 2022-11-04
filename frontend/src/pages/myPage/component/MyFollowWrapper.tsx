import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MyFollowCountElement,
  MyFollowElementWrapperDiv,
  MyFollowWrapperDiv,
} from "../styles/MyFollowWrapperStyle";

const MyFollowWrapper = ({
  followerCount,
  followingCount,
  userId,
}: {
  userId: number;
  followerCount: number;
  followingCount: number;
}) => {
  // 유저 아이디 얻어와서 팔로우 리스트에 같이 넣어주기
  const [myPost, setMyPost] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <MyFollowWrapperDiv>
      <MyFollowElementWrapperDiv>
        <MyFollowCountElement>{myPost}</MyFollowCountElement>
        <MyFollowCountElement
          onClick={() => {
            navigate("/myPage/followlist/" + userId, {
              state: { click: "follow" },
            });
          }}
        >
          {followingCount}
        </MyFollowCountElement>
        <MyFollowCountElement
          onClick={() => {
            navigate("/myPage/followlist/" + userId, {
              state: { click: "follower" },
            });
          }}
        >
          {followerCount}
        </MyFollowCountElement>
      </MyFollowElementWrapperDiv>
      <MyFollowElementWrapperDiv>
        <MyFollowCountElement>게시물</MyFollowCountElement>
        <MyFollowCountElement>팔로우</MyFollowCountElement>
        <MyFollowCountElement>팔로워</MyFollowCountElement>
      </MyFollowElementWrapperDiv>
    </MyFollowWrapperDiv>
  );
};

export default MyFollowWrapper;
