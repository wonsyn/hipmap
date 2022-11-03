import { FullMapWrappingDiv, GwandongMapDiv, GridDivRegional, NotDotSpanRegional, ArrowDiv } from "../../styles/fullmap";
import { GwandongSpanRegional } from "../../styles/fullmap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch } from "react-redux";
import { saveClick, saveGwandong, saveGwandongAnime, saveGwandongMobile, saveName } from "../../../../store/hipMap/hipMapStore";
import { useNavigate } from "react-router-dom";
function Gwandong(){
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
    function GwandongClick(){
      navigate('/hipmap/result')
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
                                <GwandongSpanRegional onClick={() => GwandongClick()}>
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
                                <GwandongSpanRegional onClick={() => GwandongClick()}>
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
                                <GwandongSpanRegional onClick={() => GwandongClick()}>
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
                                <GwandongSpanRegional onClick={() => GwandongClick()}>
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
                                <GwandongSpanRegional onClick={() => GwandongClick()}>
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
                                <GwandongSpanRegional onClick={() => GwandongClick()}>
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