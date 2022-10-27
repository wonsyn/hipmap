import KakaoShare from "./component/result/kakaoShare"
import LabelingCharacter from "./component/result/labelingCharacter"
import LabelingDetail from "./component/result/labelingDetail"
import LabelingName from "./component/result/labelingName/indes"
import With from "./component/result/withButton"
import { WrappingDiv } from "./styles/result"
import { ContainerDiv } from "./styles/result"
import { selectLabeling, selectLabelingChar, selectLabelingDetail } from "./component/result/labelingCalc";
import { useEffect, useState } from "react"

 
function ResultPage(){
    const [labelingResult, setLabelingResult ] = useState<string>("");
    const [labelingChar, setLabelingChar ] = useState<string>("");
    const [labelingDetail, setLabelingDetail ] = useState<string[]>([]);
    useEffect(()=>{
        setLabelingResult(selectLabeling());
        setLabelingChar(selectLabelingChar());
        setLabelingDetail(selectLabelingDetail());
    },[])
    const clickEvent = () => {
       // 메인 페이지로 연결
    }

    return(
        <WrappingDiv>
            <ContainerDiv>
                <LabelingName name={labelingResult}/>
                <LabelingCharacter url={labelingChar}/>
                <LabelingDetail list={labelingDetail}/>
                <With clickEvent={clickEvent}/>
                <KakaoShare/>
            </ContainerDiv>
        </WrappingDiv>
    )
}

export default ResultPage