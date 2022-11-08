import { FullMapWrappingDiv, SudogwanMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { SudogwanSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from "react-redux";
import { saveClick, saveSudogwan, saveSudogwanMobile, saveName, saveSudogwanAnime } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
import { useDotMapData } from "../../../../hoc/hipMap/fullMap/useDotMapData";
import { useEffect, useState } from "react";
function Sudogwan(){
    const [coordinateI, setCoordinateI] = useState<number>(0)
    const [coordinateJ, setCoordinateJ] = useState<number>(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const {data,isLoading} = useDotMapData(
      {
        queryKey: "dotMapData",
        uri: "/shorts/maplist",
        startLat: 36.9408,
        endLat: 37.9136,
        startLng: 125.41415 ,
        endLng: 127.49885,
        isFilterChecked: false,
        locationSi: null,
        locationGu: null,
        locationDong: null
      }
    )
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

    if(!isLoading){
      console.log("넌 뭐니? ", data.shortsList)
      mapDot.map((dots, i) => {
        dots.map((dot, j) => {
            if(i === 1){
              if(dot !== -1){
                  if(j === 4 || j === 5){
                    data.shortsList.map((shorts: any) => {
                      if( ( (shorts.lattitude >= (38.40 - (0.2432)*(i+1))) && (shorts.lattitude <= (38.40 - (0.2432)*(i))) )
                       && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                       {
                        mapDot[i][j] += 1
                        console.log("진행 완료")
                      }
                    })
                  }
                  
          }
        }
          else if(i === 2){
              if(dot !== -1){
                  if(j === 3 || j === 4 || j === 5){
                    data.shortsList.map((shorts: any) => {
                      if( ( (shorts.lattitude >= (38.40 - (0.2432)*(i+1))) && (shorts.lattitude <= (38.40 - (0.2432)*(i))) )
                       && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                       {
                        mapDot[i][j] += 1
                        console.log("진행 완료")
                      }
                    })
                  }
                 
              }
             
          }
          else if(i === 3){
              if(dot !== -1){
                  if(j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    data.shortsList.map((shorts: any) => {
                      if( ( (shorts.lattitude >= (38.40 - (0.2432)*(i+1))) && (shorts.lattitude <= (38.40 - (0.2432)*(i))) )
                       && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                       {
                        mapDot[i][j] += 1
                        console.log("진행 완료")
                      }
                    })
                  }
                  
              }
             
          }
          else if(i === 4){
              if(dot !== -1){
                  if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                    data.shortsList.map((shorts: any) => {
                      if( ( (shorts.lattitude >= (38.40 - (0.2432)*(i+1))) && (shorts.lattitude <= (38.40 - (0.2432)*(i))) )
                       && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                       {
                        mapDot[i][j] += 1
                        console.log("진행 완료")
                      }
                    })
                  }
  
              }  
          }
        })
      })
    }
   

    function SudogwanSelect(){
      dispatch(saveClick())
      dispatch(saveSudogwan())
      dispatch(saveSudogwanAnime())
      dispatch(saveSudogwanMobile({
        isSudogwanMobile: false
      }))
      dispatch(saveName(
        {
          name: ""
        }))
    }
    function SudogwanClick(i: number, j: number){
      const shortsList: any = []
      data.shortsList.map((shorts: any) => {
        if( ( (shorts.lattitude >= (38.40 - (0.2432)*(i+1))) && (shorts.lattitude <= (38.40 - (0.2432)*(i))) )
         && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
         {
          shortsList.push(shorts)
        }
        console.log("진행 완료")
      })
     
      navigate('/hipmap/result',
      {state: {shortsList: shortsList}})
    }
        return (
          <FullMapWrappingDiv>
            <ArrowDiv onClick={() => SudogwanSelect()} >
              <ArrowBackIcon fontSize="large"/>
            </ArrowDiv>
            <SudogwanMapDiv>
              {mapDot.map((dots, i) => (
              <GridDivRegional>
                {dots.map((dot, j) =>{
                    if(i === 1){
                        if(dot !== -1){
                            if(j === 4 || j === 5){
                              return(
                                <SudogwanSpanRegional onClick={() => SudogwanClick(i, j)}>
                                  {dot}
                                </SudogwanSpanRegional>
                              )
                            }
                            else{
                                return(
                                <NotDotSpanRegional>
                                </NotDotSpanRegional>
                                )
                            }
                      }
                      else{
                        return(
                          <NotDotSpanRegional>
                          </NotDotSpanRegional>
                        )
                      }
                    }
                    else if(i === 2){
                        if(dot !== -1){
                            if(j === 3 || j === 4 || j === 5){
                              return(
                                <SudogwanSpanRegional onClick={() => SudogwanClick(i, j)}>
                                  {dot}
                                </SudogwanSpanRegional>
                              )
                            }
                            else{
                                return(
                                <NotDotSpanRegional>
                                </NotDotSpanRegional>
                                )
                            }
                        }
                        else{
                            return(
                            <NotDotSpanRegional>
                            </NotDotSpanRegional>
                            )
                        }
                    }
                    else if(i === 3){
                        if(dot !== -1){
                            if(j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                              return(
                                <SudogwanSpanRegional onClick={() => SudogwanClick(i, j)}>
                                  {dot}
                                </SudogwanSpanRegional>
                              )
                            }
                            else{
                                return(
                                <NotDotSpanRegional>
                                </NotDotSpanRegional>
                                )
                            }
                        }
                        else{
                            return(
                            <NotDotSpanRegional>
                            </NotDotSpanRegional>
                            )
                        }
                    }
                    else if(i === 4){
                        if(dot !== -1){
                            if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                              return(
                                <SudogwanSpanRegional onClick={() => SudogwanClick(i, j)}>
                                  {dot}
                                </SudogwanSpanRegional>
                              )
                            }
                            else{
                                return(
                                <NotDotSpanRegional>
                                </NotDotSpanRegional>
                                )
                            }
                        }
                        else{
                            return(
                            <NotDotSpanRegional>
                            </NotDotSpanRegional>
                            )
                        }
                    }
                    else if(i === 5){
                        if(dot !== -1){
                            if(j === 3 || j === 4 || j === 5){
                              return(
                                <SudogwanSpanRegional onClick={() => SudogwanClick(i, j)}>
                                  {dot}
                                </SudogwanSpanRegional>
                              )
                            }
                            else{
                                return(
                                <NotDotSpanRegional>
                                </NotDotSpanRegional>
                                )
                            }
                        }
                        else{
                            return(
                            <NotDotSpanRegional>
                            </NotDotSpanRegional>
                            )
                        }
                  }
                  else{
                    return(
                        <div></div>
                    )
                  }
            
                })}
                </GridDivRegional>
              ))}
            </SudogwanMapDiv>
          </FullMapWrappingDiv>
        );
      };

export default Sudogwan