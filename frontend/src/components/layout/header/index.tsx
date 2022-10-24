import { HeaderContainer } from "../../../styles/layout/header";
import Title from "./Title";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import ProfileImgWrapper from "../../profileImage";
import { useNavigate } from "react-router-dom";

function Header() {
  const auth = useSelector((store: RootState) => store.userReducer.auth);
  const navigator = useNavigate();

  const onClick = () => {
    navigator(`/login`);
  };
  return (
    <HeaderContainer>
      <Title />
      {auth ? <ProfileImgWrapper /> : <div onClick={onClick}>로그인</div>}
    </HeaderContainer>
  );
}

export default Header;
