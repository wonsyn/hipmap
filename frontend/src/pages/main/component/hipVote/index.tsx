/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HipVoteWrapperDiv } from "../../styles/hipVote";
import { useState, useEffect } from "react";
import HipVoteCard from "./HIpVoteCard";
import { shortsList } from "../../../../hoc/useFetch";

interface shorts {
  thumbnailSrc: string;
  postId: number;
}

interface short {
  shorts: shorts;
  index: number;
}

const HipVote = ({
  shortsData,
}: {
  shortsData: {
    result: shortsList;
    nextPage: number;
    isLast: boolean;
  }[];
}) => {
  console.log(shortsData);
  const [voteState, setVoteState] = useState<shortsList>();
  const [thumbnailState, setTumbnailState] = useState<short>();
  useEffect(() => {
    if (shortsData.length > 0) {
      setVoteState(shortsData[0].result);
    }
  }, []);
  useEffect(() => {
    if (!thumbnailState && voteState) {
      const shorts = {
        thumbnailSrc: voteState.shortsList[0].thumbnailSrc,
        postId: voteState.shortsList[0].shortsId,
      };
      setTumbnailState({ shorts, index: 0 });
    }
  }, [thumbnailState, voteState]);
  const text = () => {
    const index = thumbnailState!.index;
    if (
      voteState &&
      thumbnailState &&
      thumbnailState.index + 1 < voteState.shortsList.length
    ) {
      const shorts = {
        thumbnailSrc: voteState.shortsList[index + 1].thumbnailSrc,
        postId: voteState.shortsList[index + 1].shortsId,
      };
      setTumbnailState({
        shorts,
        index: index + 1,
      });
    } else if (voteState && index && index + 1 >= voteState.shortsList.length) {
      const shorts = {
        thumbnailSrc: voteState.shortsList[0].thumbnailSrc,
        postId: voteState.shortsList[0].shortsId,
      };
      setTumbnailState({ shorts, index: 0 });
    }
  };
  return (
    <HipVoteWrapperDiv>
      <div
        css={css`
          font-size: 1.5rem;
          font-weight: bolder;
          width: 92%;
          margin-bottom: 2%;
        `}
      >
        힙 투표하기
      </div>
      {thumbnailState && (
        <HipVoteCard
          shorts={thumbnailState.shorts}
          index={thumbnailState.index}
          trigger={text}
        />
      )}
    </HipVoteWrapperDiv>
  );
};

export default HipVote;
