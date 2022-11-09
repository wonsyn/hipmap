import { FullMapWrappingDiv, GwandongMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { GwandongSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from "react-redux";
import { saveClick, saveGwandong, saveGwandongAnime, saveGwandongMobile, saveName } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
import { useDotMapData } from "../../../../hoc/hipMap/fullMap/useDotMapData";

function Gwandong(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data,isLoading} = useDotMapData(
      {
        queryKey: "dotMapData",
        uri: "/shorts/maplist",
        startLat: 36.9408,
        endLat: 38.40,
        startLng: 127.1514 ,
        endLng: 129.58355,
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
          {dots.map((dot, j) => {
              if(i === 0){
                  if(dot !== -1){
                      if(j === 8){
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
              else if(i === 1){
                  if(dot !== -1){
                      if(j === 6 || j === 7 || j === 8){
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
                      if(j === 6 || j === 7 || j === 8 || j === 9){
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
                      if(j === 7 || j === 8 || j === 9 || j === 10){
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
                      if(j === 7 || j === 8 || j === 9 || j === 10){
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
              else if(i === 5){
                  if(dot !== -1){
                      if(j === 9 || j === 10 || j === 11){
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
    function GwandongSelect(){
      dispatch(saveClick())
      dispatch(saveGwandong())
      dispatch(saveGwandongAnime())
      dispatch(saveGwandongMobile({
        isGwandongMobile: false
      }))
      dispatch(saveName(
        {
          name: ""
        }))

      }
    function GwandongClick(i: number, j: number){
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
            <ArrowDiv onClick={() => GwandongSelect()} >
              <ArrowBackIcon fontSize="large"/>
            </ArrowDiv>
            <GwandongMapDiv>
              {mapDot.map((dots, i) => (
              <GridDivRegional>
                {dots.map((dot, j) =>{
                    if(i === 0){
                        if(dot !== -1){
                            if(j === 8){
                              return(
                                <GwandongSpanRegional onClick={() => GwandongClick(i, j)}>
                                  {dot}
                                </GwandongSpanRegional>
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
                    else if(i === 1){
                        if(dot !== -1){
                            if(j === 6 || j === 7 || j === 8){
                              return(
                                <GwandongSpanRegional onClick={() => GwandongClick(i, j)}>
                                  {dot}
                                </GwandongSpanRegional>
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
                            if(j === 6 || j === 7 || j === 8 || j === 9){
                              return(
                                <GwandongSpanRegional onClick={() => GwandongClick(i, j)}>
                                  {dot}
                                </GwandongSpanRegional>
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
                            if(j === 7 || j === 8 || j === 9 || j === 10){
                              return(
                                <GwandongSpanRegional onClick={() => GwandongClick(i, j)}>
                                  {dot}
                                </GwandongSpanRegional>
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
                            if(j === 7 || j === 8 || j === 9 || j === 10){
                              return(
                                <GwandongSpanRegional onClick={() => GwandongClick(i, j)}>
                                  {dot}
                                </GwandongSpanRegional>
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
                            if(j === 9 || j === 10 || j === 11){
                              return(
                                <GwandongSpanRegional onClick={() => GwandongClick(i, j)}>
                                  {dot}
                                </GwandongSpanRegional>
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
            </GwandongMapDiv>
          </FullMapWrappingDiv>
        );
      };

export default Gwandong