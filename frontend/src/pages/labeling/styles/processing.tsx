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
const fadeOutLeftInRight = keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
        transform: translate3d(-100%, 0, 0), translate3d(100%, 0, 0);
    }
    100%{
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`

const slideInRight = keyframes`
    0% {
        -webkit-transform: translateX(500px);
                transform: translateX(500px);
        opacity: 0;
  }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
  }
`;

const slideInLeft = keyframes`
     0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
    }
    100% {
        -webkit-transform: translateX(-1000px);
                transform: translateX(-1000px);
        opacity: 0;
    }
`

const emphasizingSlide = keyframes`
    0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    }
    100% {
    -webkit-transform: translateX(73%);
            transform: translateX(73%);
    }

`
export const TieStyle = styled.div`
    background: ${palette.subColorGradient2};
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
    
`
export const EmphasizingImg = styled.img<AnimationProps>`
    width: 33px;
    height: 40px;
    position: relative;
    z-index: 10000;
    top: 50%;
    left: calc(${(props) => props.number}% - 11%);
    animation: ${emphasizingSlide} 0.5s ease-out both;
    animation-fill-mode: forwards;
`
export const QuestionDiv = styled.div<AnimationProps>`
    width: 80%;
    height: 40%;
    background: ${palette.subColorGradient1};
    color: white;
    border-radius: 8px;
    padding: 5%;
    font-size: 1.3rem;
    text-shadow: 2px 2px 4px black;
    animation-fill-mode: ${(props) => props.number? `forwards`: ``};
    animation-name: ${(props) => props.number? css`${fadeOutLeft}, ${fadeInRight}`: ``};
    animation-delay: ${(props) => props.number? `0s, 0.3s`: ``};
    animation-duration: ${(props) => props.number? `0.3s, 0.6s`: ``};
    animation-timing-function: ${(props) => props.number? `ease-in, ease-in-out`: ``};  
`


export const SelectButton = styled.button<AnimationProps>`
    width: 85%;
    height: 12%;
    background: ${palette.subColorGradient3};
    color: white;
    font-weight: bold;
    border-radius: 8px ;
    text-shadow: 2px 2px 4px black;
    padding: 2%;
    animation-fill-mode: ${(props) => props.number? `forwards`: ``};
    animation-name: ${(props) => props.number? css`${fadeOutLeft}, ${fadeInRight}`: ``};
    animation-delay: ${(props) => props.number? `0.05s, 0.35s`: ``};
    animation-duration: ${(props) => props.number? `0.35s, 0.65s`: ``};
    animation-timing-function: ${(props) => props.number? `ease-in, ease-in-out`: ``};
    :hover{
        cursor: pointer;
    }
`