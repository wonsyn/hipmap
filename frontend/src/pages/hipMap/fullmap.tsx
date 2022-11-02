import FullMap from "./component/fullmap"
import Filter from "./component/filter"
import Sudogwan from "./component/sudogwan"
import Gwandong from "./component/gwandong"
import Hoseo from "./component/hoseo"
import Honam from "./component/honam"
import Yungnam from "./component/yungnam"
import Jeju from "./component/jeju"
import { WrappingDiv } from "./styles/fullmap"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { RegionNameDiv, RegionNameButton } from "./styles/fullmap"
import { saveClick, saveSudogwan, saveGwandong, saveHoseo, saveHonam, saveYungnam, saveJeju } from "../../store/hipMap/hipMapStore"
function FullMapPage(){
    const dispatch = useDispatch()
    const hipmapSelector = useSelector((store:RootState) => store.hipMapReducer)
    function MobileRegionalMap(){
        if(hipmapSelector.isSudogwanMobile){
            dispatch(saveClick())
            dispatch(saveSudogwan())
        }
        else if(hipmapSelector.isGwandongMobile){
            dispatch(saveClick())
            dispatch(saveGwandong())
        }
        else if(hipmapSelector.isHoseoMobile){
            dispatch(saveClick())
            dispatch(saveHoseo())
        }
        else if(hipmapSelector.isHonamMobile){
            dispatch(saveClick())
            dispatch(saveHonam())
        }
        else if(hipmapSelector.isYungnamMobile){
            dispatch(saveClick())
            dispatch(saveYungnam())
        }
        else if(hipmapSelector.isJejuMobile){
            dispatch(saveClick())
            dispatch(saveJeju())
        }
        console.log("변화가 있나요?", hipmapSelector)
    }
    return(
        <WrappingDiv>
            <Filter/>
            {hipmapSelector.isClicked === false && (
                <FullMap/>
            )}
            {hipmapSelector.isSudogwan && (
                <Sudogwan/>
            )}
            {hipmapSelector.isGwandong && (
                <Gwandong/>
            )}
            {hipmapSelector.isHoseo && (
                <Hoseo/>
            )}
            {hipmapSelector.isHonam && (
                <Honam/>
            )}
            {hipmapSelector.isYungnam && (
                <Yungnam/>
            )}
            {hipmapSelector.isJeju && (
                <Jeju/>
            )}
            {((hipmapSelector.isClicked === false) && (hipmapSelector.isSudogwanMobile || hipmapSelector.isGwandongMobile || hipmapSelector.isHoseoMobile || 
                    hipmapSelector.isHonamMobile || hipmapSelector.isYungnamMobile || hipmapSelector.isJejuMobile)) &&
                    (    
                <RegionNameButton onClick={() => MobileRegionalMap()} name={hipmapSelector.name}>
                    {hipmapSelector.name} 들어가기
                </RegionNameButton>)
            }
            {((hipmapSelector.isClicked === false) && (hipmapSelector.isDeskTop)) &&
                    (    
                <RegionNameDiv>
                    {hipmapSelector.name}
                </RegionNameDiv>)
            }
        </WrappingDiv>
    )
}

export default FullMapPage