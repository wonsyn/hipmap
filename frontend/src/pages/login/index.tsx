import { useDispatch } from "react-redux";
import { login } from "../../store/login/loginStore";
const LoginWrapper = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(login());
  };

  return (
    <div>
      로그인<button onClick={loginHandler}>로그인</button>
    </div>
  );
};

export default LoginWrapper;
