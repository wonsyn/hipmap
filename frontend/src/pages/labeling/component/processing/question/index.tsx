import { QuestionDiv } from "../../../styles/processing";

interface QuestionProps{
    text: string;
    number: number;

}

function Question({text, number}: QuestionProps){
    return(<>
        {console.log(number)}
        <QuestionDiv number={number}>
            {text &&
          text.split("\n").map((line, index) => {
            return (
              <>
                {line}
                <br />
              </>
            );
          })}
        </QuestionDiv>
    
    </>
    )
}

export default Question