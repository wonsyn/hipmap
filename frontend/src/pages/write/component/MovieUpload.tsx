/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState, useCallback } from "react";
import theme from "../../../styles/theme";
import { useDropzone } from "react-dropzone";
import { fileExtensionValid, removeFileName } from "./extensionValidate";
import ClearIcon from "@mui/icons-material/Clear";

const ALLOW_FILE = "mp4,mov";
const MAX_SIZE_LIMIT = 15 * 1024 * 1024;

const MovieUpload = ({
  setUploadInfo,
  fileTypeHandler,
}: {
  setUploadInfo: (e: any) => void;
  fileTypeHandler: (e: string) => void;
}) => {
  const [file, setFile] = useState<any>();
  const [fileType, setFileType] = useState<string>();

  const onDrop = useCallback((acceptedFiles: any) => {
    if (fileExtensionValid(acceptedFiles[0])) {
      if (acceptedFiles[0].size < MAX_SIZE_LIMIT) {
        const extension = removeFileName(acceptedFiles[0].name);
        if (extension === "mov" || extension === "mp4") {
          setFileType("video");
          fileTypeHandler("video");
        } else if (extension === "jpg" || extension === "png") {
          setFileType("image");
          fileTypeHandler("image");
        }
        setFile(acceptedFiles[0]);
      } else {
        alert("업로드 가능한 최대 용량은 15MB입니다.");
      }
    } else {
      alert("사용 가능한 확장자가 아닙니다.");
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
          width: 80%;
          height: 60vh;
          border: 2px solid;
          border-radius: 8px;
          color: white;
          display: flex;
          justify-content: center;
          @media (min-width: 700px) {
            height: 30vh;
          }
        `}
        {...getRootProps()}
      >
        {file ? (
          <div
            css={css`
              position: relative;
            `}
          >
            <button
              css={css`
                right: 5px;
                border: none;
                background: none;
                position: absolute;
                z-index: 5;
              `}
              onClick={() => {
                setFile(null);
              }}
            >
              <ClearIcon sx={{ fontSize: 40, color: "white" }} />
            </button>
            {fileType === "video" ? (
              <video
                src={URL.createObjectURL(file)}
                muted
                controls
                css={css`
                  width: 100%;
                  height: 100%;
                  z-index: 2;
                `}
              ></video>
            ) : (
              <img
                src={URL.createObjectURL(file)}
                alt="미리보기"
                css={css`
                  width: 100%;
                  height: auto;
                  max-height: 100%;
                  z-index: 2;
                `}
              />
            )}
          </div>
        ) : (
          <div>
            <input
              {...getInputProps()}
              css={css`
                width: 100%;
                height: 100%;
              `}
              type="file"
              accept=".mp4"
            />
            {isDragActive ? (
              <p>
                사용 가능한 확장자는 JPG, PNG, mp4, mov 이며 최대 용량은
                15MB까지입니다.
              </p>
            ) : (
              <div
                css={css`
                  width: 100%;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  & h3 {
                    color: skyblue;
                    opacity: 0.9;
                  }
                `}
              >
                <h3>이곳에 파일을 드래그 하거나</h3>
                <h3>파일을 직접 선택해주세요!</h3>
                <div
                  css={css`
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-top: 2vh;
                    font-size: 0.8rem;
                    opacity: 0.6;
                  `}
                >
                  <div css={css``}>
                    사용 가능한 확장자는 JPG, PNG, mp4, mov 이며
                  </div>
                  <div> 최대 용량은 15MB까지입니다.</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieUpload;
