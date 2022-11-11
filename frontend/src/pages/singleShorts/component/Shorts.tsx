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

const Shorts = ({ id }: { id: number }) => {
  console.log(id);
  const { data } = useFetchSingleShorts(id);
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

  if (
    window.location.pathname.includes("/myProfile") ||
    window.location.pathname.includes("/myPage")
  ) {
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
              />
            ) : (
              <SingleShortsVideoDiv>
                <ShortsVideoPlayer file_src={data?.fileSrc} />
                <LocationDiv>{location}</LocationDiv>
                <button
                  css={css`
                    position: absolute;
                    right: 1%;
                    bottom: 1%;
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
              </SingleShortsVideoDiv>
            )}
          </div>
        )}
      </SingleShortsWrapper>
    );
  }
  return (
    <SingleShortsWrapper>
      {data && (
        <SingleShortsVideoDiv>
          <ShortsVideoPlayer file_src={data?.fileSrc} />
          <LocationDiv>{location}</LocationDiv>
        </SingleShortsVideoDiv>
      )}
    </SingleShortsWrapper>
  );
};

export default Shorts;
