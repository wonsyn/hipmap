/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CommentsWrapper from "../../../components/comments";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  SingleShortsVoteProgressBar,
  SingleShortsVoteProgressBarDiv,
  SingleShortsVoteProgressBarWrapperDiv,
} from "../style/singleShorts";
import { useAppSelector } from "../../../hoc/useStoreHooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShortsDelete } from "../../../hoc/useMutation";

const ShortsData = ({
  shortsId,
  like,
  hate,
  id,
  shortsDataHandler,
}: {
  shortsId: number;
  like: number;
  hate: number;
  id: number;
  shortsDataHandler: () => void;
}) => {
  const userId = useAppSelector((store) => store.userReducer.user.user_id);
  console.log("투표?", userId, id);
  const { mutate: shortsDelete } = useShortsDelete();
  const percent = (like / (like + hate)) * 100;
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
        <button
          css={css`
            border: none;
            background: none;
          `}
          onClick={shortsDataHandler}
        >
          <ArrowBackIcon sx={{ color: "white", fontSize: 35 }} />
        </button>
      </div>
      {/* 투표시작 */}
      {userId === id && (
        <>
          <div
            css={css`
              position: absolute;
              right: 10px;
            `}
          >
            <button
              css={css`
                border: none;
                background: none;
              `}
              onClick={() => {
                shortsDelete(
                  { shortsId },
                  {
                    onSuccess: () => {
                      window.location.reload();
                    },
                  }
                );
              }}
            >
              <DeleteIcon sx={{ color: "white" }} />
            </button>
          </div>
          <div
            css={css`
              font-size: 1.2rem;
            `}
          >
            투표
          </div>
          <div
            css={css`
              margin-top: 1%;
              font-size: 0.8rem;
            `}
          >
            {percent} %
          </div>
          <div
            css={css`
              display: flex;
              font-size: 0.8rem;
              margin-top: 2%;
              width: 60%;
              @media (max-width: 699px) {
                width: 90%;
              }
            `}
          >
            <div
              css={css`
                margin-right: auto;
              `}
            >
              좋아요{like}
            </div>
            <SingleShortsVoteProgressBar>
              <SingleShortsVoteProgressBarWrapperDiv>
                <SingleShortsVoteProgressBarDiv width={percent} />
              </SingleShortsVoteProgressBarWrapperDiv>
            </SingleShortsVoteProgressBar>
            <div
              css={css`
                margin-left: auto;
              `}
            >
              {hate}싫어요
            </div>
          </div>
        </>
      )}

      <div
        css={css`
          width: 100%;
        `}
      >
        <div
          css={css`
            margin-left: 3%;
            margin-top: 5vh;
            margin-bottom: 1%;
            font-size: 1.2rem;
          `}
        >
          댓글
        </div>
      </div>
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
