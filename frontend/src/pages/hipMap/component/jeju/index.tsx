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
        startLat: 33.10,
        endLat: 33.5626,
        startLng: 126.1660,
        endLng: 126.9723,
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
                          if( ( (shorts.latitude >= (33.10 + (0.2328)*(i-20))) && (shorts.latitude <= (33.10 + (0.2328)*(i-19))) )
                           && ((shorts.longitude >= (126.1660 + (0.26877*(j-1)))) && (shorts.longitude <= (126.1660 + (0.26877*j)))) )
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
                          if( ( (shorts.latitude >= (33.10 + (0.2328)*(i-20))) && (shorts.latitude <= (33.10 + (0.2328)*(i-19))) )
                           && ((shorts.longitude >= (126.1660 + (0.26877*(j-1)))) && (shorts.longitude <= (126.1660 + (0.26877*j)))) )
                           {
                            mapDot[i][j] += 1
                            console.log("진행 완료")
                            console.log(mapDot)
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
      console.log(i,j)
      const shortsList: any = []
      data.shortsList.map((shorts: any) => {
        if( ( (shorts.latitude >= (33.10 + (0.2328)*(i-20))) && (shorts.latitude <= (33.10 + (0.2328)*(i-19))) )
         && ((shorts.longitude >= (126.1660 + (0.26877*(j-1)))) && (shorts.longitude <= (126.1660 + (0.26877*j)))) )
         {
          shortsList.push(shorts)
        }
        console.log(i, j, shortsList)
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
                                <JejuSpanRegional onClick={() =>{ console.log(i, j); JejuClick(i, j)}} number={dot}>
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