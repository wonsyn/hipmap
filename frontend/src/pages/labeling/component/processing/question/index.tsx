import { QuestionDiv } from "../../../styles/processing";

interface QuestionProps{
    text: string;
}

function Question({text}: QuestionProps){
    return(
        <QuestionDiv>
            {text}
        </QuestionDiv>
    )
}

export default Question