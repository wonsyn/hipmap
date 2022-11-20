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
import { useLocation } from "react-router-dom"

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
    
    const location = useLocation()
    console.log("뭐가 나오니?", location.state)
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
                return prev + 1
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
                return prev + 2
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
            if(location.state === null){
                navigate(`/labeling/result`)
            }
            else{
                navigate(`/labeling/result`, {
                    state: {
                        email: location.state.email,
                        snsSign: location.state.snsSign
                    } 
                })
            }
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
            setI((prev) => {
                return prev + 2
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
            if(location.state === null){
                navigate(`/labeling/result`)
            }
            else{
                navigate(`/labeling/result`, {
                    state: {
                        email: location.state.email,
                        snsSign: location.state.snsSign
                    } 
                })
            }
        }
    }
    const question = [
        `잠에서 막 깬 \n내가 들을 노래는?`,
        `오늘 친구랑 약속이 있는 걸 깜빡했다😱\n어떻게 하는 게 좋을까?`, 
        `친구랑 약속을 잡았다! \n마무리 멘트로 어떤 말을 할까?`, 
        `약속 장소 가는 길~ \n지나가는 할아버지 바지가 너무 힙하다. \n이때 나는`, 
        `약속 장소에 도착했다! \n그런데 식당이 너무 힙한 나머지 \n입구가 안 보인다. 입구를 찾기 위해`,
        `친구와 만난 장소는 \nHip Place로 유명한 식당이다. \n포토존이 북적거리는데 나는`, 
        `주문한 음식이 나왔다 \n그런데 갑자기 친구가 \n사후세계에 대해 묻는다`, 
        `친구가 나한테 \n잘 맞을 것 같은 친구가 있다며 \n지금 불러도 되는지 묻는다`, 
        `친구가 “다음에 또 보자~ㅎ.ㅎ ” 라고 할 때 \n속마음은??`, 
        `집으로 돌아가는 길 지하철🚈 \n옆사람이 갑자기 나보고 옷이 이쁘다며 \n어디서 샀냐고 물어본다`,
        `아 오늘 재밌었다~ \n  하루를 마무리 하면서 \n내가 잘 때 꾸고 싶은 꿈은?`,
        // "WhatisHip이라고 입력하세요"
    ]
    const button1 = [
        `아침햇살 맞으면서 재즈 🎵`,
        `친구에게 바로 전화한다 💦`, 
        `일정에 차질 생기지 않게 늦지마 ~ 🛴`, 
        `..그냥 지나간다 🏃`, 
        `내 직감대로 간다! 온 벽을 다 두드려본다 👊`,
        `딱히 신경쓰지 않고 주문부터 한다 ✋`, 
        `..무시하고 음식을 먹기 시작한다`, 
        `니 친구가 내 친구지~ 당장 불러 👌`, 
        `다음에 또 보는구나~`, 
        `아 이거 저번에 디스이즈스투챔피언에서 s/s로 출시된건데~ \n다 말해준다`,
        `환상적인 동화 속 주인공이 되는 꿈 🎆`
    ]
    const button2 = [
        `둠칫둠칫 국힙 🤟`, 
        `전화는 부담스러워.. 친구에게 카톡한다 📩`, 
        `천천히 조심히 와 🩰`, 
        `이건 운명이야.. 당장 할아버지에게 여쭤본다`, 
        `왜 이렇게 했지..? 식당 후기를 검색한다 🔍`, 
        `여기까지 왔는데~ 포토존에서 인증샷부터 찍는다📸`, 
        `수저를 내려놓고 내가 지금까지 생각해왔던 \n사후세계에 대한 모든 것들을 쏟아낸다`, 
        `아 부담스러운데 .. 거절한다 🥶`, 
        `다음에 또…? 그냥 하는 소리겟지.. `, 
        `대화를 피하고 웃으며 넘긴다 😅`,
        `사랑하는 사람과 함께하는 꿈 💖`
    ]
    console.log("animation", animationNumber)
    return(
            <WrapperDiv key={animationNumber}>
                <ContainerDiv>
                    {/* <Tie/> */}
                    <LinearWithValueLabel number={animationNumber}/>
                    <Question text={question[processNumber]} number={animationNumber}/>
                    <Select clickEvent={clickEvent1} text={button1[processNumber]} number={animationNumber}/>
                    <Select clickEvent={clickEvent2} text={button2[processNumber]} number={animationNumber}/>
                </ContainerDiv>
            </WrapperDiv>
    )
}

export default ProcessingPage