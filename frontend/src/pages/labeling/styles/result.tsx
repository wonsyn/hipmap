import styled from "@emotion/styled";
import { palette } from "../../../assets/Palette";
import { keyframes } from "@emotion/react";

interface LabelingNameProps{
    number: number
}


const infiniteRotate = keyframes`
    100%{
        transform: rotate(360deg);
    }
` 
const threeDimensionsCircle = keyframes`
     0% {
    transform: rotateX(-100deg) rotate(0);
    }
    100% {
    transform: rotateX(-100deg) rotate(-360deg);
    }
`
export const WrappingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    max-width: 500px;
    /* height: 92vh; */
    background-color: ${palette.mainColor};
    // border 관련
    border: 5px solid transparent;
    border-radius: 20px;
    border-image: ${palette.subColorGradient4};
    border-image-slice: 1;
    margin: 10px;
`
export const KakaoShareDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    margin: 5% 0;
`
export const KakaoShareImg = styled.img`
    border: none;
    outline: none;
    box-shadow: none;
    :hover{
        cursor: pointer;
    }
`

export const LabelingCharacterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 200px;
    height: 20%;
`

export const LabelingDetailDiv = styled.div`
    width: 85%;
    /* height: 40%; */
    border-radius: 8px;
    background: ${palette.subColorGradient1};
`
export const MappingDiv = styled.div`
    font-size: 1.2rem;
    margin: 7%;
    text-shadow: 2px 2px 4px black;
    word-break: break-all;
    @media screen and (max-width :700px) {
        font-size: 0.8rem;
    }
    
`

export const  LabelingNameDiv = styled.div`
    // 텍스트에 그라데이션
    background: ${palette.subColorGradient4};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    //
    font-size: 2rem;
    font-weight: bold;
    margin: 6%;
    /* overflow: hidden;
    z-index: 100; */
`
export const LabelingNameUl = styled.ul`
    margin: 0;
    list-style: none;
    font-size: 2vw;
    transform-style: preserve-3d;
    animation: ${threeDimensionsCircle} 10s linear infinite;
   
`

export const LabelingNameLi = styled.li<LabelingNameProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -20%) rotate(calc(${(props) => props.number} * 30deg - 60deg)) translateY(-260px) rotateX(90deg);
    z-index: 100;
`   
export const WithButton = styled.button`
    width: 80%;
    height: 7vh;
    font-size: 80%;
    color: white;
    border-radius: 10px;
    margin: 5% 0;
    text-shadow: 2px 2px 4px black;
    border: none;
    outline: none;
    box-shadow: none;
    background: ${palette.subColorGradient2};
    :hover{
        cursor: pointer;
    }
`
