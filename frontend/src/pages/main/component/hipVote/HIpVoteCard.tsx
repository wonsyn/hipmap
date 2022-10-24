/** @jsxImportSource @emotion/react */
import Card from "../../../../components/card/Card";
import { css, keyframes } from "@emotion/react";

const zoomIn = keyframes`
    0%{
        height: 200%;
    }
    100%{
        height: 250%;
    }

`;

interface shorts {
  thumbnail_src: string;
  postId: number;
}

interface shortProps {
  shorts: shorts;
  index: number;
  trigger: () => void;
}

const HipVoteCard = ({ shorts, index, trigger }: shortProps) => {
  return (
    <Card
      width="93%"
      height="25vh"
      display="flex"
      justify_content="center"
      align_items="center"
      overflow="hidden"
      background="black"
    >
      <img
        css={css`
          animation: ${zoomIn} 10s infinite;
        `}
        src={shorts.thumbnail_src}
        alt="썸네일"
        onAnimationIteration={trigger}
      />
    </Card>
  );
};

export default HipVoteCard;
