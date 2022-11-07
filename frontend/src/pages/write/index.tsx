/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import KakaoMapWrapper from "./component/KakaoMapWrapper";
import MovieUpload from "./component/MovieUpload";

const Write = () => {
  //업로드 할 동영상/ 사진 정보 가져오기
  const [uploadInfo, setUploadInfo] = useState<any>();
  return (
    <div
      css={css`
        width: 100vw;
        min-height: 50vh;
        min-height: 70vh;
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2vh;
      `}
    >
      <h1
        css={css`
          width: 100%;
          max-width: 1024px;
          display: flex;
          justify-content: center;
          margin-top: 3%;
          margin-bottom: 5%;
        `}
      >
        힙한 장소 공유하기
      </h1>
      <div
        css={css`
          width: 100%;
          height: 100%;
          border: 2px white solid;
          border-radius: 8px;
          padding-top: 3%;
          padding-bottom: 3%;
          display: flex;
          flex-direction: column;
          @media (min-width: 700px) {
            flex-direction: row;
          }
        `}
      >
        <MovieUpload />
        <KakaoMapWrapper />
      </div>
    </div>
  );
};

export default Write;
