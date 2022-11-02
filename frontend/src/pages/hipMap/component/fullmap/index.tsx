import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FullMapWrappingDiv, FullMapDiv, GridDiv, NotDotSpan } from "../../styles/fullmap";
import { saveClick, saveSudogwan, saveGwandong, saveHoseo, saveHonam, saveYungnam, saveJeju, saveName,
saveSudogwanMobile, saveGwandongMobile, saveHoseoMobile, saveHonamMobile, saveYungnamMobile, saveJejuMobile, saveDeskTop } from "../../../../store/hipMap/hipMapStore";
// import {SudogwanImg, GwandongImg, HoseoImg, HonamImg, YungnamImg, JejuImg} from "../../styles/fullmap";
// import sudogwon from "../../../../assets/hipMap/sudogwon.png"
// import gwandong from "../../../../assets/hipMap/gwandong.png"
// import hoseo from "../../../../assets/hipMap/hoseo.png"
// import honam from "../../../../assets/hipMap/honam.png"
// import yungnam from "../../../../assets/hipMap/yungnam.png"
// import jeju from "../../../../assets/hipMap/jeju.png"
import { SudogwanSpan, GwandongSpan, HoseoSpan, HonamSpan, YungnamSpan, JejuSpan } from "../../styles/fullmap";
import type { RootState } from "../../../../store/store";
import useMediaQuery from '@mui/material/useMediaQuery';
function FullMap(){
  const [sudogwan, setSudogwan] = useState(false)
  const [gwandong, setGwandong] = useState(false) 
  const [hoseo, setHoseo] = useState(false)
  const [honam, setHonam] = useState(false)
  const [yungnam, setYungnam] = useState(false)
  const [jeju, setJeju] = useState(false)
  const dispatch = useDispatch()
  const hipmapSelector = useSelector((store:RootState) => store.hipMapReducer)
  
  function SudogwanClickFunc(){
     dispatch(saveClick())
     dispatch(saveSudogwan())
    }
  function GwandongClickFunc(){
     dispatch(saveClick())
     dispatch(saveGwandong())
    }
  function HoseoClickFunc(){
     dispatch(saveClick())
     dispatch(saveHoseo())
    }
  function HonamClickFunc(){
     dispatch(saveClick())
     dispatch(saveHonam())
    }
  function YungnamClickFunc(){
     dispatch(saveClick())
     dispatch(saveYungnam())
    }
  function JejuClickFunc(){
     dispatch(saveClick())
     dispatch(saveJeju())
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
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()}>
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
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()}>
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
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8 || j === 9){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()}>
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
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()}>
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
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()}>
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
                        (<SudogwanSpan onTouchStart={() => SudogwanMobileFunc()} select={sudogwan}>
                        {dot}
                        </SudogwanSpan>): 
                        (<SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan} onClick={() => SudogwanClickFunc()}>
                        {dot}
                        </SudogwanSpan>)}
                      </>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8){
                    return(
                      <>
                        {isMobile? 
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<GwandongSpan onTouchStart={() => GwandongMobileFunc()} select={gwandong}>
                        {dot}
                        </GwandongSpan>): 
                        (<GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong} onClick={() => GwandongClickFunc()}>
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
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()}>
                        {dot}
                        </HonamSpan>)}
                      </>
                    )
                  }
                  else if(j === 5 || j === 6){
                    return(
                     <>
                        {isMobile? 
                        (<HoseoSpan onTouchStart={() => HoseoMobileFunc()} select={hoseo}>
                        {dot}
                        </HoseoSpan>): 
                        (<HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo} onClick={() => HoseoClickFunc()}>
                        {dot}
                        </HoseoSpan>)}
                      </>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11 || j === 12){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()}>
                        {dot}
                        </HonamSpan>)}
                      </>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                     <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()}>
                        {dot}
                        </HonamSpan>)}
                      </>
                    )
                  }
                  else if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()}>
                        {dot}
                        </HonamSpan>)}
                      </>
                    )
                  }
                  else if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()}>
                        {dot}
                        </HonamSpan>)}
                    </>
                    )
                  }
                  else if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()}>
                        {dot}
                        </HonamSpan>)}
                    </>
                    )
                  }
                  else if(j === 6 || j === 8 || j === 9){
                    return(
                      <>
                        {isMobile? 
                        (<YungnamSpan onTouchStart={() => YungnamMobileFunc()} select={yungnam}>
                        {dot}
                        </YungnamSpan>): 
                        (<YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam} onClick={() => YungnamClickFunc()}>
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
                        (<HonamSpan onTouchStart={() => HonamMobileFunc()} select={honam}>
                        {dot}
                        </HonamSpan>): 
                        (<HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam} onClick={() => HonamClickFunc()}>
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
                        (<JejuSpan onTouchStart={() => JejuMobileFunc()} select={jeju}>
                        {dot}
                        </JejuSpan>): 
                        (<JejuSpan onMouseOver={()=>JejuFunc()} onMouseOut={() => JejuFunc()} select={jeju} onClick={() => JejuClickFunc()}>
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
                        (<JejuSpan onTouchStart={() => JejuMobileFunc()} select={jeju}>
                        {dot}
                        </JejuSpan>): 
                        (<JejuSpan onMouseOver={()=>JejuFunc()} onMouseOut={() => JejuFunc()} select={jeju} onClick={() => JejuClickFunc()}>
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