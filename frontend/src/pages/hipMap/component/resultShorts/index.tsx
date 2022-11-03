import { ShortsWrappingDiv, ShortsDiv, ShortsImage1, ShortsImage2, ShortsImage3, ShortsImage4, ShortsImage5, ShortsImage6 } from "../../styles/result"
import bg1 from "../../../../assets/hipMap/bg1.jpg"
import bg2 from "../../../../assets/hipMap/bg2.png"
import bg3 from "../../../../assets/hipMap/bg3.jpg"
import bg4 from "../../../../assets/hipMap/bg4.jpg"
import bg5 from "../../../../assets/hipMap/bg5.jpg"
import bg6 from "../../../../assets/hipMap/bg6.jpg"
function ResultShorts(){
    return(
        <ShortsWrappingDiv>
            <ShortsDiv>
                <ShortsImage1 src={bg1} alt="123" />
            </ShortsDiv>
            <ShortsDiv>
                <ShortsImage2 src={bg2} alt="234" />
            </ShortsDiv>
            <ShortsDiv>
                <ShortsImage3 src={bg3} alt="345" />
            </ShortsDiv>
            <ShortsDiv>
                <ShortsImage4 src={bg4} alt="456" />
            </ShortsDiv>
            <ShortsDiv>
                <ShortsImage5 src={bg5} alt="765" />
            </ShortsDiv>
            <ShortsDiv>
                <ShortsImage6 src={bg6} alt="168" />
            </ShortsDiv>
        </ShortsWrappingDiv>
    )
}

export default ResultShorts