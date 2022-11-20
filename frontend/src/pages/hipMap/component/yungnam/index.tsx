import { FullMapWrappingDiv, YungnamMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { YungnamSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from "react-redux";
import { saveClick, saveYungnam, saveYungnamMobile, saveName, saveYungnamAnime, saveRegion } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
import { useDotMapData } from "../../../../hoc/hipMap/fullMap/useDotMapData";
import { useEffect } from "react";
import type { RootState } from "../../../../store/store";
import { useQueryClient } from "@tanstack/react-query";

function Yungnam(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const hipmapSelector = useSelector((store:RootState) => store.hipMapReducer)
    useEffect(()=>{
      if(hipmapSelector && ( hipmapSelector.si || hipmapSelector.gu || hipmapSelector.dong || hipmapSelector.sameLabelingCheck || hipmapSelector.sameLabelingCheck2) ){
        setTimeout(() => {
          queryClient.invalidateQueries();
         refetch()
        }, 1);
      }
    },[hipmapSelector]);
    const {data,isLoading, refetch} = useDotMapData(
      {
        queryKey: "dotMapData",
        uri: "/shorts/maplist",
        startLat: 34.5088,
        endLat: 36.9408,
        startLng: 126.80395,
        endLng: 129.58835,
        isFilterChecked: hipmapSelector.sameLabelingCheck,
        locationSi: hipmapSelector.si,
        locationGu: hipmapSelector.gu,
        locationDong: hipmapSelector.dong
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
      {mapDot.map((dots, i) => {
          {dots.map((dot, j) =>{
            if(i === 6){
              if(dot !== -1){
                  if(j === 10 || j === 11){
                    data.shortsList.map((shorts: any) => {
                      if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                       && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                       {
                        mapDot[i][j] += 1
                      }
                    })
                  }
                 
              }
              }
              else if(i === 7){
                  if(dot !== -1){
                      if(j === 8 || j === 9 || j === 10 || j === 11){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                           && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                     
                  }
                 
              }
              else if(i === 8){
                  if(dot !== -1){
                      if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                           && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                     
                  }
                 
              }
              else if(i === 9){
                  if(dot !== -1){
                      if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                           && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                     
                  }
                 
              }
              else if(i === 10){
                  if(dot !== -1){
                      if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11 || j === 12){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                           && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                     
                  }
                 
              }
              else if(i === 11){
                  if(dot !==-1){
                      if(j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                           && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                      
                  }
                 
              }
              else if(i === 12){
                  if(dot !== -1){
                      if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                           && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                     
                  }
                 
              }
              else if(i === 13){
                  if(dot !== -1){
                      if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                           && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                     
                  }
                  
              }
              else if(i === 14){
                  if(dot !== -1){
                      if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                           && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                      
                  }
                
              }
              else if(i === 15){
                  if(dot !== -1){
                      if(j === 6 || j === 8 || j === 9){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                           && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                     
                  }
                 
              }
              
        })}
         
      })}
    }
    function YungnamSelect(){
      dispatch(saveClick())
      dispatch(saveYungnam())
      dispatch(saveYungnamAnime())
      dispatch(saveYungnamMobile({
        isYungnamMobile: false
      }))
      dispatch(saveName(
        {
          name: ""
        }))
      dispatch(saveRegion(
        {
          region: ""
        }
      ))
      }
    function YungnamClick(i: number, j: number){
      const shortsList: any = []
      data.shortsList.map((shorts: any) => {
        if( ( (shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
         && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1))))) )
         {
          shortsList.push(shorts)
        }
      })
     
      navigate('/hipmap/result',
      {state: {shortsList: shortsList}})
    }
        return (
          <FullMapWrappingDiv>
            <ArrowDiv onClick={() => YungnamSelect()} >
              <ArrowBackIcon fontSize="large"/>
            </ArrowDiv>
            <YungnamMapDiv>
              {mapDot.map((dots, i) => (
              <GridDivRegional>
                {dots.map((dot, j) =>{
                  if(i === 6){
                    if(dot !== -1){
                        if(j === 10 || j === 11){
                          return(
                            <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                              {dot}
                            </YungnamSpanRegional>
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
                    else if(i === 7){
                        if(dot !== -1){
                            if(j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                                  {dot}
                                </YungnamSpanRegional>
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
                    else if(i === 8){
                        if(dot !== -1){
                            if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                                  {dot}
                                </YungnamSpanRegional>
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
                    else if(i === 9){
                        if(dot !== -1){
                            if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                                  {dot}
                                </YungnamSpanRegional>
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
                    else if(i === 10){
                        if(dot !== -1){
                            if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11 || j === 12){
                              return(
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                                  {dot}
                                </YungnamSpanRegional>
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
                    else if(i === 11){
                        if(dot !==-1){
                            if(j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                                  {dot}
                                </YungnamSpanRegional>
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
                    else if(i === 12){
                        if(dot !== -1){
                            if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                                  {dot}
                                </YungnamSpanRegional>
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
                    else if(i === 13){
                        if(dot !== -1){
                            if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                                  {dot}
                                </YungnamSpanRegional>
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
                    else if(i === 14){
                        if(dot !== -1){
                            if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
                              return(
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                                  {dot}
                                </YungnamSpanRegional>
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
                    else if(i === 15){
                        if(dot !== -1){
                            if(j === 6 || j === 8 || j === 9){
                              return(
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)} number={dot}>
                                  {dot}
                                </YungnamSpanRegional>
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
            </YungnamMapDiv>
          </FullMapWrappingDiv>
        );
      };

export default Yungnam