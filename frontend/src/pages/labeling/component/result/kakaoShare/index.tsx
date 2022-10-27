import { KakaoShareDiv, KakaoShareButton } from "../../../styles/result";
import kakao_share from "../../../../../assets/labeling/result/kakao_share.png"


function KakaoShare(){

    const shareKakao = () => {
        window.Kakao.Link.sendCustom({
          templateId: 84803, // 내가 만든 템플릿 아이디를 넣어주면 된다
        });
      };

    return(
        <KakaoShareDiv>
            친구의 결과를 알고싶다면?
            <KakaoShareButton onClick={shareKakao}>
        <img
          src={kakao_share}
          alt="카카오링크 보내기 버튼"
        />
      </KakaoShareButton>
        </KakaoShareDiv>
    )
}

export default KakaoShare