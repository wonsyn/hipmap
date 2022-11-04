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
    const [processNumber, setProcessNumber] = useState(0)
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
        setProcessNumber(processNumber+1)
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
            // 결과 페이지로 navigate
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
        setProcessNumber(processNumber+1)
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
        "하음....잘 잤다~! 잠에서 깨어난 당신은 노래를 들으려고 합니다. 어떤 노래를 들으시겠습니까?",
        "아...오늘 약속이 있는 것 같은데 깜빡한 것 같다. 어떻게 하는 게 좋을까?", 
        "친구와 약속장소를 정하고 있다. 그래, 그럼 거기서 보자! 땅땅땅~!! 휴, 겨우 정했다. 그 다음 나의 대사는??", 
        "여기는 힙지로... 역시나 힙한 사람들이 많이 지나간다. 그 중 지나가는 할아버지의 바지가 매우 힙해보인다?? 어디서 샀는 지 한 번 물어볼까?", 
        "약속 장소에 도착했는데 식당이 너무 힙한 나머지 입구가 안 보인다. 입구야 도대체 어디있는거니~~~",
        "친구와 만난 장소는 Hip Place로 유명한 식당이다. 이런 식당에서 밥만 먹는 건 참을 수 없지!", 
        "자리에 앉았다. 그런데 갑자기 친구가 사후세계에 대해 묻는다.", 
        "친구가 나한테 잘 맞을 것 같은 친구가 있다면서 지금 불러도 되는 지 묻는다.", 
        '친구랑 즐겁게 놀았다. 친구가 "다음에 또 보자~^^" 라고 한다. 그 때의 내 속마음은? ', 
        "집으로 돌아가는 길, 지하철 옆자리 사람이 갑자기 나보고 옷이 이쁘다며 어디서 샀냐고 물어본다.",
        "집으로 무사히 들어온 당신, 씻고 잘 준비를 한다. '와~ 재미있는 하루였어! 좋은 꿈까지 꾸면 좋겠다~~' 이 때, 당신이 꾸고 싶은 꿈은?",
        // "WhatisHip이라고 입력하세요"
    ]
    const button1 = [
        "아침햇살 맞으면서 재즈~",
        "친구에게 바로 전화한다. 친구야 미안해~", 
        "일정에 차질 생기지 않게 늦지 마라", 
        "It's very over. 그냥 지나갑시다", 
        "내 자신, 하고싶은대로 한다! 온 벽을 다 두드려본다!",
        "그래도 금강산도 식후경! 주문 먼저 한다.", 
        "뭔 헛소리여~ 이상한 소리하지말고 빨리 밥이나 먹자~!", 
        "친구의 친구는 당연 내 친구지! 야 같이 놀게 빨리 불러! 재밌겠다~!!!", 
        "뭐 그냥 다음에 또 보자고 하는 소리구나~ 큰 의미부여를 하지 않는다.", 
        "이 옷으로 말할 것 같으면 저번에 DaeDongHipZido에서  S/S 로 출시된건데요.... 20분동안 상세히 말해준다.",
        "환상적인 동화 속 주인공이 되는 꿈"
    ]
    const button2 = [
        "둠칫둠칫 국힙이지~", 
        "전화는 부담스러워... 친구에게 카톡한다. 친구야 미안해...", 
        "천천~히 여유롭게 만나자? 알잘딱갈센??", 
        "와 이건 운명이다! 당장 물어본다!", 
        "아니 그냥 검색해서 입구 어디있는 지 찾아보면 되잖아? 식당 후기 검색해서 입구를 찾는다.", 
        "인증샷으로 유명한 입구에서 인증샷부터 찍는다. 친구야 인스타갬성 알지??", 
        "이 순간만을 기다려왔다.....!!!! 내가 지금까지 생각해왔던 사후세계에 대해 모든 것을 내뱉는다. 제가 LA에 있을 때부터 모든 게 시작됐죠....", 
        "아....잘 맞을 것 같아도 난 별로....그냥 둘이 다음에 따로 만나....^^", 
        "다음에 또 만나....? 언제 만나지....? 만날 수는 있을까...? 다음에도 이상한 소리하면 어떡하지??", 
        "아 이 옷이요? 어....죄송합니다아아아아아아!!! 하고 다른 칸으로 도망간다.",
        "사랑하는 사람과 함께하는 꿈"
    ]
    return(
            <WrapperDiv key={processNumber}>
                <ContainerDiv>
                    <Tie/>
                    <LinearWithValueLabel number={processNumber}/>
                    <Question text={question[processNumber]}/>
                    <Select clickEvent={clickEvent1} text={button1[processNumber]}/>
                    <Select clickEvent={clickEvent2} text={button2[processNumber]}/>
                </ContainerDiv>
            </WrapperDiv>
    )
}

export default ProcessingPage