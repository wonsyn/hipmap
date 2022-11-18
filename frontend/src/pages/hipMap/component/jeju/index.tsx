import { FullMapWrappingDiv, JejuMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { JejuSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from "react-redux";
import { saveClick, saveJeju, saveJejuAnime, saveJejuMobile, saveName, saveRegion } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
import { useDotMapData } from "../../../../hoc/hipMap/fullMap/useDotMapData";
import { useEffect } from "react";
import type { RootState } from "../../../../store/store";
import { useQueryClient } from "@tanstack/react-query";
function Jeju(){
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
        startLat: 33.10,
        endLat: 33.5626,
        startLng: 126.1660,
        endLng: 126.9723,
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
              if(i === 20){
                  if(dot !==-1){
                      if(j === 1 || j === 2 || j === 3){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (33.10 + (0.2328)*(i-20))) && (shorts.latitude <= (33.10 + (0.2328)*(i-19))) )
                           && ((shorts.longitude >= (126.1660 + (0.26877*(j-1)))) && (shorts.longitude <= (126.1660 + (0.26877*j)))) )
                           {
                            mapDot[i][j] += 1
                          }
                        })
                      }
                     
                  }
                
              }
              else if(i === 21){
                  if(dot !== -1){
                      if(j === 1 || j === 2){
                        data.shortsList.map((shorts: any) => {
                          if( ( (shorts.latitude >= (33.10 + (0.2328)*(i-20))) && (shorts.latitude <= (33.10 + (0.2328)*(i-19))) )
                           && ((shorts.longitude >= (126.1660 + (0.26877*(j-1)))) && (shorts.longitude <= (126.1660 + (0.26877*j)))) )
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
    function JejuSelect(){
      dispatch(saveClick())
      dispatch(saveJeju())
      dispatch(saveJejuAnime())
      dispatch(saveJejuMobile({
        isJejuMobile: false
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
    function JejuClick(i: number, j: number){
      const shortsList: any = []
      data.shortsList.map((shorts: any) => {
        if( ( (shorts.latitude >= (33.10 + (0.2328)*(i-20))) && (shorts.latitude <= (33.10 + (0.2328)*(i-19))) )
         && ((shorts.longitude >= (126.1660 + (0.26877*(j-1)))) && (shorts.longitude <= (126.1660 + (0.26877*j)))) )
         {
          shortsList.push(shorts)
        }
      })
     
      navigate('/hipmap/result',
      {state: {shortsList: shortsList}})
    }
        return (
          <FullMapWrappingDiv>
            <ArrowDiv onClick={() => JejuSelect()} >
              <ArrowBackIcon fontSize="large"/>
            </ArrowDiv>
            <JejuMapDiv>
              {mapDot.map((dots, i) => (
              <GridDivRegional>
                {dots.map((dot, j) =>{
                    if(i === 20){
                        if(dot !==-1){
                            if(j === 1 || j === 2 || j === 3){
                              
                              return(
                                <JejuSpanRegional onClick={() =>{JejuClick(i, j)}} number={dot}>
                                  {dot}
                                </JejuSpanRegional>
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
                    else if(i === 21){
                        if(dot !== -1){
                            if(j === 1 || j === 2){
                              return(
                                <JejuSpanRegional onClick={() => JejuClick(i, j)} number={dot}>
                                  {dot}
                                </JejuSpanRegional>
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
            </JejuMapDiv>
          </FullMapWrappingDiv>
        );
      };

export default Jeju