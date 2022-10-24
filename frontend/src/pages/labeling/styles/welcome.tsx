import styled from "@emotion/styled";
import { palette } from "../../../assets/Palette";

export const TieStyle = styled.div`
    background: ${palette.subColorGradient2};
    height: 4%;
    width: 100%;
`
export const LogoNameStyle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 7%;
   margin-bottom: 5%;
`

export const CharacterStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25vh;
    margin-bottom: 5%;
`

export const AnnouncementStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25vh;
    margin-bottom: 15%;
`
export const StartButtonStyled = styled.button`
    background: ${palette.subColorGradient3};
    width: 50%;
    height: 10%;
    border-radius:10px;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 5%;

`

