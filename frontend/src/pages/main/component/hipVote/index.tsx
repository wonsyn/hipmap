/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HipVoteWrapperDiv } from "../../styles/hipVote";
import { useState, useEffect } from "react";
import HipVoteCard from "./HIpVoteCard";

interface shorts {
  thumbnail_src: string;
  postId: number;
}

interface short {
  shorts: shorts;
  index: number;
}

const dummyDate = [
  {
    thumbnail_src: "/img/1.jpg",
    postId: 1,
  },
  {
    thumbnail_src: "/img/2.png",
    postId: 2,
  },
  {
    thumbnail_src: "/img/3.png",
    postId: 3,
  },
  {
    thumbnail_src: "/img/4.png",
    postId: 4,
  },
  {
    thumbnail_src: "/img/5.jpg",
    postId: 5,
  },
  {
    thumbnail_src: "/img/6.jpg",
    postId: 6,
  },
  {
    thumbnail_src: "/img/7.jpg",
    postId: 7,
  },
  {
    thumbnail_src: "/img/8.jpg",
    postId: 8,
  },
  {
    thumbnail_src: "/img/9.jpg",
    postId: 9,
  },

  {
    thumbnail_src: "/img/10.jpg",
    postId: 10,
  },
];

const HipVote = () => {
  const [voteState, setVoteState] = useState<shorts[]>();
  const [thumbnailState, setTumbnailState] = useState<short>();
  useEffect(() => {
    setVoteState(dummyDate);
  }, []);
  useEffect(() => {
    if (!thumbnailState && voteState) {
      setTumbnailState({ shorts: voteState[0], index: 0 });
    }
  }, [thumbnailState, voteState]);
  const text = () => {
    const index = thumbnailState!.index;
    console.log(index, voteState?.length);
    if (
      voteState &&
      thumbnailState &&
      thumbnailState.index + 1 < voteState.length
    ) {
      console.log("aaaaaaaa");
      setTumbnailState({ shorts: voteState[index + 1], index: index + 1 });
    } else if (voteState && index && index + 1 >= voteState.length) {
      console.log("bbbbbbbbbb");
      setTumbnailState({ shorts: voteState[0], index: 0 });
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
