import KakaoShare from "./component/result/kakaoShare"
import LabelingCharacter from "./component/result/labelingCharacter"
import LabelingDetail from "./component/result/labelingDetail"
import LabelingName from "./component/result/labelingName/indes"
import With from "./component/result/withButton"
import { WrappingDiv } from "./styles/result"
import { ContainerDiv } from "./styles/result"
import { SelectLabeling, SelectLabelingChar, SelectLabelingDetail } from "./component/result/labelingCalc";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
 
function ResultPage(){
    const [labelingResult, setLabelingResult ] = useState<string>("");
    const [labelingChar, setLabelingChar ] = useState<string>("");
    const [labelingDetail, setLabelingDetail ] = useState<string[]>([]);
    const navigate = useNavigate()
    useEffect(()=>{
        setLabelingResult(SelectLabeling());
        setLabelingChar(SelectLabelingChar());
        setLabelingDetail(SelectLabelingDetail());
    },[])
    const clickEvent = () => {
       // 메인 페이지로 연결
       navigate(`/main`)
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