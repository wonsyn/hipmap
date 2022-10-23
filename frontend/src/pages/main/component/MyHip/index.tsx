import { useEffect, useState } from "react";
import Card from "../../../../components/card/Card";
import {
  MyHipCardFont,
  MyHipContainerDiv,
  MyHipContentDiv,
} from "../../styles/MyHip";
import MyHipContent from "./myHipContent";

interface shorts {
  thumbnail_src: string;
  shortsId: number;
}

// interface myHipPlace{
//     shortsList: shorts[];
// }

// interface myContent {
//     shortsList: shorts[];
//   };

interface MyHipContainerProps {
  // 내가 등록한 게시물 중 힙 플레이스만
  myHipPlace: {
    shortsList: shorts[];
  };
  // 내가 등록한 장소
  myContent: {
    shortsList: shorts[];
  };
}

const DummyData: MyHipContainerProps = {
  myHipPlace: {
    shortsList: [
      {
        thumbnail_src: "/img/1.jpg",
        shortsId: 1,
      },
      {
        thumbnail_src: "/img/2.png",
        shortsId: 2,
      },
      {
        thumbnail_src: "/img/3.png",
        shortsId: 3,
      },
      {
        thumbnail_src: "/img/4.png",
        shortsId: 4,
      },
    ],
  },
  myContent: {
    shortsList: [
      {
        thumbnail_src: "/img/1.jpg",
        shortsId: 1,
      },
      {
        thumbnail_src: "/img/2.png",
        shortsId: 2,
      },
      {
        thumbnail_src: "/img/3.png",
        shortsId: 3,
      },
      {
        thumbnail_src: "/img/4.png",
        shortsId: 4,
      },
    ],
  },
};

const MyHipContainer = () => {
  const [myHipData, setMyHipData] = useState<MyHipContainerProps>();
  useEffect(() => {
    setMyHipData(DummyData);
  }, []);
  return (
    <MyHipContainerDiv>
      <Card
        width="90vw"
        height="35vh"
        background="linear-gradient(92.79deg,#FFC23C,#EA047E)"
      >
        <div>
          <MyHipCardFont>My HIP</MyHipCardFont>
          <div>
            {myHipData !== undefined && (
              <MyHipContentDiv>
                <MyHipContent
                  content={myHipData.myHipPlace}
                  text="인정 받은 당신의 힙 플레이스"
                />
                <MyHipContent
                  content={myHipData.myContent}
                  text="최근 등록한 장소"
                />
              </MyHipContentDiv>
            )}
          </div>
        </div>
      </Card>
    </MyHipContainerDiv>
  );
};

export default MyHipContainer;
