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
import { saveClick, saveSudogwan, saveGwandong, saveHoseo, saveHonam, saveYungnam, saveJeju, saveSudogwanAnime, saveGwandongAnime, saveHoseoAnime, saveHonamAnime, saveYungnamAnime, saveJejuAnime, saveRegion } from "../../store/hipMap/hipMapStore"
import { useSi } from "../../hoc/hipMap/fullMap/useSi"
import { useGu } from "../../hoc/hipMap/fullMap/useGu"
import { useDong } from "../../hoc/hipMap/fullMap/useDong"

function FullMapPage(){
    const dispatch = useDispatch()
    const hipmapSelector = useSelector((store:RootState) => store.hipMapReducer)
    function MobileRegionalMap(){
        if(hipmapSelector.isSudogwanMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveSudogwan())
                
            }, 900);
            dispatch(saveSudogwanAnime())
            dispatch(saveRegion(
                {
                    region: "Sudogwan"
                }))
        }
        else if(hipmapSelector.isGwandongMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveGwandong())
            }, 900);
            dispatch(saveGwandongAnime())
            dispatch(saveRegion(
                {
                    region: "Gwandong"
                }))
        }
        else if(hipmapSelector.isHoseoMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveHoseo())
            }, 900);
            dispatch(saveHoseoAnime())
            dispatch(saveRegion(
                {
                    region: "Hoseo"
                }))
        }
        else if(hipmapSelector.isHonamMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveHonam())
            }, 900);
            dispatch(saveHonamAnime())
            dispatch(saveRegion(
                {
                    region: "Honam"
                }))
        }
        else if(hipmapSelector.isYungnamMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveYungnam())
            }, 900);
            dispatch(saveYungnamAnime())
            dispatch(saveRegion(
                {
                    region: "Yungnam"
                }))
        }
        else if(hipmapSelector.isJejuMobile){
            setTimeout(() => {
                dispatch(saveClick())
                dispatch(saveJeju())
            }, 900);
            dispatch(saveJejuAnime())
            dispatch(saveRegion(
                {
                    region: "Jeju"
                }))
        }
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

export default FullMapPage;
