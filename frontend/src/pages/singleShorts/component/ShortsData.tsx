/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CommentsWrapper from "../../../components/comments";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ShortsData = ({
  shortsId,
  like,
  hate,
  shortsDataHandler,
}: {
  shortsId: number;
  like: number;
  hate: number;
  shortsDataHandler: () => void;
}) => {
  return (
    <div
      css={css`
        width: 94%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #3d3d3d;
        border-radius: 8px;
        padding: 3%;
        color: white;
        z-index: 10002;
      `}
    >
      <div
        css={css`
          position: absolute;
          left: 2%;
        `}
      >
        <button css={css`border:none; background:none`} onClick={shortsDataHandler}>
          <ArrowBackIcon sx={{ color: "white", fontSize: 35 }} />
        </button>
      </div>
      <div>투표</div>
      <div
        css={css`
          display: flex;
          font-size: 0.8rem;
        `}
      >
        <div>좋아요{like}</div>
        <div>ㅇ</div>
        <div>싫어요{hate}</div>
      </div>
      <div>댓글</div>
      <div
        css={css`
          width: 100%;
          height: 100%;
          margin-top: auto;
          background: black;
          font-size: 0.9rem;
          overflow-y: scroll;
        `}
      >
        <CommentsWrapper shortsId={shortsId} />
      </div>
    </div>
  );
};
export default ShortsData;
