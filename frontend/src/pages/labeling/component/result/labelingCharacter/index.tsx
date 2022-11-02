import { LabelingCharacterDiv } from "../../../styles/result";
import { ImgContainer } from "../../../../main/styles/ImgStyle";
import result_sample from "../../../../../assets/labeling/result/result_sample.png"
import { SelectLabelingChar } from "../labelingCalc";

interface LabelingCharacterProps{
    url: string
}

function LabelingCharacter({url}: LabelingCharacterProps){
    return(
        <LabelingCharacterDiv>
           <ImgContainer src={url} alt="레이블링 케릭터"/>
        </LabelingCharacterDiv>
    )
}

export default LabelingCharacter