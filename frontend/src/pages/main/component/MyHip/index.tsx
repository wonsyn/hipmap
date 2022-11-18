/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMediaQuery } from "@material-ui/core";
import { useEffect, useState } from "react";
import Card from "../../../../components/card/Card";
import { useFetchBookMark, useFetchMyShorts } from "../../../../hoc/useFetch";
import {
  MyHipCardFont,
  MyHipContainerDiv,
  MyHipContentDiv,
} from "../../styles/MyHip";
import MyHipContent from "./myHipContent";

const MyHipContainer = ({ username }: { username: string }) => {
  const [myHipData, setMyHipData] =
    useState<
      {
        shortsId: number;
        thumbnailSrc: string;
        nickname: string;
      }[]
    >();
  const { data: myShorts } = useFetchMyShorts(username);
  const { data: bookmark } = useFetchBookMark();
  console.log("내 힙 데이터 : ", myHipData);
  const isMobile = useMediaQuery("(max-width:1024px)");
  useEffect(() => {
    if (bookmark) {
      setMyHipData(bookmark);
    }
  }, [bookmark]);

  return (
    <MyHipContainerDiv>
      <Card
        width="90vw"
        height={isMobile ? "35vh" : "48vh"}
        background="linear-gradient(92.79deg,#FFC23C,#EA047E)"
      >
        <div>
          <MyHipCardFont>My HIP</MyHipCardFont>
          <div>
            {(myHipData !== undefined && myHipData.length > 0) ||
            (myShorts !== undefined && myShorts.length > 0) ? (
              <MyHipContentDiv>
                {myHipData !== undefined && myHipData.length > 0 && (
                  <MyHipContent content={myHipData} text="북마크" />
                )}
                {myShorts !== undefined && myShorts.length > 0 && (
                  <MyHipContent content={myShorts} text="최근 등록한 장소" />
                )}
              </MyHipContentDiv>
            ) : (
              <h3
                css={css`
                  margin: 5%;
                `}
              >
                아직 아무것도 없어요!
              </h3>
            )}
          </div>
        </div>
      </Card>
    </MyHipContainerDiv>
  );
};

export default MyHipContainer;
