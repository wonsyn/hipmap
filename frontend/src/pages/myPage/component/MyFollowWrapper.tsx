import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MyFollowCountElement,
  MyFollowElementWrapperDiv,
  MyFollowWrapperDiv,
} from "../styles/MyFollowWrapperStyle";

const MyFollowWrapper = () => {
  // 유저 아이디 얻어와서 팔로우 리스트에 같이 넣어주기
  const [myPost, setMyPost] = useState<number>(0);
  const [followCount, setFollowCount] = useState<number>(0);
  const [followerCount, setFollowerCount] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    setMyPost(5);
    setFollowCount(10);
    setFollowerCount(20);
  }, []);
  return (
    <MyFollowWrapperDiv>
      <MyFollowElementWrapperDiv>
        <MyFollowCountElement>{myPost}</MyFollowCountElement>
        <MyFollowCountElement
          onClick={() => {
            navigate("/myPage/followlist", { state: { click: "follow" } });
          }}
        >
          {followCount}
        </MyFollowCountElement>
        <MyFollowCountElement
          onClick={() => {
            navigate("/myPage/followlist", { state: { click: "follower" } });
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
