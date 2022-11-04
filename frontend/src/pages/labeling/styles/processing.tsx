import styled from "@emotion/styled";
import { palette } from "../../../assets/Palette";
import { keyframes } from "@emotion/react";

interface AnimationProps{
    change?: boolean
}

const slideInRight = keyframes`
    0% {
        -webkit-transform: translateX(1000px);
                transform: translateX(1000px);
        opacity: 0;
  }
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
        opacity: 1;
  }

`;
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
    height: 92vh;
    border: 2px solid ${palette.subColorCyan};
    border-style: none solid solid solid;
`

export const ProcessBarDiv = styled.div`
    width: 90%;
    
`
export const QuestionDiv = styled.div`
    width: 80%;
    height: 40%;
    background: ${palette.subColorGradient1};
    color: white;
    border-radius: 8px;
    padding: 5%;
    animation: ${slideInRight} 0.6s ease-out both;
`

export const SelectButton = styled.button`
    width: 85%;
    height: 12%;
    background: ${palette.subColorGradient3};
    color: white;
    font-weight: bold;
    border-radius: 8px ;
    text-shadow: 2px 2px 4px black;
    padding: 2%;
    animation: ${slideInRight} 0.6s ease-out both;
    :hover{
        cursor: pointer;
    }
`