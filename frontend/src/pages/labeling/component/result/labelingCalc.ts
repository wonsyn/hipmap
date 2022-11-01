import { useSelector } from "react-redux"
import type { RootState } from "../../../../store/store"

import result_sample1 from "../../../../assets/labeling/result/result_sample.png"
const labelingName1 = "보헤미안 힙스터"
const labelingName2 = "길 잃은 눈동자"
const labelingName3 = "뉴욕 갱스터"

const labelingChar1 = result_sample1

const labelingDetail1 = ["1111111111111111","222222222222222", "33333333333333333333"]

function LabelingCalc(){
    const selectorCount = useSelector((store:RootState) => store.labelingReducer)
    // 계산해서 labelingname을 return해옴
}


export function SelectLabeling(){
    return labelingName1;
       
}

export function SelectLabelingChar(){
    return labelingChar1
}

export function SelectLabelingDetail(){
    return labelingDetail1
}
