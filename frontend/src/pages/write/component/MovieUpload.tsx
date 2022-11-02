/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../../styles/theme";

const MovieUpload = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          width: 55%;
          height: 70%;
          background: ${theme.colors.subColorGradient4};
          border-radius: 8px;
          color: black;
          display: flex;
          justify-content: center;
        `}
      >
        <video
          src="/movie/login2.mp4"
          muted
          poster="/img/11.jpg"
          controls
          css={css`
            width: 100%;
            height: 100%;
          `}
        ></video>
      </div>
    </div>
  );
};

export default MovieUpload;
