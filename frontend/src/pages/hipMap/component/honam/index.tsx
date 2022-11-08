import { FullMapWrappingDiv, HonamMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { HonamSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from "react-redux";
import { saveClick, saveHonam, saveHonamAnime, saveHonamMobile, saveName } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
import { useDotMapData } from "../../../../hoc/hipMap/fullMap/useDotMapData";

function Honam(){
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
              if(i === 10){
                  if(dot !== -1){
                      if(j === 2 || j === 3 || j === 4){
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
                  if(dot !== -1){
                      if(j === 2 || j === 3 || j === 4 || j === 5){
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
                      if(j === 2 || j === 3 || j === 4){
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
                      if(j === 1 || j === 2 || j === 3 || j === 4){
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
                      if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4){
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
                      if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5){
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
              else if(i === 16){
                  if(dot !== -1){
                      if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5){
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
    function HonamSelect(){
      dispatch(saveClick())
      dispatch(saveHonam())
      dispatch(saveHonamAnime())
      dispatch(saveHonamMobile({
        isHonamMobile: false
      }))
      dispatch(saveName(
        {
          name: ""
        }))
      }
      function HonamClick(i: number, j: number){
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
             <ArrowDiv onClick={() => HonamSelect()} >
              <ArrowBackIcon fontSize="large"/>
            </ArrowDiv>
            <HonamMapDiv>
              {mapDot.map((dots, i) => (
              <GridDivRegional>
                {dots.map((dot, j) =>{
                    if(i === 10){
                        if(dot !== -1){
                            if(j === 2 || j === 3 || j === 4){
                              return(
                                <HonamSpanRegional onClick={() => HonamClick(i, j)}>
                                  {dot}
                                </HonamSpanRegional>
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
                        if(dot !== -1){
                            if(j === 2 || j === 3 || j === 4 || j === 5){
                              return(
                                <HonamSpanRegional onClick={() => HonamClick(i, j)}>
                                  {dot}
                                </HonamSpanRegional>
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
                            if(j === 2 || j === 3 || j === 4){
                              return(
                                <HonamSpanRegional onClick={() => HonamClick(i, j)}>
                                  {dot}
                                </HonamSpanRegional>
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
                            if(j === 1 || j === 2 || j === 3 || j === 4){
                              return(
                                <HonamSpanRegional onClick={() => HonamClick(i, j)}>
                                  {dot}
                                </HonamSpanRegional>
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
                            if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4){
                              return(
                                <HonamSpanRegional onClick={() => HonamClick(i, j)}>
                                  {dot}
                                </HonamSpanRegional>
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
                            if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5){
                              return(
                                <HonamSpanRegional onClick={() => HonamClick(i, j)}>
                                  {dot}
                                </HonamSpanRegional>
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
                    else if(i === 16){
                        if(dot !== -1){
                            if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5){
                              return(
                                <HonamSpanRegional onClick={() => HonamClick(i, j)}>
                                  {dot}
                                </HonamSpanRegional>
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
            </HonamMapDiv>
          </FullMapWrappingDiv>
        );
      };
export default Honam