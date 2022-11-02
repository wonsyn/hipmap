import { FullMapWrappingDiv, HoseoMapDiv, GridDivRegional, NotDotSpanRegional } from "../../styles/fullmap";
import { HoseoSpanRegional } from "../../styles/fullmap";
function Hoseo(){
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
            <HoseoMapDiv>
              {mapDot.map((dots, i) => (
              <GridDivRegional>
                {dots.map((dot, j) =>{
                    if(i === 5){
                      if(dot !== -1){
                          if(j === 6 || j === 7 || j === 8){
                            return(
                              <HoseoSpanRegional>
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
                                <HoseoSpanRegional>
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
                                <HoseoSpanRegional>
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
                                <HoseoSpanRegional>
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
                                <HoseoSpanRegional>
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
                                <HoseoSpanRegional>
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