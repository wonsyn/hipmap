import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Tab, Tabs } from "@material-ui/core";
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

interface followInterface {
  follow: {
    user_id: string;
    following_id: string;
    img_src: string;
  }[];
}
const anotherDummyData: followInterface = {
  follow: [
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/979195859524788244/1014134412025bc65e924b01d5ffd1a3578c7262.gif",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/979195859524788244/1014134412025bc65e924b01d5ffd1a3578c7262.gif",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/979195859524788244/1014134412025bc65e924b01d5ffd1a3578c7262.gif",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/979195859524788244/1014134412025bc65e924b01d5ffd1a3578c7262.gif",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/979195859524788244/1014134412025bc65e924b01d5ffd1a3578c7262.gif",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/979195859524788244/1014134412025bc65e924b01d5ffd1a3578c7262.gif",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/979195859524788244/1014134412025bc65e924b01d5ffd1a3578c7262.gif",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/979195859524788244/1014134412025bc65e924b01d5ffd1a3578c7262.gif",
    },
  ],
};
const dummyData: followInterface = {
  follow: [
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
    },
    {
      user_id: "첫번째",
      following_id: "두번째",
      img_src:
        "https://cdn.discordapp.com/attachments/433506654009425921/1021418121933885460/unknown.png",
    },
  ],
};

const MyFollowList = () => {
  // 유저 아이디 넣기
  const location = useLocation();

  const [follow, setFollow] = useState<boolean | undefined>(undefined);
  const [followList, setFollowList] = useState<followInterface>();
  const [followerList, setFollowerList] = useState<followInterface>();

  useEffect(() => {
    const state = location.state as { click: string };
    if (state.click === "follow") {
      setFollow(true);
    } else {
      setFollow(false);
    }
  }, [location.state]);

  useEffect(() => {
    if (follow !== undefined) {
      if (follow === true) {
        setFollowList(dummyData);
      } else if (follow === false) {
        setFollowerList(anotherDummyData);
      }
    }
  }, [follow]);
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
                {followList?.follow &&
                  followList.follow.map((e, i) => (
                    <MyFollowListDiv key={i}>
                      <MyFollowProfileImg src={e.img_src} alt="프로필 이미지" />
                      <MyFollowIdWrapper>{e.following_id}</MyFollowIdWrapper>
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
                {followerList?.follow &&
                  followerList.follow.map((e, i) => (
                    <MyFollowListDiv key={i}>
                      <MyFollowProfileImg src={e.img_src} alt="프로필 이미지" />
                      <MyFollowIdWrapper>{e.following_id}</MyFollowIdWrapper>

                      <MyFollowAddButton>삭제</MyFollowAddButton>
                    </MyFollowListDiv>
                  ))}
              </FollowListWrapperDiv>
            </FollowSearchListDiv>
          </MyFollowListArea>
        </MyFollowListWrapperDiv>
      )}
    </div>
  );
};

export default MyFollowList;
