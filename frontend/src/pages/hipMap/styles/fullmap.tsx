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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const FullMapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 500px;
    height: 92vh;
`

export const GridDiv = styled.div`
    margin: 6px;
    /* padding: 5px; */
    /* margin-left: 10px; */
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
   
`

export const DotSpan = styled.span`
    width: 9px;
    height: 9px;
    border: 2px solid ${palette.subColorCyan};
    border-radius: 2px;
    background-color: white;
    font-size: 0;
    :hover{
        cursor: pointer;
        background-color: red;
        
    }
`

export const NotDotSpan = styled.span`
    width: 7px;
    height: 7px;
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
