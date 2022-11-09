import { useFetchBookMark } from "../../hoc/useFetch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BookMark = () => {
  const { data, isLoading } = useFetchBookMark();
  const navigator = useNavigate();
  console.log(data);
  return (
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
  );
};

export default BookMark;
