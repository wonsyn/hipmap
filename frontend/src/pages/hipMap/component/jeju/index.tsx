import { FullMapWrappingDiv, JejuMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { JejuSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from "react-redux";
import { saveClick, saveJeju, saveJejuAnime, saveJejuMobile, saveName } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
function Jeju(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
    }
    function JejuClick(){
      navigate('/hipmap/result')
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
                                <JejuSpanRegional onClick={() => JejuClick()}>
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
                                <JejuSpanRegional onClick={() => JejuClick()}>
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