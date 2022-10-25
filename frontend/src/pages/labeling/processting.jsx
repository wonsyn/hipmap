import Question from "./component/processing/question"
import Select from "./component/processing/selectButton"
import { WrapperDiv, ContainerDiv } from "./styles/processing"
import LinearWithValueLabel from "./component/processing/processBar"

import { useState } from "react"
function ProcessingPage(){
    const [processNumber, setProcessNumber] = useState(0)
    const clickEvent = () => {
        if (processNumber > 9){
            // 결과 페이지로 navigate
        }
        setProcessNumber(processNumber+1)
    }
    console.log(processNumber)
    const question = [
        "111111", "22222222222", "33333333333", "444444444444444", "555555555555555",
        "666666666", "7777777777", "888888888", "99999999", "101010101010101010"
    ]
    const button1 = [
        "gdgdgd", "23sdfsfwe", "sdfdsarwe", "21t2twtwe", "4t4y3y5yhr",
        "cbxbhfh", "nghjhykyr", "adfwyhjyu", "dfgntyk", "gfhtljpyo"
    ]
    const button2 = [
        "qwer", "asdf", "zxcv", "erty", "dfgh", "ryuh", "ghjk", "yujkh", "bnmhj", "fghrty"
    ]
    return(
        <WrapperDiv>
            <ContainerDiv>
                <LinearWithValueLabel number={processNumber}/>
                <Question text={question[processNumber]}/>
                <Select clickEvent={clickEvent} text={button1[processNumber]}/>
                <Select clickEvent={clickEvent} text={button2[processNumber]}/>
            </ContainerDiv>
        </WrapperDiv>
    )
}

export default ProcessingPage