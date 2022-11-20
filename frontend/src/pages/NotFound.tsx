import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h1>저런! 에러가 발생했습니다!</h1>
      <button
        onClick={() => {
          navigator("/main");
        }}
      >
        메인으로 돌아가기
      </button>
    </div>
  );
};

export default NotFound;
