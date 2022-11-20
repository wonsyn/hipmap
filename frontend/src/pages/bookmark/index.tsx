/** @jsxImportSource @emotion/react */
import { useFetchBookMark } from "../../hoc/useFetch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import BookMarkShorts from "./component/BookMarkShorts";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";

const BookMark = () => {
  const { data, isLoading } = useFetchBookMark();
  const [bookmarkShorts, setBookMarkShorts] = useState<
    {
      shortsId: number;
      thumbnailSrc: string;
      nickname: string;
    }[]
  >();
  useEffect(() => {
    setBookMarkShorts(data);
  }, [data]);
  const navigator = useNavigate();
  return (
    <div
      css={css`
        width: 100%;
        margin-top: 3vh;
      `}
    >
      <div
        css={css`
          width: 100%;
        `}
      >
        <button
          css={css`
            border: none;
            background: none;
          `}
          onClick={() => {
            navigator(-1);
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 40, color: "white" }} />
        </button>
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
          `}
        >
          <h1>북마크</h1>
        </div>
      </div>
      <div>
        {data && bookmarkShorts ? (
          <BookMarkShorts bookmarkList={bookmarkShorts} />
        ) : (
          <div>로딩중...</div>
        )}
      </div>
    </div>
  );
};

export default BookMark;
