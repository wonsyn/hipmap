/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUploadShorts } from "../../hoc/useMutation";
import theme from "../../styles/theme";
import KakaoMapWrapper from "./component/KakaoMapWrapper";
import MovieUpload from "./component/MovieUpload";
import WriteColorAlerts from "./writeAlert";

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
  console.log("position", position);
  const [uploadResult, setUploadResult] = useState<boolean>(false);
  const { mutate, isLoading } = useUploadShorts();
  const navigator = useNavigate();
  const openUploadResultHandler = () => {
    setUploadResult((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    if (uploadResult) {
      navigator("/");
    }
    return () => {
      <WriteColorAlerts
        open={uploadResult}
        openHandler={openUploadResultHandler}
      />;
    };
  }, [uploadResult]);

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
          /* border: 2px white solid; */
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
          css={css`
            width: 50vw;
            max-width: 200px;
            height: 50vh;
            max-height: 60px;
            border: none;
            background: ${theme.colors.subColorGradient2};
            border-radius: 8px;
            font-size: 1.2rem;
            font-weight: bolder;
          `}
          onClick={() => {
            if (position) {
              mutate(
                {
                  shorts: {
                    file: uploadInfo,
                    si: position.si,
                    gu: position.gu ? position.gu : null,
                    gun: position.gun ? position.gun : null,
                    lat: position.lat,
                    lng: position.lng,
                  },
                  file_type: "video",
                },
                {
                  onSuccess(data, variables, context) {
                    console.log("캬아아아악");
                    setUploadResult(true);

                    // navigator("/");
                  },
                }
              );
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
