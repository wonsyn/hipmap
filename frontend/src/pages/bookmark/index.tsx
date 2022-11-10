import { useFetchBookMark } from "../../hoc/useFetch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import BookMarkShorts from "./component/BookMarkShorts";
import { useEffect, useState } from "react";

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
  console.log(data);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigator(-1);
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 40 }} />
        </button>
        <h1>북마크</h1>
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
