import { FullMapWrappingDiv, HoseoMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { HoseoSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from "react-redux";
import { saveClick, saveHoseo, saveHoseoAnime, saveHoseoMobile, saveName, saveRegion } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useDotMapData } from "../../../../hoc/hipMap/fullMap/useDotMapData";
import { RootState } from "../../../../store/store";
import { useEffect } from "react";

function Hoseo(){
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
        startLat: 35.7248,
        endLat: 37.9136,
        startLng: 125.0667,
        endLng: 128.5412,
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
              if(i === 5){
                if(dot !== -1){
                    if(j === 6 || j === 7 || j === 8){
                      data.shortsList.map((shorts: any) => {
                        if( ((shorts.latitude >= (38.40 - (0.2432)*(i+1))) && (shorts.latitude <= (38.40 - (0.2432)*(i))) )
                         && ((shorts.longitude >= (125.0667 + (0.34745*j))) && (shorts.longitude <= (125.0667 + (0.34745*(j+1) )) )) )
                         {
                          mapDot[i][j] += 1
                        
                        }
                      })
                    }
                   
                }
               
                
              }
              else if(i === 6){
                  if(dot !== -1){
                      if(j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
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
                      if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7){
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
                      if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
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
                      if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
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
                      if(j === 5 || j === 6){
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
    function HoseoSelect(){
      dispatch(saveClick())
      dispatch(saveHoseo())
      dispatch(saveHoseoAnime())
      dispatch(saveHoseoMobile({
        isHoseoMobile: false
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
    function HoseoClick(i: number, j: number){
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
            <ArrowDiv onClick={() => HoseoSelect()} >
              <ArrowBackIcon fontSize="large"/>
            </ArrowDiv>
            <HoseoMapDiv>
              {mapDot.map((dots, i) => (
              <GridDivRegional>
                {dots.map((dot, j) =>{
                    if(i === 5){
                      if(dot !== -1){
                          if(j === 6 || j === 7 || j === 8){
                            return(
                              <HoseoSpanRegional onClick={() => HoseoClick(i, j)} number={dot}>
                                {dot}
                              </HoseoSpanRegional>
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
                    else if(i === 6){
                        if(dot !== -1){
                            if(j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
                              return(
                                <HoseoSpanRegional onClick={() => HoseoClick(i, j)} number={dot}>
                                  {dot}
                                </HoseoSpanRegional>
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
                            if(j === 0 || j === 1 || j === 2 || j === 3 || j === 4 || j === 5 || j === 6 || j === 7){
                              return(
                                <HoseoSpanRegional onClick={() => HoseoClick(i, j)} number={dot}>
                                  {dot}
                                </HoseoSpanRegional>
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
                            if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                              return(
                                <HoseoSpanRegional onClick={() => HoseoClick(i, j)} number={dot}>
                                  {dot}
                                </HoseoSpanRegional>
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
                            if(j === 2 || j === 3 || j === 4 || j === 5 || j === 6){
                              return(
                                <HoseoSpanRegional onClick={() => HoseoClick(i, j)} number={dot}>
                                  {dot}
                                </HoseoSpanRegional>
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
                            if(j === 5 || j === 6){
                                return(
                                <HoseoSpanRegional onClick={() => HoseoClick(i, j)} number={dot}>
                                    {dot}
                                </HoseoSpanRegional>
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
            </HoseoMapDiv>
          </FullMapWrappingDiv>
        );
      };
export default Hoseo