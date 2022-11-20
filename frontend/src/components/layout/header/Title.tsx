import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/logo/HipMapLogo.png";
import title from "../../../assets/title/title.png";
import {
  HeaderTitleTextWrapper,
  HeaderTitleWrapper,
  LogoImg,
} from "../../../styles/layout/header";

const Title = () => {
  const navigator = useNavigate();
  const onClick = () => {
    navigator(`/`);
  };
  return (
    <HeaderTitleWrapper onClick={onClick}>
      <LogoImg src={Logo} alt="로고" />
      <HeaderTitleTextWrapper>
        <LogoImg src={title} alt="로고" />
      </HeaderTitleTextWrapper>
    </HeaderTitleWrapper>
  );
};

export default Title;
