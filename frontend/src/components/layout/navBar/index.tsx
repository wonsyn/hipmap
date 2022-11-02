import {
  FooterContentsWrapperDiv,
  FooterShortsButtons,
  FooterShortsImg,
  FooterWrapper,
  FooterWriteButton,
  FooterWriteImg,
} from "../../../styles/layout/footer";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterWrapper>
      <FooterContentsWrapperDiv>
        <FooterShortsButtons
          onClick={() => {
            navigate("/shorts");
          }}
        >
          <FooterShortsImg
            src="/img/Shorts.png"
            width="auto"
            height="100%"
            alt="shorts 버튼"
          />
        </FooterShortsButtons>
        <FooterWriteButton
          onClick={() => {
            navigate("/write");
          }}
        >
          <FooterWriteImg
            src="/img/writeButton.png"
            width="auto"
            height="100%"
            alt="글작성 버튼"
          />
        </FooterWriteButton>
        <FooterShortsButtons>
          <FooterShortsImg
            src="/img/randomHip.png"
            width="auto"
            height="100%"
            alt="대동힙지도 버튼"
          />
        </FooterShortsButtons>
      </FooterContentsWrapperDiv>
    </FooterWrapper>
  );
};

export default Footer;
