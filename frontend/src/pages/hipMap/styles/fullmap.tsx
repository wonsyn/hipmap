import styled from "@emotion/styled"
import { palette } from "../../../assets/Palette"


interface SelectProps{
    select: boolean;
    onMouseOver: () => void;
    // onMouseOver: React.MouseEventHandler<HTMLSpanElement> | undefined;
    onMouseOut: () => void;
    // onMouseOut: React.MouseEventHandler<HTMLSpanElement> | undefined
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
    height: 85vh;
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
    right: 7vw;
    @media screen and (max-width: 600px){
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
    top: 20vh;
    right: 25vw;
    @media screen and (max-width: 600px){
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
    right: 9vw;
    @media screen and (max-width: 600px){
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
    left: 33vw;
    @media screen and (max-width: 600px){
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
    left: 6vw;
    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        max-width: 600px;
        height: 92vh;
        position: fixed;
        /* bottom: 10vh; */
        left: -40vw;
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
    left: 34vw;
    @media screen and (max-width: 600px){
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
    width: 80%;
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
    width: 3px;
    height: 3px;
    visibility: hidden;
`
export const NotDotSpanRegional = styled.span`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    visibility: hidden;
`

export const SudogwanSpan = styled.span<SelectProps>`
    width: 9px;
    height: 9px;
    border: 2px solid ${palette.subColorCyan};
    border-radius: 2px;
    background-color: ${(props)=>props.select? `red` : `white`};
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`
export const SudogwanSpanRegional = styled.span`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    border-radius: 30%;
    background-color: white;
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`

export const GwandongSpan = styled.span<SelectProps>`
    width: 9px;
    height: 9px;
    border: 2px solid ${palette.subColorCyan};
    border-radius: 2px;
    background-color: ${(props)=>props.select? `green` : `white`};
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`
export const GwandongSpanRegional = styled.span`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    border-radius: 30%;
    background-color: white;
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`
export const HoseoSpan = styled.span<SelectProps>`
    width: 9px;
    height: 9px;
    border: 2px solid ${palette.subColorCyan};
    border-radius: 2px;
    background-color: ${(props)=>props.select? `blue` : `white`};
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`
export const HoseoSpanRegional = styled.span`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    border-radius: 30%;
    background-color: white;
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`
export const HonamSpan = styled.span<SelectProps>`
    width: 9px;
    height: 9px;
    border: 2px solid ${palette.subColorCyan};
    border-radius: 2px;
    background-color: ${(props)=>props.select? `brown` : `white`};
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`
export const HonamSpanRegional = styled.span`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    border-radius: 30%;
    background-color: white;
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`
export const YungnamSpan = styled.span<SelectProps>`
    width: 9px;
    height: 9px;
    border: 2px solid ${palette.subColorCyan};
    border-radius: 2px;
    background-color: ${(props)=>props.select? `purple` : `white`};
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`
export const YungnamSpanRegional = styled.span`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    background-color: white;
    border-radius: 30%;
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`

export const JejuSpan = styled.span<SelectProps>`
    width: 9px;
    height: 9px;
    border: 2px solid ${palette.subColorCyan};
    border-radius: 2px;
    background-color: ${(props)=>props.select? `pink` : `white`};
    font-size: 0;
    :hover{
        cursor: pointer;
    }
`
export const JejuSpanRegional = styled.span`
    width: 3vh;
    height: 3vh;
    margin: 0 10px 0 0;
    background-color: white;
    border-radius: 30%;
    font-size: 0;
    :hover{
        cursor: pointer;
    }
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

// export const JejuImg = styled.img`
//     width: 50%;
//     height: 50%; 
//     position: absolute;
// `
