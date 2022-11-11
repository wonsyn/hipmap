import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled"
import { palette } from "../../../assets/Palette"


const fadeOutLeft = keyframes`
    from {opacity: 1;}
    to { opacity: 0; transform: translate3d(-100%, 0, 0);}
`
const fadeOutRight = keyframes`
    from {opacity: 1;}
    to {opacity: 0; transform: translate3d(100%, 0, 0);}
`
const sudogwanAnime = keyframes`
    from {color: red;}
    to {transform: scale(1.5) translate(3vw, 15vh); color: red;}
`
const sudogwanMobileAnime = keyframes`
    from {color: red;}
    to {transform: scale(1.5) translate(8vw, 15vh); color: red;}
`
const gwandongAnime = keyframes`
    from {color: green;}
    to {transform: scale(1.5) translate(-4vw, 18vh); color: green;}
`
const gwandongMobileAnime = keyframes`
    from {color: green;}
    to {transform: scale(1.5) translate(-5vw, 15vh); color: green;}
`
const hoseoAnime = keyframes`
    from {color: blue;}
    to {transform: scale(1.5) translate(3vw, 6vh); color: blue;}
`
const hoseoMobileAnime = keyframes`
    from {color: blue;}
    to {transform: scale(1.5) translate(6vw, 8vh); color: blue;}
`
const honamAnime = keyframes`
    from {color: brown;}
    to {transform: scale(1.5) translate(4vw, -6vh); color: brown;}
`
const honamMobileAnime = keyframes`
    from {color: brown;}
    to {transform: scale(1.5) translate(14vw, -7vh); color: brown;}
`
const yungnamAnime = keyframes`
    from {color: purple;}
    to {transform: scale(1.5) translate(-3vw, -1vh); color: purple;}
`
const yungnamMobileAnime = keyframes`
    from {color: purple;}
    to {transform: scale(1.5) translate(-7vw, -1vh); color: purple;}
`
const jejuAnime = keyframes`
    from {color: pink;}
    to {transform: scale(1.5) translate(6vw, -21vh); color: pink;}
`
const jejuMobileAnime = keyframes`
    from {color: pink;}
    to {transform: scale(1.5) translate(14vw, -18vh); color: pink;}
`

interface SelectProps{
    select: boolean;
    region: string;
    animation?: boolean;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    onClick?: () => void;
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
}

interface ButtonProps{
    name: string;

}

interface NumberProps{
    number: number;
}

export const WrappingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const FullMapWrappingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const FullMapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    max-width: 600px;
    height: 69vh;
    margin: 30px 0 0 0;
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100vw;
        max-width: 600px;
        height: 60vh;
        margin: 30px 0 0 0;
    }
`
export const SudogwanMapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: 92vh;
    position: fixed;
    top: 30vh;
    right: 26vw;
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-width: 600px;
        height: 92vh;
        position: fixed;
        top: 25vh;
        left: 4vw;
    }
`
export const GwandongMapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: 92vh;
    /* margin: 0 250px 0 0; */
    position: fixed;
    top: 25vh;
    right: 35vw;
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-width: 600px;
        height: 92vh;
        position: fixed;
        right: 37vw;
    }
`
export const HoseoMapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: 92vh;
    position: fixed;
    right: 27vw;
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-width: 600px;
        height: 92vh;
        position: fixed;
        right: 4vw;
    }
`
export const HonamMapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: 92vh;
    position: fixed;
    bottom: 10vh;
    left: 38vw;
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-width: 600px;
        height: 92vh;
        position: fixed;
        bottom: 10vh;
        left: 13vw;
    }
`
export const YungnamMapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: 92vh;
    margin: 0 300px 0 0;
    position: fixed;
    left: 24vw;
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-width: 600px;
        height: 92vh;
        position: fixed;
        top: 1vh;
        left: -35vw;
    }
`
export const JejuMapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 600px;
    height: 92vh;
    position: fixed;
    bottom: 40vh;
    left: 40vw;
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-width: 600px;
        height: 92vh;
        position: fixed;
        left: 20vw;
    }
`

export const GridDiv = styled.div`
    /* margin: 6px; */
    /* padding: 5px; */
    /* margin-left: 10px; */
    width: 70%;
    margin: 10px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

   
`
export const GridDivRegional = styled.div`
    margin: 4px;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
   
`

export const NotDotSpan = styled.span`
    width: 15px;
    height: 15px;
    visibility: hidden;
    @media screen and (max-width: 700px){
        width: 5px;
        height: 5px;

     }

`
export const NotDotSpanRegional = styled.span`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    visibility: hidden;
`

export const SudogwanSpan = styled.span<SelectProps>`
    width: 15px;
    height: 15px;
    
    /* border: 2px solid ${palette.subColorCyan}; */
    border-radius: 20%;
    background-color: ${(props)=>props.select? `red` : `white`};
    animation-fill-mode: ${(props) => props.region === "Sudogwan" && `forwards`};
    animation-fill-mode: ${(props) => ((props.region === "Gwandong") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `forwards`};
    animation-name: ${(props) => props.region === "Sudogwan" && css`${sudogwanAnime}`};
    animation-name: ${(props) => ((props.region === "Gwandong") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && css`${fadeOutLeft}`};
    animation-delay: ${(props) => props.region === "Sudogwan" && `0.4s`};
    animation-delay: ${(props) => ((props.region === "Gwandong") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `0.05s`};
    animation-duration: ${(props) => props.region === "Sudogwan" && `0.4s`};
    animation-duration: ${(props) => ((props.region === "Gwandong") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `0.35s`};
    animation-timing-function: ${(props) => props.region === "Sudogwan" && `ease-in-out`};
    animation-timing-function: ${(props) => ((props.region === "Gwandong") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `ease-in`};
    /* transform: ${(props) => props.animation? `scale(4) translate(2vw, 7vh)`: ``};
    transition:${(props) => props.animation? `all ease 1.5s 0.35s;`: ``}; */
    font-size: 0;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 700px){
        width: 5px;
        height: 5px;
        border: 1px solid ${palette.subColorCyan};
        border-radius: 20%;
        animation-name: ${(props) => props.region === "Sudogwan" && css`${sudogwanMobileAnime}`};
        
    }
`
export const SudogwanSpanRegional = styled.span<NumberProps>`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    border-radius: 20%;
    color: red;
    background-color: ${(props) => props.number === 0  && `white`};
    background-color: ${(props) => ((props.number > 0) && (props.number < 3))  && `gray`};
    background-color: ${(props) => ((props.number >= 3) && (props.number < 6))  && `blue`};
    background-color: ${(props) => ((props.number >= 6) && (props.number < 10))  && `orange`};
    background-color: ${(props) => props.number > 10   && `red`};
    :hover{
        cursor: pointer;
    }
`

export const GwandongSpan = styled.span<SelectProps>`
    width: 15px;
    height: 15px;
    /* border: 2px solid ${palette.subColorCyan}; */
    border-radius: 20%;
    background-color: ${(props)=>props.select? `green` : `white`};
    animation-fill-mode: ${(props) => props.region === "Gwandong" && `forwards`};
    animation-fill-mode: ${(props) => ((props.region === "Sudogwan") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `forwards`};
    animation-name: ${(props) => props.region === "Gwandong" && css`${gwandongAnime}`};
    animation-name: ${(props) => ((props.region === "Sudogwan") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && css`${fadeOutRight}`};
    animation-delay: ${(props) => props.region === "Gwandong" && `0.4s`};
    animation-delay: ${(props) => ((props.region === "Sudogwan") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `0.05s`};
    animation-duration: ${(props) => props.region === "Gwandong" && `0.4s`};
    animation-duration: ${(props) => ((props.region === "Sudogwan") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `0.35s`};
    animation-timing-function: ${(props) => props.region === "Gwandong" && `ease-in-out`};
    animation-timing-function: ${(props) => ((props.region === "Sudogwan") || (props.region === "Hoseo")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `ease-in`};
    /* transform: ${(props) => props.animation? `scale(4) translate(-2vw, 7vh)`: ``};
    transition:${(props) => props.animation? `all ease 1.5s 0s;`: ``}; */
    font-size: 0;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 700px){
        width: 5px;
        height: 5px;
        border: 1px solid ${palette.subColorCyan};
        border-radius: 20%;
        animation-name: ${(props) => props.region === "Gwandong" && css`${gwandongMobileAnime}`};
    }
`
export const GwandongSpanRegional = styled.span<NumberProps>`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    border-radius: 20%;
    color: red;
    background-color: ${(props) => props.number === 0  && `white`};
    background-color: ${(props) => ((props.number > 0) && (props.number < 3))  && `gray`};
    background-color: ${(props) => ((props.number >= 3) && (props.number < 6))  && `blue`};
    background-color: ${(props) => ((props.number >= 6) && (props.number < 10))  && `orange`};
    background-color: ${(props) => props.number > 10   && `red`};
    :hover{
        cursor: pointer;
    }
`
export const HoseoSpan = styled.span<SelectProps>`
    width: 15px;
    height: 15px;
    /* border: 2px solid ${palette.subColorCyan}; */
    border-radius: 20%;
    background-color: ${(props)=>props.select? `blue` : `white`};
    animation-fill-mode: ${(props) => props.region === "Hoseo" && `forwards`};
    animation-fill-mode: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `forwards`};
    animation-name: ${(props) => props.region === "Hoseo" && css`${hoseoAnime}`};
    animation-name: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && css`${fadeOutLeft}`};
    animation-delay: ${(props) => props.region === "Hoseo" && `0.4s`};
    animation-delay: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `0.05s`};
    animation-duration: ${(props) => props.region === "Hoseo" && `0.4s`};
    animation-duration: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `0.35s`};
    animation-timing-function: ${(props) => props.region === "Hoseo" && `ease-in-out`};
    animation-timing-function: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Honam") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `ease-in`};
    /* transform: ${(props) => props.animation? `scale(4) translate(1vw, 4vh)`: ``};
    transition:${(props) => props.animation? `all ease 1.5s 0s;`: ``}; */
    font-size: 0;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 700px){
        width: 5px;
        height: 5px;
        border: 1px solid ${palette.subColorCyan};
        border-radius: 20%;
        animation-name: ${(props) => props.region === "Hoseo" && css`${hoseoMobileAnime}`};
    }
`
export const HoseoSpanRegional = styled.span<NumberProps>`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    border-radius: 20%;
    background-color: ${(props) => props.number === 0  && `white`};
    background-color: ${(props) => ((props.number > 0) && (props.number < 3))  && `gray`};
    background-color: ${(props) => ((props.number >= 3) && (props.number < 6))  && `blue`};
    background-color: ${(props) => ((props.number >= 6) && (props.number < 10))  && `orange`};
    background-color: ${(props) => props.number > 10   && `red`};
    /* font-size: 0; */
    color: red;
    :hover{
        cursor: pointer;
    }
`
export const HonamSpan = styled.span<SelectProps>`
    width: 15px;
    height: 15px;
    /* border: 2px solid ${palette.subColorCyan}; */
    border-radius: 20%;
    background-color: ${(props)=>props.select? `brown` : `white`};
    animation-fill-mode: ${(props) => props.region === "Honam" && `forwards`};
    animation-fill-mode: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `forwards`};
    animation-name: ${(props) => props.region === "Honam" && css`${honamAnime}`};
    animation-name: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && css`${fadeOutLeft}`};
    animation-delay: ${(props) => props.region === "Honam" && `0.4s`};
    animation-delay: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `0.05s`};
    animation-duration: ${(props) => props.region === "Honam" && `0.4s`};
    animation-duration: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `0.35s`};
    animation-timing-function: ${(props) => props.region === "Honam" && `ease-in-out`};
    animation-timing-function: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Yungnam")  || (props.region === "Jeju")) && `ease-in`};
    /* transform: ${(props) => props.animation? `scale(4) translate(3vw, -5vh)`: ``};
    transition:${(props) => props.animation? `all ease 1.5s 0s;`: ``}; */
    font-size: 0;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 700px){
        width: 5px;
        height: 5px;
        border: 1px solid ${palette.subColorCyan};
        border-radius: 20%;
        animation-name: ${(props) => props.region === "Honam" && css`${honamMobileAnime}`};
    }
`
export const HonamSpanRegional = styled.span<NumberProps>`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    border-radius: 20%;
    color: red;
    background-color: ${(props) => props.number === 0  && `white`};
    background-color: ${(props) => ((props.number > 0) && (props.number < 3))  && `gray`};
    background-color: ${(props) => ((props.number >= 3) && (props.number < 6))  && `blue`};
    background-color: ${(props) => ((props.number >= 6) && (props.number < 10))  && `orange`};
    background-color: ${(props) => props.number > 10   && `red`};
    :hover{
        cursor: pointer;
    }
`
export const YungnamSpan = styled.span<SelectProps>`
    width: 15px;
    height: 15px;
    /* border: 2px solid ${palette.subColorCyan}; */
    border-radius: 20%;
    background-color: ${(props)=>props.select? `purple` : `white`};
    animation-fill-mode: ${(props) => props.region === "Yungnam" && `forwards`};
    animation-fill-mode: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Jeju")) && `forwards`};
    animation-name: ${(props) => props.region === "Yungnam" && css`${yungnamAnime}`};
    animation-name: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Jeju")) && css`${fadeOutRight}`};
    animation-delay: ${(props) => props.region === "Yungnam" && `0.4s`};
    animation-delay: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Jeju")) && `0.05s`};
    animation-duration: ${(props) => props.region === "Yungnam" && `0.4s`};
    animation-duration: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Jeju")) && `0.35s`};
    animation-timing-function: ${(props) => props.region === "Yungnam" && `ease-in-out`};
    animation-timing-function: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Jeju")) && `ease-in`};
    /* transform: ${(props) => props.animation? `scale(4) translate(-2vw, -3vh)`: ``};
    transition:${(props) => props.animation? `all ease 1.5s 0s;`: ``}; */
    font-size: 0;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 700px){
        width: 5px;
        height: 5px;
        border: 1px solid ${palette.subColorCyan};
        border-radius: 20%;
        animation-name: ${(props) => props.region === "Yungnam" && css`${yungnamMobileAnime}`};

    }
`
export const YungnamSpanRegional = styled.span<NumberProps>`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    background-color: white;
    color: red;
    background-color: ${(props) => props.number === 0  && `white`};
    background-color: ${(props) => ((props.number > 0) && (props.number < 3))  && `gray`};
    background-color: ${(props) => ((props.number >= 3) && (props.number < 6))  && `blue`};
    background-color: ${(props) => ((props.number >= 6) && (props.number < 10))  && `orange`};
    background-color: ${(props) => props.number > 10   && `red`};
    :hover{
        cursor: pointer;
    }
`

export const JejuSpan = styled.span<SelectProps>`
    width: 15px;
    height: 15px;
    /* border: 2px solid ${palette.subColorCyan}; */
    border-radius: 20%;
    background-color: ${(props)=>props.select? `pink` : `white`};
    animation-fill-mode: ${(props) => props.region === "Jeju" && `forwards`};
    animation-fill-mode: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Yungnam")) && `forwards`};
    animation-name: ${(props) => props.region === "Jeju" && css`${jejuAnime}`};
    animation-name: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Yungnam")) && css`${fadeOutLeft}`};
    animation-delay: ${(props) => props.region === "Jeju" && `0.4s`};
    animation-delay: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Yungnam")) && `0.05s`};
    animation-duration: ${(props) => props.region === "Jeju" && `0.4s`};
    animation-duration: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Yungnam")) && `0.35s`};
    animation-timing-function: ${(props) => props.region === "Jeju" && `ease-in-out`};
    animation-timing-function: ${(props) => ((props.region === "Sudogwan") || (props.region === "Gwandong")  || (props.region === "Hoseo") 
     || (props.region === "Honam")  || (props.region === "Yungnam")) && `ease-in`};
    /* transform: ${(props) => props.animation? `scale(4) translate(3vw, -9vh)`: ``};
    transition:${(props) => props.animation? `all ease 1.5s 0s;`: ``}; */
    font-size: 0;
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 700px){
        width: 5px;
        height: 5px;
        border: 1px solid ${palette.subColorCyan};
        border-radius: 20%;
        animation-name: ${(props) => props.region === "Jeju" && css`${jejuMobileAnime}`};
    }
`
export const JejuSpanRegional = styled.span<NumberProps>`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    border-radius: 20%;
    color: red;
    background-color: ${(props) => props.number === 0  && `white`};
    background-color: ${(props) => ((props.number > 0) && (props.number < 3))  && `gray`};
    background-color: ${(props) => ((props.number >= 3) && (props.number < 6))  && `blue`};
    background-color: ${(props) => ((props.number >= 6) && (props.number < 10))  && `orange`};
    background-color: ${(props) => props.number > 10   && `red`};
    :hover{
        cursor: pointer;
    }
`

export const ArrowDiv = styled.div`
    position: fixed;
    top: 15vh;
    left: 2vw;
    z-index: 10000;
    :hover{
        cursor: pointer;
    }
`

export const RegionNameDiv = styled.div`
    margin: -5vh 0 0 20vh;
    font-size: 1.5rem;
    font-weight: bold;
`

export const RegionNameButton = styled.button<ButtonProps>`
    margin: 8vh 0 0 0;
    width: 25vh;
    height: 5vh;
    color: white;
    font-weight: bold;
    border: 1px solid white;
    background:${(props) => props.name === "수도권" && `red`};
    background:${(props) => props.name === "관동(강원)" && `green`};
    background:${(props) => props.name === "호서(충청)" && `blue`};
    background:${(props) => props.name === "호남" && `brown`};
    background:${(props) => props.name === "영남" && `purple`};
    background:${(props) => props.name === "제주" && `pink`};
    :hover{
        cursor: pointer;
    }
`
export const FilterWrappingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 2%;
`

export const FilterInput = styled.input`
    width: 30vw;
    height: 4vh;
    outline: none;
`

export const FilterCheckBox = styled.input`
    width: 4vh;
    height: 4vh;
`

export const CheckBoxDiv = styled.div`
    
`

export const SelectDiv = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 10;
    background-color: white;

`
// export const SudogwanImg = styled.img`
//     /* width: 185px;
//     height: 145px; */
//     width: 38vw;
//     height: 17vh;
//     position: absolute;
//     top: 14.5%;
//     left: 13.5%;
// `

// export const GwandongImg = styled.img`
//     width: 50%;
//     height: 50%;
//     position: absolute;
// `

// export const HoseoImg = styled.img`
//     width: 50%;
//     height: 50%; 
//     position: absolute; 
// `

// export const HonamImg = styled.img`
//     width: 50%;
//     height: 50%; 
//     position: absolute;
// `

// export const YungnamImg = styled.img`
//     width: 50%;
//     height: 50%; 
//     position: absolute;
// `

