import { FullMapWrappingDiv, JejuMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { JejuSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from "react-redux";
import { saveClick, saveJeju, saveJejuAnime, saveJejuMobile, saveName, saveRegion } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
import { useDotMapData } from "../../../../hoc/hipMap/fullMap/useDotMapData";
function Jeju(){
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
              if(i === 20){
                  if(dot !==-1){
                      if(j === 1 || j === 2 || j === 3){
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
              else if(i === 21){
                  if(dot !== -1){
                      if(j === 1 || j === 2){
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
                                <JejuSpanRegional onClick={() => JejuClick(i, j)}>
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
                                <JejuSpanRegional onClick={() => JejuClick(i, j)}>
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