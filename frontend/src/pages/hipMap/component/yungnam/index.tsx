import { FullMapWrappingDiv, YungnamMapDiv, GridDivRegional, NotDotSpanRegional } from "../../styles/fullmap";
import { YungnamSpanRegional } from "../../styles/fullmap";

function Yungnam(){
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
            <YungnamMapDiv>
              {mapDot.map((dots, i) => (
              <GridDivRegional>
                {dots.map((dot, j) =>{
                  if(i === 6){
                    if(dot !== -1){
                        if(j === 10 || j === 11){
                          return(
                            <YungnamSpanRegional>
                              {dot}
                            </YungnamSpanRegional>
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
                            if(j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional>
                                  {dot}
                                </YungnamSpanRegional>
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
                            if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional>
                                  {dot}
                                </YungnamSpanRegional>
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
                            if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional>
                                  {dot}
                                </YungnamSpanRegional>
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
                            if(j === 7 || j === 8 || j === 9 || j === 10 || j === 11 || j === 12){
                              return(
                                <YungnamSpanRegional>
                                  {dot}
                                </YungnamSpanRegional>
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
                        if(dot !==-1){
                            if(j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional>
                                  {dot}
                                </YungnamSpanRegional>
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
                            if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional>
                                  {dot}
                                </YungnamSpanRegional>
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
                            if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9 || j === 10 || j === 11){
                              return(
                                <YungnamSpanRegional>
                                  {dot}
                                </YungnamSpanRegional>
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
                            if(j === 5 || j === 6 || j === 7 || j === 8 || j === 9){
                              return(
                                <YungnamSpanRegional>
                                  {dot}
                                </YungnamSpanRegional>
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
                            if(j === 6 || j === 8 || j === 9){
                              return(
                                <YungnamSpanRegional>
                                  {dot}
                                </YungnamSpanRegional>
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
            </YungnamMapDiv>
          </FullMapWrappingDiv>
        );
      };

export default Yungnam