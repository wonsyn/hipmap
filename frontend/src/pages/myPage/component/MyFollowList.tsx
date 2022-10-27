import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Tab, Tabs } from "@material-ui/core";

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

  const [follow, setFollow] = useState<Boolean | undefined>(undefined);
  const [followList, setFollowList] = useState<followInterface>();

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
      console.log(follow);
      if (follow === true) {
        setFollowList(dummyData);
      } else if (follow === false) {
        setFollowList(anotherDummyData);
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
        <button>
          <ArrowBackIcon />
        </button>
      </div>
      <Tabs>
        {/* <div onClick={followingHandler}>팔로워</div>
        <div onClick={followerHandler}>팔로잉</div> */}
        <Tab label="팔로워" onClick={followingHandler} />
        <Tab label="팔로잉" onClick={followerHandler} />
      </Tabs>
      <div>
        {followList?.follow &&
          followList.follow.map((e, i) => (
            <div>
              <div>{e.following_id}</div>
              <img src={e.img_src} alt="프로필 이미지" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyFollowList;
