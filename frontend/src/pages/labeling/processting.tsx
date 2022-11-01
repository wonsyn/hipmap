import Question from "./component/processing/question"
import Select from "./component/processing/selectButton"
import { WrapperDiv, ContainerDiv } from "./styles/processing"
import LinearWithValueLabel from "./component/processing/processBar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveCount1, saveCount2, saveCount3, saveCount4, saveCount5, saveCount6, saveCount7, saveCount8, saveCount9, saveCount10 } from "../../store/labeling/labelingStore"
import type { RootState } from "../../store/store"
function ProcessingPage(){
    const [processNumber, setProcessNumber] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const selectorCount = useSelector((store:RootState) => store.labelingReducer)
    console.log("무엇이 나올까?", selectorCount)
    const clickEvent1 = () => {
        if(processNumber === 0 ){
            dispatch(saveCount1())
        }
        else if (processNumber === 1){
            dispatch(saveCount3())
        }
        else if (processNumber === 2){
            dispatch(saveCount1())
        }
        else if (processNumber === 3){
            dispatch(saveCount3())
        }
        else if (processNumber === 4){
            dispatch(saveCount5())
        }
        else if (processNumber === 5){
            dispatch(saveCount7())
        }
        else if (processNumber === 6){
            dispatch(saveCount5())
        }
        else if (processNumber === 7){
            dispatch(saveCount9())
        }
        else if (processNumber === 8){
            dispatch(saveCount1())
        }
        else if (processNumber === 9){
            dispatch(saveCount9())
        }
        setProcessNumber(processNumber+1)
        if (processNumber > 8){
            // 결과 페이지로 navigate
            navigate(`/labeling/result`)
        }
    }
    const clickEvent2 = () => {
        if(processNumber === 0 ){
            dispatch(saveCount2())
        }
        else if (processNumber === 1){
            dispatch(saveCount4())
        }
        else if (processNumber === 2){
            dispatch(saveCount2())
        }
        else if (processNumber === 3){
            dispatch(saveCount4())
        }
        else if (processNumber === 4){
            dispatch(saveCount6())
        }
        else if (processNumber === 5){
            dispatch(saveCount8())
        }
        else if (processNumber === 6){
            dispatch(saveCount6())
        }
        else if (processNumber === 7){
            dispatch(saveCount10())
        }
        else if (processNumber === 8){
            dispatch(saveCount2())
        }
        else if (processNumber === 9){
            dispatch(saveCount10())
        }
        setProcessNumber(processNumber+1)
        if (processNumber > 8){
            // 결과 페이지로 navigate
            navigate(`/labeling/result`)
        }
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
                <Select clickEvent={clickEvent1} text={button1[processNumber]}/>
                <Select clickEvent={clickEvent2} text={button2[processNumber]}/>
            </ContainerDiv>
        </WrapperDiv>
    )
}

export default ProcessingPage