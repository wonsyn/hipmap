/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import theme from "../../../styles/theme";

const MovieUpload = ({
  setUploadInfo,
}: {
  setUploadInfo: (e: any) => void;
}) => {
  const [file, setFile] = useState<any>();

  const videoUpload = (e: any) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      setUploadInfo(file);
    } else {
      setUploadInfo(null);
    }
  }, [file, setUploadInfo]);

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 5vh;
      `}
    >
      <h2
        css={css`
          margin-bottom: 3%;
        `}
      >
        힙한 동영상을 올려주세요!
      </h2>
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
        {file ? (
          <div>
            <video
              src={URL.createObjectURL(file)}
              muted
              controls
              css={css`
                width: 100%;
                height: 100%;
              `}
            ></video>
            <button
              onClick={() => {
                setFile(null);
              }}
            >
              삭제하기
            </button>
          </div>
        ) : (
          <input type="file" onChange={videoUpload} />
        )}
      </div>
    </div>
  );
};

export default MovieUpload;
