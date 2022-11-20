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
"감정에 흔들리지 않는 관찰자로서 사람과 일에 접근", 
"원인 그 자체를 객관적으로 분석하는 것을 좋아해요", 
"지적 호기심이 대단해요 혹시 외계인의 존재를 믿지는 않으신가요?", 
"항상 새로운 지식을 받아들이려 하고 이름 바탕으로 논리적으로 설명하며 비판적 시각을 가짐",
"타인의 잘못된 논리를 짚어내며 비판적이고 공격적으로 논리를 개진해 타인을 상처입히기도 함"]
const labelingDetail2 = [
"파티 애니멀같은 힙을 가진 당신", 
"누구보다 빠르게, 남들과는 다르게 사람들을 이끄는 브레이크가 고장난 에잇톤트럭형 힙스터", 
"전혀 생뚱맞은 주제를 연상해내는 듯 보이지만 알고 보면 그 주제들은 같은 본질을 가지고 있으며 이를 직관적으로 인식", 
"통통 튀는 아이디어로 주변을 감탄하게 하는 타입이에요", 
"4차원 저세상텐션으로 주변을 즐겁게 만들어줘요", 
"새로운 해결책이나 가능성을 제시하는데 탁월한 능력", 
"창의적인 아이디어를 만들어냄", 
"새로운 사람, 새로운 사건, 새로운 주제에 높은 관심을 보여요", 
"일을 벌려놓고 흥미가 떨어져 끝맺음이 약하거나 반복적인 환경에 거부감을 갖기도 해요", 
"지나친 몽상가적인 경향을 띄며 현실감각을 잃기도 함"]
const labelingDetail3 = [
"힙스터의 소금같은 당신", 
"내부에 쌓여있는 감각을 바탕으로 판단", 
"안정적으로 일하고 과거의 데이터들의 경향성을 찾고 프로세스를 체계적으로 정립하는 것을 선호", 
"경험에 없는일에 취약해지기 쉬움", 
"데이터베이스를 바탕으로 판단하고 행동", 
"세상의 소금"]
const labelingDetail4 = [
"본질을 꿰뚫어보는 호크아이같은 힙을 가진 당신", 
"주어진 주제에 어떤 숨겨진 의미와 미래 가치가 있는지를 직관적으로 판단하는 성향", 
"한가지 주제가 주어지면 그 주제를 내핵까지 뚫어버리는 덕후형", 
"작정하고 덤벼들면 논문 세편 쓸 분량의 논리를 들고와서 사람을 가둬두고 후두려 팬다", 
"무뚝뚝해 보이지만 말하다 보면 다정다감을 느낄 수 있는 나름 신비주의가 있는 사람", 
"모든 힙함을 보며 흥미롭게 구경하는걸 좋아함", 
"너무 깊고 본질적인 부분이나 지나치케 크고 장기적인 계획에 집중해 현실적으로 스케일이 너무 커져 이루지 못하는 경우도 많다", 
"깊게 고민해서 만들어낸 나의 관점과 판단을 지나치케 신뢰하므로 잘못된 판단을 했을 경우에도 자신의 편향된 논리에 함몰되어 고집을 부리기도 한다", 
"performance", 
"efficient", 
"구체적인 현실에서의 가능성보다 정신세계에서의 가능성을 촉지하는 것이 그의 주 기능의 특징",
"이면에 감춰진 논리요소, 합리적 인과관계, 구조적 성질 파악"]
const labelingDetail5 = [
"식스센스 힙을 가진 당신", 
"외부에 존재하는 감각을 인식하며 새로운 것을 보고, 듣고, 체험하고, 먹어보며 경험과 데이터를 얻어가는 성향이에요", 
"새로운 자극과 경험을 추구하는 성향", 
"문찐이 뭐지? 누구보다 빠르게 유행을 알아내는 트렌드세터", 
"넘치는 에너지로 주변을 밝게 만들어주는 편이에요", 
"호기심이 왕성하고 활동적이며 현재를 즐긴다", 
"행동력이 강함", 
"고민하지 않고뛰어드는 성향 충동적임", 
"첫 데이트에 스냅백을 쓰고 나오는 타입", 
"밝고 자유로운 영혼", 
"센스도 좋아서 사람들에게 인기가 많아요"]
const labelingDetail6 = [
"인류애로 무장한 프로공감러같은 힙을 가진 당신", 
"사이비 교주처럼 인기가 많지 않나요?", 
"주변 사람들의 감정을 편안하고 행복하게 해주기 위해 내 주변 환경과 조건들을 통제", 
"타인에게 배려심이 깊고 타인의 마음에 잘 공감해줘 다른사람들과 조화롭게 지내요", 
"다른 사람의 행복을 추구하다보니 공정성과 객관성을 잃는 단점도 있음", 
"모두의 행복과 평안을 위해서라면 개인의 개성을 통제하려 들기도함", 
"주변 사람들의 감정에 민감하게 관심을 갖는 편", 
"모두의 화합과 평화를 개인적 가치보다 우선시하기도 한다"]
const labelingDetail7 = [
"베이직한 순수 힙스터인 당신",
"주변인들에게 힙스터라는 소리를 자주 듣지 않나요?", 
"내 감정에 솔직한 사람", 
"내가 인식하는 현재의 감정을 중요하게 생각함", 
"다른 사람들 각자가 갖는 감정, 개성, 취향 등 역시 존중받아야한다고 생각함", 
"각자의 개성이라는 독립적인 가치를 추구", 
"나만의 아이덴티티, 취향 개성에 대한 가치관이 확고해지는 편이다", 
"자신의 감정에 지나치게 매몰되어 주체하지 못할 때가 있음", 
"나의 감정과 신념이 중요하듯 타인의 내면에 내재되어 있는 개성을 인정하기 때문에 타인을 이해하고 수용하는데 있어 개방적임"]
const labelingDetail8 = [
"빅 보스같은 힙을 가진 당신", 
"누구보다 빠르게, 남들과는 다르게 사람들을 이끄는 브레이크가 고장난 에잇톤트럭", 
"행동대장", 
"고집이 매우 셈", 
"본인도 책잡힐 짓 안함", 
"세상을 이끄는 리더쉽, 앞장서는 성향", 
"나의 목적과 생각을 현실화하기 위해 앞장서는 성향", 
"실천력과 높은 리더쉽", 
"비전을 가지고 사람들을 활력적으로 이끌어가는 사람들", 
"이미 판단이 끝난 사실을 바탕으로 행동해서 외부 세계에 영향을 주는 성향", 
"머리 속에서 판단이 완료된 목표나 결정된 사실들을 달성하기 위해 외부 자원들을 통제해서 내 눈앞에서 그 일이 체계적으로 조직화되도록 만드는 능력을 가짐"]
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
