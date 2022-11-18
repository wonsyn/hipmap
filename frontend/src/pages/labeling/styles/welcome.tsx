import styled from "@emotion/styled";
import { palette } from "../../../assets/Palette";

export const TieStyle = styled.div`
    background: ${palette.subColorGradient2};
    height: 4%;
    width: 100%;
    margin-top: -5vh;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
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
    margin-bottom: 10%;
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
    :hover{
        cursor: pointer;
    }

`

export const LoginDiv = styled.div`
    font-size: 0.8rem;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 0 ${palette.mainColor}, -1px 1px 0 ${palette.mainColor}, 1px -1px 0 ${palette.mainColor},
    -1px -1px 0 ${palette.mainColor}, 0px 1px 0 ${palette.mainColor}, 0px -1px 0 ${palette.mainColor},
    -1px 0px 0 ${palette.mainColor}, 1px 0px 0 ${palette.mainColor}, 2px 2px 0 ${palette.mainColor}, -2px 2px 0 ${palette.mainColor},
    2px -2px 0 ${palette.mainColor}, -2px -2px 0 ${palette.mainColor}, 0px 2px 0 ${palette.mainColor},
    0px -2px 0 ${palette.mainColor}, -2px 0px 0 ${palette.mainColor}, 2px 0px 0 ${palette.mainColor}, 1px 2px 0 ${palette.mainColor},
    -1px 2px 0 ${palette.mainColor}, 1px -2px 0 ${palette.mainColor}, -1px -2px 0 ${palette.mainColor},
    2px 1px 0 ${palette.mainColor}, -2px 1px 0 ${palette.mainColor}, 2px -1px 0 ${palette.mainColor},
    -2px -1px 0 ${palette.mainColor};
    margin-bottom: 2%;
    :hover{
        cursor: pointer;
    }

`
