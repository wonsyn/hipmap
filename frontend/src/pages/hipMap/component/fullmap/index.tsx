import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FullMapWrappingDiv, FullMapDiv, GridDiv, NotDotSpan } from "../../styles/fullmap";
import { saveClick, saveSudogwan, saveGwandong, saveHoseo, saveHonam, saveYungnam, saveJeju, saveName,
saveSudogwanMobile, saveGwandongMobile, saveHoseoMobile, saveHonamMobile, saveYungnamMobile, saveJejuMobile, saveDeskTop, 
saveSudogwanAnime, saveGwandongAnime, saveHoseoAnime, saveHonamAnime, saveYungnamAnime, saveJejuAnime } from "../../../../store/hipMap/hipMapStore";
import { SudogwanSpan, GwandongSpan, HoseoSpan, HonamSpan, YungnamSpan, JejuSpan } from "../../styles/fullmap";
import type { RootState } from "../../../../store/store";
import useMediaQuery from '@mui/material/useMediaQuery';
function FullMap(){
  const [sudogwan, setSudogwan] = useState<boolean>(false)
  const [gwandong, setGwandong] = useState<boolean>(false) 
  const [hoseo, setHoseo] = useState<boolean>(false)
  const [honam, setHonam] = useState<boolean>(false)
  const [yungnam, setYungnam] = useState<boolean>(false)
  const [jeju, setJeju] = useState<boolean>(false)
  const [region, setRegion] = useState<string>("")

  const dispatch = useDispatch()
  const hipmapSelector = useSelector((store:RootState) => store.hipMapReducer)
  
  function SudogwanClickFunc(){
    dispatch(saveSudogwanAnime())
    setTimeout(() => {
      dispatch(saveClick())
      dispatch(saveSudogwan())
    }, 900);
    setSudogwan(false)
    setRegion("Sudogwan")
    }
  function GwandongClickFunc(){
    dispatch(saveGwandongAnime())
    setTimeout(() => {
      dispatch(saveClick())
      dispatch(saveGwandong())
    }, 900);
    setGwandong(false)
    setRegion("Gwandong")
    }
  function HoseoClickFunc(){
    dispatch(saveHoseoAnime())
    setTimeout(() => {
      dispatch(saveClick())
      dispatch(saveHoseo())
    }, 900);
    setHoseo(false)
    setRegion("Hoseo")
    }
  function HonamClickFunc(){
    dispatch(saveHonamAnime())
    setTimeout(() => {
      dispatch(saveClick())
      dispatch(saveHonam())
    }, 900);
    setHonam(false)
    setRegion("Honam")
    }
  function YungnamClickFunc(){
    dispatch(saveYungnamAnime())
    setTimeout(() => {
      dispatch(saveClick())
      dispatch(saveYungnam())
    }, 900);
    setYungnam(false)
    setRegion("Yungnam")
    }
  function JejuClickFunc(){
    dispatch(saveJejuAnime())
    setTimeout(() => {
      dispatch(saveClick())
      dispatch(saveJeju())
    }, 900);
    setJeju(false)
    setRegion("Jeju")
    }
  function SudogwanFunc(){
    setSudogwan((prev)=>{
      return !prev
    })
    dispatch(saveName(
      {
        name: "수도권"
      }))
    dispatch(saveDeskTop())
  }
  function SudogwanMobileFunc(){
    setSudogwan((prev)=>{
      return !prev
    })
    dispatch(saveName(
      {
        name: "수도권"
      }))
    dispatch(saveSudogwanMobile({
      isSudogwanMobile: true
    }))
    dispatch(saveGwandongMobile({
      isGwandongMobile: false
    }))
    dispatch(saveHoseoMobile({
      isHoseoMobile: false
    }))
    dispatch(saveHonamMobile({
      isHonamMobile: false
    }))
    dispatch(saveYungnamMobile({
      isYungnamMobile: false
    }))
    dispatch(saveJejuMobile({
      isJejuMobile: false
    }))
    setGwandong(false)
    setHoseo(false)
    setHonam(false)
    setYungnam(false)
    setJeju(false)
  }
  function GwandongFunc(){
    setGwandong((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "관동(강원)"
      }))
    dispatch(saveDeskTop())
  }
  function GwandongMobileFunc(){
    setGwandong((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "관동(강원)"
      }))
    dispatch(saveSudogwanMobile({
      isSudogwanMobile: false
    }))
    dispatch(saveGwandongMobile({
      isGwandongMobile: true
    }))
    dispatch(saveHoseoMobile({
      isHoseoMobile: false
    }))
    dispatch(saveHonamMobile({
      isHonamMobile: false
    }))
    dispatch(saveYungnamMobile({
      isYungnamMobile: false
    }))
    dispatch(saveJejuMobile({
      isJejuMobile: false
    }))
    setSudogwan(false)
    setHoseo(false)
    setHonam(false)
    setYungnam(false)
    setJeju(false)
  }
  function HoseoFunc(){
    setHoseo((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "호서(충청)"
      }))
    dispatch(saveDeskTop())
  }
  function HoseoMobileFunc(){
    setHoseo((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "호서(충청)"
      }))
    dispatch(saveSudogwanMobile({
      isSudogwanMobile: false
    }))
    dispatch(saveGwandongMobile({
      isGwandongMobile: false
    }))
    dispatch(saveHoseoMobile({
      isHoseoMobile: true
    }))
    dispatch(saveHonamMobile({
      isHonamMobile: false
    }))
    dispatch(saveYungnamMobile({
      isYungnamMobile: false
    }))
    dispatch(saveJejuMobile({
      isJejuMobile: false
    }))
    setSudogwan(false)
    setGwandong(false)
    setHonam(false)
    setYungnam(false)
    setJeju(false)
  }
  function HonamFunc(){
    setHonam((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "호남"
      }))
    dispatch(saveDeskTop())
  }
  function HonamMobileFunc(){
    setHonam((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "호남"
      }))
    dispatch(saveSudogwanMobile({
      isSudogwanMobile: false
    }))
    dispatch(saveGwandongMobile({
      isGwandongMobile: false
    }))
    dispatch(saveHoseoMobile({
      isHoseoMobile: false
    }))
    dispatch(saveHonamMobile({
      isHonamMobile: true
    }))
    dispatch(saveYungnamMobile({
      isYungnamMobile: false
    }))
    dispatch(saveJejuMobile({
      isJejuMobile: false
    }))
    setSudogwan(false)
    setGwandong(false)
    setHoseo(false)
    setYungnam(false)
    setJeju(false)
  }
  function YungnamFunc(){
    setYungnam((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "영남"
      }))
    dispatch(saveDeskTop())
  }
  function YungnamMobileFunc(){
    setYungnam((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "영남"
      }))
    dispatch(saveSudogwanMobile({
      isSudogwanMobile: false
    }))
    dispatch(saveGwandongMobile({
      isGwandongMobile: false
    }))
    dispatch(saveHoseoMobile({
      isHoseoMobile: false
    }))
    dispatch(saveHonamMobile({
      isHonamMobile: false
    }))
    dispatch(saveYungnamMobile({
      isYungnamMobile: true
    }))
    dispatch(saveJejuMobile({
      isJejuMobile: false
    }))
    setSudogwan(false)
    setGwandong(false)
    setHoseo(false)
    setHonam(false)
    setJeju(false)
  }
  function JejuFunc(){
    setJeju((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "제주"
      }))
    dispatch(saveDeskTop())
  }
  function JejuMobileFunc(){
    setJeju((prev) => {
      return !prev
    })
    dispatch(saveName(
      {
        name: "제주"
      }))
    dispatch(saveSudogwanMobile({
      isSudogwanMobile: false
    }))
    dispatch(saveGwandongMobile({
      isGwandongMobile: false
    }))
    dispatch(saveHoseoMobile({
      isHoseoMobile: false
    }))
    dispatch(saveHonamMobile({
      isHonamMobile: false
    }))
    dispatch(saveYungnamMobile({
      isYungnamMobile: false
    }))
    dispatch(saveJejuMobile({
      isJejuMobile: true
    }))
    setSudogwan(false)
    setGwandong(false)
    setHoseo(false)
    setHonam(false)
    setYungnam(false)
  }

  const isMobile = useMediaQuery('(max-width: 700px)')
  const mapDot = [
    [-1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1],
    [-1, -1, -1, -1, 0, 0, 0, 0, 0, -1, -1, -1, -1],
    [-1, -1, -1, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1],
    [-1, -1, 0, 0, 0, 0, 0, 0, 0, 0,  0, -1, -1],
    [-1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    [-1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    [-1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  -1],
    [-1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    [-1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1],
    [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, -1, -1, -1],
    [0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
   ]
    return (
      <FullMapWrappingDiv>
        <FullMapDiv>
          {mapDot.map((dots, i) => (
          <GridDiv>
            {dots.map((dot, j) =>{
              if(dot !== -1){
                if(i === 0){
                  if(j === 8){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong} animation={hipmapSelector.gwandongAnime} region={hipmapSelector.region}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()} animation={hipmapSelector.gwandongAnime} region={region}>
                        {dot}
                        </GwandongSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 1){
                  if(j === 4 || j === 5){
                    return(
                      <>
                        {isMobile? 
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan}  animation={hipmapSelector.sudogwanAnime} region={hipmapSelector.region}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()} animation={hipmapSelector.sudogwanAnime} region={region}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong} animation={hipmapSelector.gwandongAnime} region={hipmapSelector.region}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()} animation={hipmapSelector.gwandongAnime} region={region}>
                        {dot}
                        </GwandongSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 2){
                  if(j === 3 || j === 4 || j === 5){
                    return(
                     <>
                        {isMobile? 
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan} animation={hipmapSelector.sudogwanAnime} region={hipmapSelector.region}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()} animation={hipmapSelector.sudogwanAnime} region={region}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8 || j === 9){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong} animation={hipmapSelector.gwandongAnime} region={hipmapSelector.region}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()} animation={hipmapSelector.gwandongAnime} region={region}>
                        {dot}
                        </GwandongSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 3){
                  if(j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    return(
                      <>
                        {isMobile? 
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan} animation={hipmapSelector.sudogwanAnime} region={hipmapSelector.region}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()} animation={hipmapSelector.sudogwanAnime} region={region}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong} animation={hipmapSelector.gwandongAnime} region={hipmapSelector.region}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()} animation={hipmapSelector.gwandongAnime} region={region}>
                        {dot}
                        </GwandongSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 4){
                  if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    return(
                      <>
                        {isMobile? 
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan} animation={hipmapSelector.sudogwanAnime} region={hipmapSelector.region}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()} animation={hipmapSelector.sudogwanAnime} region={region}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong} animation={hipmapSelector.gwandongAnime} region={hipmapSelector.region}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()} animation={hipmapSelector.gwandongAnime} region={region}>
                        {dot}
                        </GwandongSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 5){
                  if(j === 3 || j === 4 || j === 5){
                    return(
                      <>
                        {isMobile? 
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan} animation={hipmapSelector.sudogwanAnime} region={hipmapSelector.region}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()} animation={hipmapSelector.sudogwanAnime} region={region}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8){
                    return(
                      <>
                        {isMobile? 
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo} animation={hipmapSelector.hoseoAnime} region={hipmapSelector.region}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()} animation={hipmapSelector.hoseoAnime} region={region}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong} animation={hipmapSelector.gwandongAnime} region={hipmapSelector.region}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()} animation={hipmapSelector.gwandongAnime} region={region}>
                        {dot}
                        </GwandongSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 6){
                  if(j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
                    return(
                      <>
                        {isMobile? 
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo} animation={hipmapSelector.hoseoAnime} region={hipmapSelector.region}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()} animation={hipmapSelector.hoseoAnime} region={region}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 7){
                  if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7){
                    return(
                      <>
                        {isMobile? 
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo} animation={hipmapSelector.hoseoAnime} region={hipmapSelector.region}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()} animation={hipmapSelector.hoseoAnime} region={region}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 8){
                  if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    return(
                      <>
                        {isMobile? 
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo} animation={hipmapSelector.hoseoAnime} region={hipmapSelector.region}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()} animation={hipmapSelector.hoseoAnime} region={region}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 9){
                  if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    return(
                     <>
                        {isMobile? 
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo} animation={hipmapSelector.hoseoAnime} region={hipmapSelector.region}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()} animation={hipmapSelector.hoseoAnime} region={region}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 10){
                  if(j === 2 || j === 3 || j === 4){
                    return(
                      <>
                        {isMobile? 
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam} animation={hipmapSelector.honamAnime} region={hipmapSelector.region}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()} animation={hipmapSelector.honamAnime} region={region}>
                        {dot}
                        </HonamSpan>)}
                      </>
                    )
                  }
                  else if(j === 5 || j === 6){
                    return(
                     <>
                        {isMobile? 
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo} animation={hipmapSelector.hoseoAnime} region={hipmapSelector.region}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()} animation={hipmapSelector.hoseoAnime} region={region}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11 || j === 12){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 11){
                  if(j === 2 || j === 3 || j === 4 || j === 5){
                    return(
                      <>
                        {isMobile? 
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam} animation={hipmapSelector.honamAnime} region={hipmapSelector.region}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()} animation={hipmapSelector.honamAnime} region={region}>
                        {dot}
                        </HonamSpan>)}
                      </>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                     <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 12){
                  if(j === 2 || j === 3 || j === 4){
                    return(
                      <>
                        {isMobile? 
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam} animation={hipmapSelector.honamAnime} region={hipmapSelector.region}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()} animation={hipmapSelector.honamAnime} region={region}>
                        {dot}
                        </HonamSpan>)}
                      </>
                    )
                  }
                  else if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 13){
                  if(j === 1 || j === 2 || j === 3 || j === 4){
                    return(
                       <>
                        {isMobile? 
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam} animation={hipmapSelector.honamAnime} region={hipmapSelector.region}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()} animation={hipmapSelector.honamAnime} region={region}>
                        {dot}
                        </HonamSpan>)}
                      </>
                    )
                  }
                  else if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 14){
                  if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4){
                    return(
                      <>
                        {isMobile? 
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam} animation={hipmapSelector.honamAnime} region={hipmapSelector.region}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()} animation={hipmapSelector.honamAnime} region={region}>
                        {dot}
                        </HonamSpan>)}
                    </>
                    )
                  }
                  else if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 15){
                  if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5){
                    return(
                      <>
                        {isMobile? 
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam} animation={hipmapSelector.honamAnime} region={hipmapSelector.region}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()} animation={hipmapSelector.honamAnime} region={region}>
                        {dot}
                        </HonamSpan>)}
                    </>
                    )
                  }
                  else if(j === 6 || j === 8 || j === 9){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam} animation={hipmapSelector.yungnamAnime} region={hipmapSelector.region}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()} animation={hipmapSelector.yungnamAnime} region={region}>
                        {dot}
                        </YungnamSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 16){
                  if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5){
                    return(
                      <>
                        {isMobile? 
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam} animation={hipmapSelector.honamAnime} region={hipmapSelector.region}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()} animation={hipmapSelector.honamAnime} region={region}>
                        {dot}
                        </HonamSpan>)}
                      </>
                    )
                  } 
                }
                else if(i === 20){
                  if(j === 1 || j === 2 || j === 3){
                    return(
                      <>
                        {isMobile? 
                        (<JejuSpan onTouchStart={() => JejuMobileFunc()} select={jeju} animation={hipmapSelector.jejuAnime} region={hipmapSelector.region}>
                        {dot}
                        </JejuSpan>): 
                        (<JejuSpan onMouseOver={()=>JejuFunc()} onMouseOut={() => JejuFunc()} select={jeju} onClick={() => JejuClickFunc()} animation={hipmapSelector.jejuAnime} region={region}>
                        {dot}
                        </JejuSpan>)}
                      </>
                    )
                  }
                }
                else if(i === 21){
                  if(j === 1 || j === 2){
                    return(
                      <>
                        {isMobile? 
                        (<JejuSpan onTouchStart={() => JejuMobileFunc()} select={jeju} animation={hipmapSelector.jejuAnime} region={hipmapSelector.region}>
                        {dot}
                        </JejuSpan>): 
                        (<JejuSpan onMouseOver={()=>JejuFunc()} onMouseOut={() => JejuFunc()} select={jeju} onClick={() => JejuClickFunc()} animation={hipmapSelector.jejuAnime} region={region}>
                        {dot}
                        </JejuSpan>)}
                      </>
                    )
                  }
                }
              }
              else{
                return(
                  <NotDotSpan>
                  </NotDotSpan>
                )
              }
          })}
            </GridDiv>
          ))}
        </FullMapDiv>
      </FullMapWrappingDiv>
    );
  };

export default FullMap