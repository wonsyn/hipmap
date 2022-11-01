import { useState } from "react";
import { FullMapWrappingDiv, FullMapDiv, GridDiv, NotDotSpan } from "../../styles/fullmap";
// import {SudogwanImg, GwandongImg, HoseoImg, HonamImg, YungnamImg, JejuImg} from "../../styles/fullmap";
// import sudogwon from "../../../../assets/hipMap/sudogwon.png"
// import gwandong from "../../../../assets/hipMap/gwandong.png"
// import hoseo from "../../../../assets/hipMap/hoseo.png"
// import honam from "../../../../assets/hipMap/honam.png"
// import yungnam from "../../../../assets/hipMap/yungnam.png"
// import jeju from "../../../../assets/hipMap/jeju.png"
import { SudogwanSpan, GwandongSpan, HoseoSpan, HonamSpan, YungnamSpan, JejuSpan } from "../../styles/fullmap";
function FullMap(){
  const [sudogwan, setSudogwan] = useState(false)
  const [gwandong, setGwandong] = useState(false) 
  const [hoseo, setHoseo] = useState(false)
  const [honam, setHonam] = useState(false)
  const [yungnam, setYungnam] = useState(false)
  const [jeju, setJeju] = useState(false)
  function SudogwanFunc(){
    setSudogwan((prev)=>{
      return !prev
    })
  }
  function GwandongFunc(){
    setGwandong((prev) => {
      return !prev
    })
  }
  function HoseoFunc(){
    setHoseo((prev) => {
      return !prev
    })
  }
  function HonamFunc(){
    setHonam((prev) => {
      return !prev
    })
  }
  function YungnamFunc(){
    setYungnam((prev) => {
      return !prev
    })
  }
  function JejuFunc(){
    setJeju((prev) => {
      return !prev
    })
  }


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
                      <GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong}>
                        {dot}
                      </GwandongSpan>
                    )
                  }
                }
                else if(i === 1){
                  if(j === 4 || j === 5){
                    return(
                      <SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan}>
                        {dot}
                      </SudogwanSpan>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8){
                    return(
                      <GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong}>
                        {dot}
                      </GwandongSpan>
                    )
                  }
                }
                else if(i === 2){
                  if(j === 3 || j === 4 || j === 5){
                    return(
                      <SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan}>
                        {dot}
                      </SudogwanSpan>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8 || j === 9){
                    return(
                      <GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong}>
                        {dot}
                      </GwandongSpan>
                    )
                  }
                }
                else if(i === 3){
                  if(j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    return(
                      <SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan}>
                        {dot}
                      </SudogwanSpan>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10){
                    return(
                      <GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong}>
                        {dot}
                      </GwandongSpan>
                    )
                  }
                }
                else if(i === 4){
                  if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    return(
                      <SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan}>
                        {dot}
                      </SudogwanSpan>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10){
                    return(
                      <GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong}>
                        {dot}
                      </GwandongSpan>
                    )
                  }
                }
                else if(i === 5){
                  if(j === 3 || j === 4 || j === 5){
                    return(
                      <SudogwanSpan onMouseOver={()=>SudogwanFunc()} onMouseOut={() => SudogwanFunc()} select={sudogwan}>
                        {dot}
                      </SudogwanSpan>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8){
                    return(
                      <HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo}>
                        {dot}
                      </HoseoSpan>
                    )
                  }
                  else if(j === 9 || j === 10 || j === 11){
                    return(
                      <GwandongSpan onMouseOver={()=>GwandongFunc()} onMouseOut={() => GwandongFunc()} select={gwandong}>
                        {dot}
                      </GwandongSpan>
                    )
                  }
                }
                else if(i === 6){
                  if(j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
                    return(
                      <HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo}>
                        {dot}
                      </HoseoSpan>
                    )
                  }
                  else if(j === 10 || j === 11){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 7){
                  if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7){
                    return(
                      <HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo}>
                        {dot}
                      </HoseoSpan>
                    )
                  }
                  else if(j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 8){
                  if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    return(
                      <HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo}>
                        {dot}
                      </HoseoSpan>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 9){
                  if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    return(
                      <HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo}>
                        {dot}
                      </HoseoSpan>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 10){
                  if(j === 2 || j === 3 || j === 4){
                    return(
                      <HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam}>
                        {dot}
                      </HonamSpan>
                    )
                  }
                  else if(j === 5 || j === 6){
                    return(
                      <HoseoSpan onMouseOver={()=>HoseoFunc()} onMouseOut={() => HoseoFunc()} select={hoseo}>
                        {dot}
                      </HoseoSpan>
                    )
                  }
                  else if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11 || j === 12){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 11){
                  if(j === 2 || j === 3 || j === 4 || j === 5){
                    return(
                      <HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam}>
                        {dot}
                      </HonamSpan>
                    )
                  }
                  else if(j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 12){
                  if(j === 2 || j === 3 || j === 4){
                    return(
                      <HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam}>
                        {dot}
                      </HonamSpan>
                    )
                  }
                  else if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 13){
                  if(j === 1 || j === 2 || j === 3 || j === 4){
                    return(
                      <HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam}>
                        {dot}
                      </HonamSpan>
                    )
                  }
                  else if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 14){
                  if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4){
                    return(
                      <HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam}>
                        {dot}
                      </HonamSpan>
                    )
                  }
                  else if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 15){
                  if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5){
                    return(
                      <HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam}>
                        {dot}
                      </HonamSpan>
                    )
                  }
                  else if(j === 6 || j === 8 || j === 9){
                    return(
                      <YungnamSpan onMouseOver={()=>YungnamFunc()} onMouseOut={() => YungnamFunc()} select={yungnam}>
                        {dot}
                      </YungnamSpan>
                    )
                  }
                }
                else if(i === 16){
                  if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5){
                    return(
                      <HonamSpan onMouseOver={()=>HonamFunc()} onMouseOut={() => HonamFunc()} select={honam}>
                        {dot}
                      </HonamSpan>
                    )
                  } 
                }
                else if(i === 20){
                  if(j === 1 || j === 2 || j === 3){
                    return(
                      <JejuSpan onMouseOver={()=>JejuFunc()} onMouseOut={() => JejuFunc()} select={jeju}>
                        {dot}
                      </JejuSpan>
                    )
                  }
                }
                else if(i === 21){
                  if(j === 1 || j === 2){
                    return(
                      <JejuSpan onMouseOver={()=>JejuFunc()} onMouseOut={() => JejuFunc()} select={jeju}>
                        {dot}
                      </JejuSpan>
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