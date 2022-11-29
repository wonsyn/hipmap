import { useSelector } from "react-redux"
import type { RootState } from "../../../../store/store"
import { useState } from "react"
import result_sample1 from "../../../../assets/labeling/result/result_sample.png"

const labelingName1 = "Warm Android"
const labelingName2 = "Party Animal"
const labelingName3 = "Salt Of Hipster"
const labelingName4 = "A.K.A Efficiency"
const labelingName5 = "Sixth Sense Hipster"
const labelingName6 = "HumanLoversClub"
const labelingName7 = "Pure Hipster"
const labelingName8 = "Big Boss"
const labelingName9 = "Ill Hip"
const labelingName10 = "Hustler"

const labelingChar1 = result_sample1
const labelingChar2 = result_sample1
const labelingChar3 = result_sample1
const labelingChar4 = result_sample1
const labelingChar5 = result_sample1
const labelingChar6 = result_sample1
const labelingChar7 = result_sample1
const labelingChar8 = result_sample1
const labelingChar9 = result_sample1
const labelingChar10 = result_sample1


const labelingDetail1 = [
"따뜻한 안드로이드같은 힙을 가진 당신", 
"최대한 객관성을 유지하려고 노력하는 편이에요",
"리액션을 잘 못하는 편이라 괜히 어색한 웃음을 지을 때가 많아요",
"지적 호기심이 대단해요. 혹시 외계인의 존재를 믿지는 않으신가요?",
"감정에 흔들리지 않는 관찰자로서 사람과 일에 접근해요", 
"컨셉질 장인이에요. 하지만 내가 컨셉질하는 걸 다른 사람이 알아채면 절대 안돼요", 
"타인의 잘못된 논리를 짚어내서 타인을 상처입히기도 해요",
"평소에 좋아하던 사람이라도 한순간에 정 떨어진 적 꽤 있어요"]
const labelingDetail2 = [
"파티 애니멀같은 힙을 가진 당신", 
"누구보다 빠르게, 남들과는 다르게 사람들을 이끄는 브레이크가 고장난 에잇톤트럭형 힙스터", 
"통통 튀는 아이디어로 주변을 감탄하게 하는 타입이에요", 
"4차원 저세상텐션으로 주변을 항상 즐겁게 만들어줘요", 
"새로운 해결책이나 가능성을 제시하는데 탁월한 능력을 가졌어요", 
"새로운 사람, 새로운 사건, 새로운 주제에 높은 관심을 보여요", 
"일을 벌려놓고 흥미가 떨어져 끝맺음이 약하거나 반복적인 환경에 거부감을 갖기도 해요", 
"사고 싶은 게 생기면 충동적으로 사는 편이에요"]
const labelingDetail3 = [
"힙스터의 소금같은 당신", 
"알면 알수록 진국인 외유내강인 사람이에요", 
"주변 친구들이 고민상담을 자주 하지는 않나요?", 
"내부에 쌓여있는 감각을 바탕으로 통찰력이 뛰어난 타입이에요", 
"안정적으로 과거의 데이터들의 경향성을 찾고 프로세스를 체계적으로 정립하는 것을 선호해요", 
"그렇기 때문에 경험이 없는 일에 취약해지기 쉬워요", 
"이상을 꿈꾸지만 한 편으로는 굉장히 현실적이에요", 
"내면이 단단해서 주변에 쉽게 휘둘리지 않아요"]
const labelingDetail4 = [
"본질을 꿰뚫어보는 호크아이같은 힙을 가진 당신", 
"솔직함을 빼고는 당신을 논할 수 없어요", 
"한가지 주제가 주어지면 그 주제를 내핵까지 뚫어버리는 덕후형이에요", 
"작정하고 덤벼들면 논문 세편 쓸 분량의 논리를 들고와서 사람을 가둬두고 논리로 패요", 
"무뚝뚝해 보이지만 말하다 보면 다정다감을 느낄 수 있는 나름 신비주의가 있는 사람이에요", 
"깊게 고민해서 만들어낸 나의 관점과 판단을 지나치게 신뢰해 잘못된 판단을 했을 경우에도 자신의 논리에 함몰되어 고집을 부리기도 해요", 
"일을 할 때 효율성과 합리성을 잘 따져서 유연하게 대처해요",
"고민이나 걱정을 길게 안해요. 그 시간에 해결방안을 찾는 편이에요"]
const labelingDetail5 = [
"식스센스 힙을 가진 당신", 
"새로운 것을 보고, 듣고, 체험하고, 먹어보며 새로운 자극과 경험을 추구해요", 
"문찐이 뭐지? 누구보다 빠르게 유행을 알아내는 트렌드세터예요", 
"넘치는 에너지로 주변을 밝게 만들어주는 편이에요", 
"호기심이 왕성하고 활동적이며 현재를 즐기는 자유로운 영혼이에요", 
"자유로운 영혼이지만 센스가 좋아서 주변에서 사람 좋다는 소리 많이 들어요", 
"사람들에게 도움을 잘 주지만 기브앤테이크를 중요시해요", 
"의사 소통 능력과 언변 능력이 좋아 본인도 지적인 사람을 좋아해요", 
"사람들을 이끄는 힘이 있어요. 팀원보다 리더가 어울려요"]
const labelingDetail6 = [
"인류애로 무장한 프로공감러같은 힙을 가진 당신", 
"사이비 교주처럼 주변에서 인기가 많지 않나요?", 
"타인에게 배려심이 깊고 타인의 마음에 잘 공감해줘 다른 사람들과 조화롭게 지내요", 
"주변 사람들의 감정을 편안하고 행복하게 해주기 위해 내 주변 환경과 조건들을 통제할 때도 있어요", 
"다른 사람의 행복을 추구하다보니 공정성과 객관성을 잃기도 해요", 
"경쟁을 싫어하고 싫은 소리를 잘 못해요", 
"정의로운 편이에요. 약자 괴롭히는 꼴을 보면 그냥은 못 지나쳐요"]
const labelingDetail7 = [
"베이직한 순수 힙스터인 당신",
"주변인들에게 힙스터라는 소리를 자주 듣지 않나요?", 
"나만의 아이덴티티, 취향, 개성에 대한 가치관이 확고해 나만의 힙을 만들어가요", 
"내 감정에 솔직한 사람이에요. 내가 중요하듯 타인의 개성을 인정하기 때문에 타인을 이해하고 수용하는데 있어 개방적이에요",
"게으른 완벽주의자예요. 일을 시작하기까지 오래 걸리지만 일단 시작하면 완벽히 끝내야 적성이 풀려요", 
"주목받는 거 싫어하지만 누군가 관심을 주면 은근히 좋아해요", 
"자신의 감정에 지나치게 매몰되어 주체하지 못할 때가 있어요"]
const labelingDetail8 = [
"빅 보스같은 힙을 가진 당신", 
"누구보다 빠르게, 남들과는 다르게 사람들을 이끄는 브레이크가 고장난 에잇톤트럭", 
"야망과 포부가 크고 실천력이 있어서 마음 먹은 일을 반드시 해내요",  
"팀프로젝트의 하드캐리어가 된 적이 많지 않나요? 세상을 이끄는 리더쉽, 앞장서는 성향이 있어요", 
"나에게도 남에게도 엄격한 편이에요", 
"눈물 별로 없어요. 외로움도 잘 안 타요.",
"기성세대와 가장 충돌이 많은 타입의 힙스터에요", ]
const labelingDetail9 = ["","", "", "", "", "", "", "", "", "", "", "", ""]
const labelingDetail10 = ["","", "", "", "", "", "", "", "", "", "", "", ""]

function LabelingCalc(){
    // 계산해서 labelingname을 return해옴
    const labelingSelector = useSelector((store:RootState) => store.labelingReducer)
    if (((labelingSelector.type1.E <= labelingSelector.type1.I) && 
    (labelingSelector.type2.N <= labelingSelector.type2.S) && 
    (labelingSelector.type3.F < labelingSelector.type3.T) && 
    (labelingSelector.type4.J <= labelingSelector.type4.P)) || 
    ((labelingSelector.type1.E <= labelingSelector.type1.I) && 
    (labelingSelector.type2.N > labelingSelector.type2.S) && 
    (labelingSelector.type3.F < labelingSelector.type3.T) && 
    (labelingSelector.type4.J <= labelingSelector.type4.P))){
        return labelingName1
    }
    else if (((labelingSelector.type1.E > labelingSelector.type1.I) && 
    (labelingSelector.type2.N > labelingSelector.type2.S) && 
    (labelingSelector.type3.F < labelingSelector.type3.T) && 
    (labelingSelector.type4.J <= labelingSelector.type4.P)) || 
    ((labelingSelector.type1.E > labelingSelector.type1.I) && 
    (labelingSelector.type2.N > labelingSelector.type2.S) && 
    (labelingSelector.type3.F >= labelingSelector.type3.T) && 
    (labelingSelector.type4.J <= labelingSelector.type4.P))){
        return labelingName2
    }
    else if (((labelingSelector.type1.E <= labelingSelector.type1.I) && 
    (labelingSelector.type2.N <= labelingSelector.type2.S) && 
    (labelingSelector.type3.F < labelingSelector.type3.T) && 
    (labelingSelector.type4.J > labelingSelector.type4.P)) || 
    ((labelingSelector.type1.E <= labelingSelector.type1.I) && 
    (labelingSelector.type2.N <= labelingSelector.type2.S) && 
    (labelingSelector.type3.F >= labelingSelector.type3.T) && 
    (labelingSelector.type4.J > labelingSelector.type4.P))){
        return labelingName3
    }
    else if (((labelingSelector.type1.E <= labelingSelector.type1.I) && 
    (labelingSelector.type2.N > labelingSelector.type2.S) && 
    (labelingSelector.type3.F < labelingSelector.type3.T) && 
    (labelingSelector.type4.J > labelingSelector.type4.P)) || 
    ((labelingSelector.type1.E <= labelingSelector.type1.I) && 
    (labelingSelector.type2.N > labelingSelector.type2.S) && 
    (labelingSelector.type3.F >= labelingSelector.type3.T) && 
    (labelingSelector.type4.J > labelingSelector.type4.P))){
        return labelingName4
    }
    else if (((labelingSelector.type1.E > labelingSelector.type1.I) && 
    (labelingSelector.type2.N <= labelingSelector.type2.S) && 
    (labelingSelector.type3.F < labelingSelector.type3.T) && 
    (labelingSelector.type4.J <= labelingSelector.type4.P)) || 
    ((labelingSelector.type1.E > labelingSelector.type1.I) && 
    (labelingSelector.type2.N <= labelingSelector.type2.S) && 
    (labelingSelector.type3.F >= labelingSelector.type3.T) && 
    (labelingSelector.type4.J <= labelingSelector.type4.P))){
        return labelingName5
    }
    else if (((labelingSelector.type1.E > labelingSelector.type1.I) && 
    (labelingSelector.type2.N <= labelingSelector.type2.S) && 
    (labelingSelector.type3.F >= labelingSelector.type3.T) && 
    (labelingSelector.type4.J > labelingSelector.type4.P)) || 
    ((labelingSelector.type1.E > labelingSelector.type1.I) && 
    (labelingSelector.type2.N > labelingSelector.type2.S) && 
    (labelingSelector.type3.F >= labelingSelector.type3.T) && 
    (labelingSelector.type4.J > labelingSelector.type4.P))){
        return labelingName6
    }
    else if (((labelingSelector.type1.E <= labelingSelector.type1.I) && 
    (labelingSelector.type2.N <= labelingSelector.type2.S) && 
    (labelingSelector.type3.F >= labelingSelector.type3.T) && 
    (labelingSelector.type4.J <= labelingSelector.type4.P)) || 
    ((labelingSelector.type1.E <= labelingSelector.type1.I) && 
    (labelingSelector.type2.N > labelingSelector.type2.S) && 
    (labelingSelector.type3.F >= labelingSelector.type3.T) && 
    (labelingSelector.type4.J <= labelingSelector.type4.P))){
        return labelingName7
    }
    else if (((labelingSelector.type1.E > labelingSelector.type1.I) && 
    (labelingSelector.type2.N <= labelingSelector.type2.S) && 
    (labelingSelector.type3.F < labelingSelector.type3.T) && 
    (labelingSelector.type4.J > labelingSelector.type4.P)) || 
    ((labelingSelector.type1.E > labelingSelector.type1.I) && 
    (labelingSelector.type2.N > labelingSelector.type2.S) && 
    (labelingSelector.type3.F < labelingSelector.type3.T) && 
    (labelingSelector.type4.J > labelingSelector.type4.P))){
        return labelingName8
    }
}


export function SelectLabeling(){
    const result = LabelingCalc()
    return result;
       
}

export function SelectLabelingChar(){
    const result = LabelingCalc()
    if(result === labelingName1){
        return labelingChar1
    }
    else if(result === labelingName2){
        return labelingChar2
    }
    else if(result === labelingName3){
        return labelingChar3
    }
    else if(result === labelingName4){
        return labelingChar4
    }
    else if(result === labelingName5){
        return labelingChar5
    }
    else if(result === labelingName6){
        return labelingChar6
    }
    else if(result === labelingName7){
        return labelingChar7
    }
    else if(result === labelingName8){
        return labelingChar8
    }
    else if(result === labelingName9){
        return labelingChar9
    }
    else if(result === labelingName10){
        return labelingChar10
    }
}

export function SelectLabelingDetail(){
    const result = LabelingCalc()
    if(result === labelingName1){
        return labelingDetail1
    }
    else if(result === labelingName2){
        return labelingDetail2
    }
    else if(result === labelingName3){
        return labelingDetail3
    }
    else if(result === labelingName4){
        return labelingDetail4
    }
    else if(result === labelingName5){
        return labelingDetail5
    }
    else if(result === labelingName6){
        return labelingDetail6
    }
    else if(result === labelingName7){
        return labelingDetail7
    }
    else if(result === labelingName8){
        return labelingDetail8
    }
    else if(result === labelingName9){
        return labelingDetail9
    }
    else if(result === labelingName10){
        return labelingDetail10
    }
}
