import styled from "@emotion/styled";
import { palette } from "../../../assets/Palette";

export const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    max-width: 500px;
    height: 92vh;
    border: 2px solid white;
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
`

export const SelectButton = styled.button`
    width: 85%;
    height: 12%;
    background: ${palette.subColorGradient3};
    color: white;
    font-weight: bold;
    border-radius: 8px ;
`