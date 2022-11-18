import {
  FooterContentsWrapperDiv,
  FooterShortsButtons,
  FooterShortsImg,
  FooterWrapper,
  FooterWriteButton,
  FooterWriteImg,
} from "../../../styles/layout/footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveSiGuDong, saveSameLabelingReset } from "../../../store/hipMap/hipMapStore";
const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      {(window.location.pathname === "/labeling/welcome" ||
      window.location.pathname === "/labeling/processing" ||
      window.location.pathname === "/labeling/result" ||
      window.location.pathname === "/login"||
      window.location.pathname === "/camera") ? (
        <></>
      ) : (
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
              {window.location.pathname !== "/write" && (
                <FooterWriteImg
                  src="/img/writeButton.png"
                  width="auto"
                  height="100%"
                  alt="글작성 버튼"
                />
              )}
            </FooterWriteButton>
            <FooterShortsButtons
              onClick={() => {
                dispatch(saveSameLabelingReset())
                dispatch(saveSiGuDong(
                  {
                    si: "",
                    gu: "",
                    dong: ""
                  }
                ))
                setTimeout(() => {
                  navigate("/hipmap/fullmap");
                }, 1);
              }}
            >
              <FooterShortsImg
                src="/img/randomHip.png"
                width="auto"
                height="100%"
                alt="대동힙지도 버튼"
              />
            </FooterShortsButtons>
          </FooterContentsWrapperDiv>
        </FooterWrapper>
      )}
    </>
  );
};

export default Footer;
