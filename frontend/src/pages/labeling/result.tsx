import KakaoShare from "./component/result/kakaoShare"
import LabelingCharacter from "./component/result/labelingCharacter"
import LabelingDetail from "./component/result/labelingDetail"
import LabelingName from "./component/result/labelingName"
import With from "./component/result/withButton"
import { WrappingDiv } from "./styles/result"
import { ContainerDiv } from "./styles/result"
import { SelectLabeling, SelectLabelingChar, SelectLabelingDetail } from "./component/result/labelingCalc";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
 
function ResultPage(){
    const [labelingResult, setLabelingResult ] = useState<any>("");
    const [labelingChar, setLabelingChar ] = useState<any>("");
    const [labelingDetail, setLabelingDetail ] = useState<any>([]);
    const navigate = useNavigate()
    const labelName = SelectLabeling()
    const labelChar = SelectLabelingChar()
    const labelDetail = SelectLabelingDetail()
    useEffect(()=>{
        setLabelingResult(labelName);
        setLabelingChar(labelChar);
        setLabelingDetail(labelDetail);
    },[])
    const clickEvent = () => {
       // 메인 페이지로 연결
       navigate(`/signup`, {state : {
        labelingName: labelingResult
       }})
    }

    return(
        <WrappingDiv>
            <ContainerDiv>
                <LabelingName name={labelingResult}/>
                <LabelingCharacter name={labelingResult}/> 
                <LabelingDetail list={labelingDetail}/>
                <With clickEvent={clickEvent}/>
                <KakaoShare/>
            </ContainerDiv>
        </WrappingDiv>
    )
}

export default ResultPage