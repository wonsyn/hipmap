/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import { useUploadShorts } from "../../hoc/useMutation";
import theme from "../../styles/theme";
import ErrorAlerts from "../shorts/component/ErrorAlerts";
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
  console.log("position", position);
  const { mutate, isLoading } = useUploadShorts();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [fileType, setFileType] = useState<string>("");

  const fileTypeHandler = (e: string) => {
    setFileType(e);
  };

  const modalOpenHandler = () => {
    navigator("/");
    setModalOpen((prev) => {
      return !prev;
    });
  };

  const errorOpenHandler = () => {
    setErrorOpen((prev) => {
      return !prev;
    });
  };

  const navigator = useNavigate();

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
      {errorOpen && (
        <ErrorAlerts open={errorOpen} openHandler={errorOpenHandler} />
      )}
      {modalOpen && (
        <Modal
          backgroundcolor="#240046"
          modalHandler={modalOpenHandler}
          width="300px"
          height="300px"
        >
          <div
            css={css`
              color: white;
              width: 100%;
              height: 100%;
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            `}
          >
            <h5 css={css``}>업로드에 성공하였습니다.</h5>
            <button
              css={css`
                width: 100px;
                height: 50px;
                position: absolute;
                bottom: 10px;
                border: none;
                border-radius: 8px;
                background: ${theme.colors.subColorGradient2};
                font-weight: bolder;
              `}
              onClick={() => {
                navigator("/");
              }}
            >
              확인
            </button>
          </div>
        </Modal>
      )}
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
        <MovieUpload
          setUploadInfo={setUploadInfo}
          fileTypeHandler={fileTypeHandler}
        />
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
                  file_type: fileType,
                },
                {
                  onSuccess(data, variables, context) {
                    setModalOpen(true);
                  },
                  onError() {
                    setErrorOpen(true);
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
