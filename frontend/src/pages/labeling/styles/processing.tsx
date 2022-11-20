import styled from "@emotion/styled";
import { palette } from "../../../assets/Palette";
import { css, keyframes } from "@emotion/react";

interface AnimationProps{
    change?: boolean
    number?: any
}
const fadeOutLeft = keyframes`
    from {
        opacity: 1;
        }

    to {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
  }
`
const fadeInRight = keyframes`
     from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

`

const emphasizingSlide = keyframes`
    0% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    }
    100% {
    -webkit-transform: translateX(90%);
            transform: translateX(90%);
    }

`
export const TieStyle = styled.div`
    /* background: ${palette.subColorGradient2}; */
    height: 4%;
    width: 100%;
    margin-top: -2.5vh;
`

export const WrapperDiv = styled.div<AnimationProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 100vw;
    height: 100vh; */
    overflow: hidden;
`

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 96vw;
    max-width: 500px;
    height: 88vh;
    /* border: 2px solid ${palette.subColorCyan}; */
    /* border-style: none solid solid solid; */
`

export const ProcessBarDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ProcessBarDiv2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10%
`
export const ProcessBarWrapping = styled.div`
    width: 100%;
    height: 2vh;
    border: 2px solid;
`
export const ProcessBar = styled.div<AnimationProps>`
    width: calc(${(props) => props.number * (100/11) + (100/11)}%);
    height: 2vh;
    /* border: 2px solid; */
    border-radius: 10px;
    margin-left: -33px;
    background-color: red;
    animation: ${emphasizingSlide} 1s ease-out;
    animation-fill-mode: forwards;
    animation-play-state: running;
`
export const EmphasizingImg = styled.img<AnimationProps>`
    width: 33px;
    height: 40px;
    position: fixed;
    z-index: 10000;
    top: 6.5%;
    left: calc(${(props) => props.number*0.31}%  + 34% );
    animation: ${emphasizingSlide} 1s ease-out;
    animation-fill-mode: both;
    animation-play-state: running;
    @media screen and (max-width :700px) {
        left: calc(${(props) => props.number*0.85 }% );
    }
`
export const QuestionDiv = styled.div<AnimationProps>`
    width: 80%;
    height: 40%;
    background: ${palette.subColorDarkPurple};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 5%;
    font-size: 1.1rem;
    text-shadow: 2px 2px 4px purple;
    animation-fill-mode: ${(props) => props.number? `forwards`: ``};
    animation-name: ${(props) => props.number? css`${fadeOutLeft}, ${fadeInRight}`: ``};
    animation-delay: ${(props) => props.number? `0s, 0.3s`: ``};
    animation-duration: ${(props) => props.number? `0.3s, 0.6s`: ``};
    animation-timing-function: ${(props) => props.number? `ease-in, ease-in-out`: ``};  
`


export const SelectButton = styled.button<AnimationProps>`
    width: 85%;
    height: 12%;
    background: ${palette.mainColor};
    color: white;
    font-weight: bold;
    border-radius: 8px ;
    text-shadow: 2px 2px 4px black;
    padding: 2%;
    animation-fill-mode: ${(props) => props.number? `forwards`: ``};
    animation-name: ${(props) => props.number? css`${fadeOutLeft}, ${fadeInRight}`: ``};
    animation-delay: ${(props) => props.number? `0.05s, 0.35s`: ``};
    animation-duration: ${(props) => props.number? `0.35s, 0.55s`: ``};
    animation-timing-function: ${(props) => props.number? `ease-in, ease-in-out`: ``};
    :hover{
        cursor: pointer;
    }
`