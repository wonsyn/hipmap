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
import { saveClick, saveSudogwan, saveGwandong, saveHoseo, saveHonam, saveYungnam, saveJeju, saveSudogwanAnime, saveGwandongAnime, saveHoseoAnime, saveHonamAnime, saveYungnamMobile, saveYungnamAnime, saveJejuAnime } from "../../store/hipMap/hipMapStore"
function FullMapPage(){
    const dispatch = useDispatch()
    const hipmapSelector = useSelector((store:RootState) => store.hipMapReducer)
    function MobileRegionalMap(){
        if(hipmapSelector.isSudogwanMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveSudogwan())
                
            }, 1000);
            dispatch(saveSudogwanAnime())
        }
        else if(hipmapSelector.isGwandongMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveGwandong())
            }, 1000);
            dispatch(saveGwandongAnime())
        }
        else if(hipmapSelector.isHoseoMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveHoseo())
            }, 1000);
            dispatch(saveHoseoAnime())
        }
        else if(hipmapSelector.isHonamMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveHonam())
            }, 1000);
            dispatch(saveHonamAnime())
        }
        else if(hipmapSelector.isYungnamMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveYungnam())
            }, 1000);
            dispatch(saveYungnamAnime())
        }
        else if(hipmapSelector.isJejuMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveJeju())
            }, 1000);
            dispatch(saveJejuAnime())
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