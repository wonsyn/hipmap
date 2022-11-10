import { FullMapWrappingDiv, YungnamMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { YungnamSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from "react-redux";
import { saveClick, saveYungnam, saveYungnamMobile, saveName, saveYungnamAnime, saveRegion } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
import { useDotMapData } from "../../../../hoc/hipMap/fullMap/useDotMapData";

function Yungnam(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data,isLoading} = useDotMapData(
      {
        queryKey: "dotMapData",
        uri: "/shorts/maplist",
        startLat: 34.2656,
        endLat: 35.968,
        startLng: 125.0667,
        endLng: 127.1514,
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
      {mapDot.map((dots, i) => {
          {dots.map((dot, j) =>{
            if(i === 6){
              if(dot !== -1){
                  if(j === 10 || j === 11){
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
              else if(i === 7){
                  if(dot !== -1){
                      if(j === 8 || j === 9 || j === 10 || j === 11){
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
              else if(i === 8){
                  if(dot !== -1){
                      if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
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
              else if(i === 9){
                  if(dot !== -1){
                      if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
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
              else if(i === 10){
                  if(dot !== -1){
                      if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11 || j === 12){
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
              else if(i === 11){
                  if(dot !==-1){
                      if(j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
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
              else if(i === 12){
                  if(dot !== -1){
                      if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
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
              else if(i === 13){
                  if(dot !== -1){
                      if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
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
              else if(i === 14){
                  if(dot !== -1){
                      if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
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
              else if(i === 15){
                  if(dot !== -1){
                      if(j === 6 || j === 8 || j === 9){
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
                            <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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
                                <YungnamSpanRegional onClick={() => YungnamClick(i, j)}>
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