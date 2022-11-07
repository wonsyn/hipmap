/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useUploadShorts } from "../../hoc/useMutation";
import KakaoMapWrapper from "./component/KakaoMapWrapper";
import MovieUpload from "./component/MovieUpload";

const Write = () => {
  //업로드 할 동영상/ 사진 정보 가져오기
  const [uploadInfo, setUploadInfo] = useState<any>();
  // console.log(uploadInfo);

  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
    si: string;
    gu: string | null;
    gun: string | null;
  }>();
  // console.log(position);

  const { mutate, isLoading } = useUploadShorts();

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
        <MovieUpload setUploadInfo={setUploadInfo} />
        <KakaoMapWrapper setPosition={setPosition} />
      </div>
      <div>
        <button
          onClick={() => {
            if (position) {
              mutate({
                shorts: {
                  file: uploadInfo,
                  si: position.si,
                  gu: position.gu ? position.gu : null,
                  gun: position.gun ? position.gun : null,
                  lat: position.lat,
                  lng: position.lng,
                },
                file_type: "video",
              });
            }
          }}
        >
          글 업로드
        </button>
      </div>
    </div>
  );
};

export default Write;
