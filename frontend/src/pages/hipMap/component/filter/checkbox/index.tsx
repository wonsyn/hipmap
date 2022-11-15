import { CheckBoxDiv, FilterCheckBox } from "../../../styles/fullmap"
import { saveSameLabelingCheck } from "../../../../../store/hipMap/hipMapStore"
import { useDispatch } from "react-redux"

function CheckBox(){    
    const dispatch = useDispatch()
    function CheckBoxClick(){
        dispatch(saveSameLabelingCheck())
    }
    
    return(
        <CheckBoxDiv>
               <FilterCheckBox type="checkbox" onClick={() => CheckBoxClick()}></FilterCheckBox>
               같은 레이블링인 사람들
        </CheckBoxDiv>
    )
}

export default CheckBox