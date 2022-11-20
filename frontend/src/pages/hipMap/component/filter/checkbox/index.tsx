import { CheckBoxDiv, FilterCheckBox } from "../../../styles/fullmap"
import { saveSameLabelingCheck } from "../../../../../store/hipMap/hipMapStore"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"

function CheckBox(){    
    const dispatch = useDispatch()
    const location = useLocation()
    function CheckBoxClick(){
        dispatch(saveSameLabelingCheck())
    }
    if(location.state === null){
        return(
            <CheckBoxDiv>
                   <FilterCheckBox type="checkbox" id="checkbox" onClick={() => CheckBoxClick()}></FilterCheckBox>
                <label htmlFor="checkbox" >
                   같은 레이블링인 사람들만
                </label>
            </CheckBoxDiv>
        )

    }
    else{
        return(
            <CheckBoxDiv>
                   <FilterCheckBox type="checkbox" id="checkbox" defaultChecked onClick={() => CheckBoxClick()}></FilterCheckBox>
                <label htmlFor="checkbox" >
                   같은 레이블링인 사람들만
                </label>
            </CheckBoxDiv>
        )
    }
}

export default CheckBox