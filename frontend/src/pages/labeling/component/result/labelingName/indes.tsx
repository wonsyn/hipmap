import { LabelingNameDiv } from "../../../styles/result";

interface LabelingNameProps{
    name: string
}

function LabelingName({name}: LabelingNameProps){
    return(
        <LabelingNameDiv>
            {name}
        </LabelingNameDiv>
    )
}

export default LabelingName