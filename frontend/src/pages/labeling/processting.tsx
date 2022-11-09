import Tie from "./component/processing/tie"
import Question from "./component/processing/question"
import Select from "./component/processing/selectButton"
import { WrapperDiv, ContainerDiv } from "./styles/processing"
import LinearWithValueLabel from "./component/processing/processBar"
import { useNavigate } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveCountE, saveCountI, saveCountN, saveCountS, saveCountT, saveCountF, saveCountJ, saveCountP, 
    saveCountChill, saveCountHeng, saveCountFashion, saveCountZzin } from "../../store/labeling/labelingStore"
import type { RootState } from "../../store/store"

function ProcessingPage(){
    const [processNumber, setProcessNumber] = useState<number>(0)
    const [animationNumber, setAnimationNumber] = useState<number>(0)
    const [E, setE] = useState(0)
    const [I, setI] = useState(0)
    const [N, setN] = useState(0)
    const [S, setS] = useState(0)
    const [T, setT] = useState(0)
    const [F, setF] = useState(0)
    const [J, setJ] = useState(0)
    const [P, setP] = useState(0)
    const [Chill, setChill] = useState(0)
    const [Heng, setHeng] = useState(0)
    const [Fashion, setFashion] = useState(0)
    const [Zzin, setZzin] = useState(0)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selectorCount = useSelector((store:RootState) => store.labelingReducer)
    const clickEvent1 = () => {
        if(processNumber === 0 ){
            setChill((prev) => {
                return prev + 2
            })
        }
        else if (processNumber === 1){
            setE((prev) => {
                return prev + 3
            })
        }
        else if (processNumber === 2){
            setJ((prev) => {
                return prev + 2
            })
        }
        else if (processNumber === 3){
            setI((prev) => {
                return prev + 2
            })
        }
        else if (processNumber === 4){
            setN((prev) => {
                return prev + 3
            })
            setHeng((prev) => {
                return prev + 1
            })
        }
        else if (processNumber === 5){
            setT((prev) => {
                return prev + 1
            })
        }
        else if (processNumber === 6){
            setS((prev) => {
                return prev + 3
            })
        }
        else if (processNumber === 7){
            setE((prev) => {
                return prev + 3
            })
            setHeng((prev) => {
                return prev + 1
            })
        }
        else if (processNumber === 8){
            setF((prev) => {
                return prev + 2
            })
            setN((prev) => {
                return prev + 2
            })
        }
        else if (processNumber === 9){
            setE((prev) => {
                return prev + 2
            })
            setN((prev) => {
                return prev + 1
            })
        }
        else if (processNumber === 10){
            setN((prev) => {
                return prev + 2
            })
        }
        setAnimationNumber(animationNumber+1)
        setTimeout(() => {
            setProcessNumber(processNumber+1)
        }, 300);
        if (processNumber > 9){
            dispatch(saveCountE({
                E : E
            }))
            dispatch(saveCountI({
                I : I
            }))
            dispatch(saveCountN({
                N : N
            }))
            dispatch(saveCountS({
                S : S
            }))
            dispatch(saveCountT({
                T : T
            }))
            dispatch(saveCountF({
                F : F
            }))
            dispatch(saveCountJ({
                J : J
            }))
            dispatch(saveCountP({
                P : P
            }))
            dispatch(saveCountChill({
                Chill : Chill
            }))
            dispatch(saveCountHeng({
                Heng : Heng
            }))
            dispatch(saveCountFashion({
                Fashion : Fashion
            }))
            dispatch(saveCountZzin({
                Zzin: Zzin
            }))
            console.log(E, I, N, S, T, P, J, Chill, Zzin, Fashion)
        
            //결과 페이지로 navigate
            navigate(`/labeling/result`)
        }
    }
    const clickEvent2 = () => {
        if(processNumber === 0 ){
           setHeng((prev) => {
            return prev + 2
           })
        }
        else if (processNumber === 1){
            setI((prev) => {
                return prev + 1
            })
        }
        else if (processNumber === 2){
           setP((prev) => {
            return prev + 2
           })
           setChill((prev) => {
            return prev + 2
           })
        }
        else if (processNumber === 3){
            setE((prev) => {
                return prev + 3
            })
            setFashion((prev) => {
                return prev + 3
            })
        }
        else if (processNumber === 4){
            setS((prev) => {
                return prev + 1
            })
        }
        else if (processNumber === 5){
            setF((prev) => {
                return prev + 3
            })
            setFashion((prev) => {
                return prev + 1
            })
        }
        else if (processNumber === 6){
            setN((prev) => {
                return prev + 4
            })
        }
        else if (processNumber === 7){
            setI((prev) => {
                return prev + 2
            })
            setZzin((prev) => {
                return prev + 2
            })
        }
        else if (processNumber === 8){
            setT((prev) => {
                return prev + 2
            })
            setS((prev) => {
                return prev + 2
            })
        }
        else if (processNumber === 9){
            setFashion((prev) => {
                return prev + 2
            })
            setZzin((prev) => {
                return prev + 3
            })
        }
        else if (processNumber === 10){
            setS((prev) => {
                return prev + 2
            })
        }
        setTimeout(() => {
            setProcessNumber(processNumber+1)
        }, 300);
        setAnimationNumber(animationNumber+1)
        if (processNumber > 9){
            dispatch(saveCountE({
                E : E
            }))
            dispatch(saveCountI({
                I : I
            }))
            dispatch(saveCountN({
                N : N
            }))
            dispatch(saveCountS({
                S : S
            }))
            dispatch(saveCountT({
                T : T
            }))
            dispatch(saveCountF({
                F : F
            }))
            dispatch(saveCountJ({
                J : J
            }))
            dispatch(saveCountP({
                P : P
            }))
            dispatch(saveCountChill({
                Chill : Chill
            }))
            dispatch(saveCountHeng({
                Heng : Heng
            }))
            dispatch(saveCountFashion({
                Fashion : Fashion
            }))
            dispatch(saveCountZzin({
                Zzin: Zzin
            }))
            console.log(E, I, N, S, T, P, J, Chill, Zzin, Fashion)

            //결과 페이지로 navigate
            navigate(`/labeling/result`)
        }
    }
    const question = [
        "잠에서 막 깬 내가 들을 노래는?",
        "오늘 친구랑 약속이 있는 걸 깜빡했다. 어떻게 하는 게 좋을까?", 
        "친구와 약속을 잡는 상황이다. 마무리 멘트로 어떤 말을 할까?", 
        "지나가는 할아버지의 바지가 매우 힙해보인다. 여기서 나는", 
        "약속 장소에 도착했는데 식당이 너무 힙한 나머지 입구가 안 보인다. 입구를 찾기 위해",
        "친구와 만난 장소는 Hip Place로 유명한 식당이다. 나는", 
        "주문한 음식이 나왔는데 갑자기 친구가 사후세계에 대해 묻는다", 
        "친구가 나한테 잘 맞을 것 같은 친구가 있다면서 지금 불러도 되는 지 묻는다", 
        '친구랑 즐겁게 놀고 다음 약속을 잡는다. 이 때 나는', 
        "집으로 돌아가는 길에 지하철 옆자리 사람이 갑자기 나보고 옷이 이쁘다며 어디서 샀냐고 물어본다",
        "내가 자면서 꾸고 싶은 꿈은?",
        // "WhatisHip이라고 입력하세요"
    ]
    const button1 = [
        "아침햇살 맞으면서 재즈",
        "친구에게 바로 전화한다", 
        "일정에 차질 생기지 않게 늦지 마라", 
        "그냥 지나간다", 
        "온 벽을 다 두드려본다",
        "딱히 신경쓰지 않고 주문부터 한다", 
        "무시하고 음식을 먹기 시작한다", 
        "새로운 사람과의 만남은 언제나 환영이니 기쁜 마음으로 허락한다", 
        "확실한 날짜가 안 잡혀도 언제든 다음에 보면 그만이다", 
        "옷 정보에 대해 상세히 얘기해준다",
        "환상적인 동화 속 주인공이 되는 꿈"
    ]
    const button2 = [
        "둠칫둠칫 국힙", 
        "전화는 부담스러우니 친구에게 카톡한다", 
        "늦지만 말고 천천히 조심히 와", 
        "할아버지와 대화를 시도한다", 
        "식당 후기를 검색한다", 
        "인증샷으로 유명한 입구에서 인증샷부터 찍는다", 
        "수저를 내려놓고 내가 지금까지 생각해왔던 사후세계에 대해 모든 것을 내뱉는다", 
        "많이 부담스러운 상황이니 정중히 거절한다", 
        "정확한 약속날짜가 나와야 심적으로 안정이 된다", 
        "대화를 피하고 옆칸으로 이동한다",
        "사랑하는 사람과 함께하는 꿈"
    ]
    return(
            <WrapperDiv key={animationNumber}>
                <ContainerDiv>
                    {/* <Tie/> */}
                    <LinearWithValueLabel number={animationNumber}/>
                    <Question text={question[processNumber]} number={processNumber}/>
                    <Select clickEvent={clickEvent1} text={button1[processNumber]} number={animationNumber}/>
                    <Select clickEvent={clickEvent2} text={button2[processNumber]} number={animationNumber}/>
                </ContainerDiv>
            </WrapperDiv>
    )
}

export default ProcessingPage