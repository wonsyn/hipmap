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
  shortsCount,
}: {
  shortsCount: number;
  userId: number;
  followerCount: number;
  followingCount: number;
}) => {
  // 유저 아이디 얻어와서 팔로우 리스트에 같이 넣어주기
  const navigate = useNavigate();
  console.log(shortsCount);
  return (
    <MyFollowWrapperDiv>
      <MyFollowElementWrapperDiv>
        <MyFollowCountElement>{shortsCount}</MyFollowCountElement>
        <MyFollowCountElement
          onClick={() => {
            navigate("/myPage/followlist/" + userId, {
              state: { click: "following" },
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
        <MyFollowCountElement>팔로잉</MyFollowCountElement>
        <MyFollowCountElement>팔로워</MyFollowCountElement>
      </MyFollowElementWrapperDiv>
    </MyFollowWrapperDiv>
  );
};

export default MyFollowWrapper;
