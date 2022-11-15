/** @jsxImportSource @emotion/react */
import { useFetchSingleShorts } from "../../../hoc/useFetch";
import { css } from "@emotion/react";
import { LocationDiv } from "../../shorts/styles/shortsStyle";
import ShortsVideoPlayer from "../../shorts/component/VideoPlayer";
import { useEffect, useState } from "react";
import ShortsData from "./ShortsData";
import theme from "../../../styles/theme";
import {
  SingleShortsVideoDiv,
  SingleShortsWrapper,
} from "../style/singleShorts";
import { useAppSelector } from "../../../hoc/useStoreHooks";

const Shorts = ({ id }: { id: number }) => {
  console.log(id);
  const { data, isFetching } = useFetchSingleShorts(id);
  const [showShortsData, setShowShortsData] = useState<boolean>(false);
  const [location, setLocation] = useState<string>();
  useEffect(() => {
    if (data) {
      const si = data.locationSi;
      const gu = data.locationGu;
      const dong = data.locationDong;
      setLocation(si + " " + gu + " " + dong);
    }
  }, [data]);
  console.log(data);
  const shortsDataHandler = () => {
    setShowShortsData((prev) => {
      return !prev;
    });
  };

  if (isFetching) {
    return <h2>로딩중...</h2>;
  }
  return (
    <SingleShortsWrapper>
      {data && (
        <div
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          {showShortsData ? (
            <ShortsData
              like={data.likeCount}
              hate={data.hateCount}
              shortsId={data.shortsId}
              shortsDataHandler={shortsDataHandler}
              id={data.userId}
            />
          ) : (
            <SingleShortsVideoDiv>
              <ShortsVideoPlayer file_src={data?.fileSrc} />
              <LocationDiv>{location}</LocationDiv>
              <div>
                <div
                  css={css`
                    position: absolute;
                    right: 1%;
                    bottom: 60px;
                    font-size: 1rem;
                    text-shadow: 1px 1px 0 #f447bd, -1px 1px 0 #f447bd,
                      1px -1px 0 #f447bd, -1px -1px 0 #f447bd, 0px 1px 0 #f447bd,
                      0px -1px 0 #f447bd, -1px 0px 0 #f447bd, 1px 0px 0 #f447bd,
                      2px 2px 0 #f447bd, -2px 2px 0 #f447bd, 2px -2px 0 #f447bd,
                      -2px -2px 0 #f447bd, 0px 2px 0 #f447bd, 0px -2px 0 #f447bd,
                      -2px 0px 0 #f447bd, 2px 0px 0 #f447bd, 1px 2px 0 #f447bd,
                      -1px 2px 0 #f447bd, 1px -2px 0 #f447bd,
                      -1px -2px 0 #f447bd, 2px 1px 0 #f447bd, -2px 1px 0 #f447bd,
                      2px -1px 0 #f447bd, -2px -1px 0 #f447bd;
                  `}
                >
                  {data.nickname}
                </div>
                <button
                  css={css`
                    position: absolute;
                    right: 1%;
                    bottom: 10px;
                    border: none;
                    border-radius: 8px;
                    width: 60px;
                    height: 40px;
                    background: ${theme.colors.subColorGradient2};
                    color: black;
                    font-size: 0.7rem;
                    font-weight: bold;
                  `}
                  onClick={shortsDataHandler}
                >
                  자세히
                </button>
              </div>
            </SingleShortsVideoDiv>
          )}
        </div>
      )}
    </SingleShortsWrapper>
  );
};

export default Shorts;
