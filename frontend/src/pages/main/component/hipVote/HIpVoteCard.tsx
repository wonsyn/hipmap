/** @jsxImportSource @emotion/react */
import Card from "../../../../components/card/Card";
import { css, keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const zoomIn = keyframes`
    0%{
        height: 200%;
    }
    100%{
        height: 250%;
    }

`;

interface shorts {
  thumbnailSrc: string;
  postId: number;
}

interface shortProps {
  shorts: shorts;
  index: number;
  trigger: () => void;
}

const HipVoteCard = ({ shorts, index, trigger }: shortProps) => {
  const navigator = useNavigate();
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
        src={shorts.thumbnailSrc}
        alt="썸네일"
        onAnimationIteration={trigger}
        onClick={() => {
          navigator("/shorts");
        }}
      />
    </Card>
  );
};

export default HipVoteCard;
