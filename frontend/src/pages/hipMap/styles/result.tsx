import { palette } from "../../../assets/Palette";
import styled from "@emotion/styled";

// version 1: 그냥 스크롤 시 쭈루룩 나오도록
export const WrappingDiv = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 700px){
        flex-direction: column;
    }
`

export const MentionWrappingDIv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
    position: sticky;
    top: 1vh;
    left: 2vw;
    width: 700px;
    height: 700px;
    @media screen and (max-width: 700px){
        top: 7vh;
        left: 2vw;
        width: 100vw;
        height: 20vh;
    }
`
export const TextDiv = styled.div`
    font-size: 70px;
    font-weight: bold;
    @media screen and (max-width: 700px){
        font-size: 40px;
    }
`

export const HipPlaceDiv = styled.div`
    font-size: 100px;
    font-weight: bold;
    text-shadow: 1px 1px 0 ${palette.subColorFuchsia}, -1px 1px 0 ${palette.subColorFuchsia}, 1px -1px 0 ${palette.subColorFuchsia},
    -1px -1px 0 ${palette.subColorFuchsia}, 0px 1px 0 ${palette.subColorFuchsia}, 0px -1px 0 ${palette.subColorFuchsia},
    -1px 0px 0 ${palette.subColorFuchsia}, 1px 0px 0 ${palette.subColorFuchsia}, 2px 2px 0 ${palette.subColorFuchsia}, -2px 2px 0 ${palette.subColorFuchsia},
    2px -2px 0 ${palette.subColorFuchsia}, -2px -2px 0 ${palette.subColorFuchsia}, 0px 2px 0 ${palette.subColorFuchsia},
    0px -2px 0 ${palette.subColorFuchsia}, -2px 0px 0 ${palette.subColorFuchsia}, 2px 0px 0 ${palette.subColorFuchsia}, 1px 2px 0 ${palette.subColorFuchsia},
    -1px 2px 0 ${palette.subColorFuchsia}, 1px -2px 0 ${palette.subColorFuchsia}, -1px -2px 0 ${palette.subColorFuchsia},
    2px 1px 0 ${palette.subColorFuchsia}, -2px 1px 0 ${palette.subColorFuchsia}, 2px -1px 0 ${palette.subColorFuchsia},
    -2px -1px 0 ${palette.subColorFuchsia};
    @media screen and (max-width: 700px){
        font-size: 50px;
        font-weight: bold;
    }
`
export const ScrollMentionDiv = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-top: 10vh;
    @media screen and (max-width: 700px){
        font-size: 20px;
        margin-top: 5vh;
    }
`
export const ShortsWrappingDiv = styled.div`
    perspective: 400px;
    /* margin-top: -200px; */
`
export const ShortsDiv = styled.div`
    position: sticky;
    top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    @media screen and (max-width: 700px) {
        margin-top: -20vh;
    }
`
const ShortsImage = styled.img`
    width: 500px;
    height: 350px;
    border-radius: 5px;
    box-shadow: 2px 8px 20px rgba(0,0,0,0);
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 700px){
        width: 33vh;
        height: 25vh;
        border-radius: 5px;
        box-shadow: 2px 8px 20px rgba(0,0,0,0);
        :hover{
            cursor: pointer;
        }
        /* margin-top: -10vh; */
    }
`
export const ShortsImage1 = styled(ShortsImage)`
    transform: rotate(10deg);
`
export const ShortsImage2 = styled(ShortsImage)`
    transform: rotate(0deg);
`
export const ShortsImage3 = styled(ShortsImage)`
    transform: rotate(-10deg);
`
export const ShortsImage4 = styled(ShortsImage)`
    transform: rotate(0deg);
`
export const ShortsImage5 = styled(ShortsImage)`
    transform: rotate(10deg);
`
export const ShortsImage6 = styled(ShortsImage)`
    transform: rotate(0deg);
`
/////////////////////////////////////////////////////