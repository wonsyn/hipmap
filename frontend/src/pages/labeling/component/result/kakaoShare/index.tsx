import { KakaoShareDiv, KakaoShareImg } from "../../../styles/result";
import kakao_share from "../../../../../assets/labeling/result/kakao_share.png"


function KakaoShare(){

    const shareKakao = () => {
        window.Kakao.Link.sendCustom({
          templateId: 84803, // 내가 만든 템플릿 아이디를 넣어주면 된다
        });
      };

    return(
        <KakaoShareDiv>
            이 테스트를 공유하고 싶다면?
            <br /><br />
            <KakaoShareImg onClick={shareKakao} src={kakao_share} alt="카카오링크 보내기 버튼"/>
        </KakaoShareDiv>
    )
}

export default KakaoShare