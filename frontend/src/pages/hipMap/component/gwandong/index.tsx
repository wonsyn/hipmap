import { FullMapWrappingDiv, GwandongMapDiv, GridDivRegional, NotDotSpanRegional } from "../../styles/fullmap";
import { GwandongSpanRegional } from "../../styles/fullmap";

function Gwandong(){
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
        return (
          <FullMapWrappingDiv>
            <GwandongMapDiv>
              {mapDot.map((dots, i) => (
              <GridDivRegional>
                {dots.map((dot, j) =>{
                    if(i === 0){
                        if(dot !== -1){
                            if(j === 8){
                              return(
                                <GwandongSpanRegional>
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
                                <GwandongSpanRegional>
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
                                <GwandongSpanRegional>
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
                                <GwandongSpanRegional>
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
                                <GwandongSpanRegional>
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
                                <GwandongSpanRegional>
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