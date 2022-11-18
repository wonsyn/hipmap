import { palette } from "../../../assets/Palette";
import styled from "@emotion/styled";

// version 1: 그냥 스크롤 시 쭈루룩 나오도록
export const WrappingDiv = styled.div`
    display: flex;
    flex-direction: row;
    /* max-width: 1024px; */
    @media screen and (max-width: 700px){
        flex-direction: column;
    }
`

export const MentionWrappingDIv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
    position: fixed;
    top: 1vh;
    left: 2vw;
    width: 700px;
    height: 700px;
    margin-top: 2vh;
    @media screen and (max-width: 700px){
        top: 7vh;
        left: 2vw;
        width: 100vw;
        height: 20vh;
        margin-top: 2vh;
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

export const ShortsBody = styled.div`
    overflow: hidden;
    display: flex;
    width: 100%;
    ::-webkit-scrollbar {
    display: none;
    }
`
export const ShortsWrappingDiv = styled.div`
   min-height: 100%;
`
export const ShortsDiv = styled.div`
    position: absolute;
    /* top: 30%; */
    width: 100%;
    height: 100%;
    overflow: hidden;
    @media screen and (max-width: 700px){
        top: 30%;
        width: 100%;
        height: 80%;
        }
`

export const ShortsUl = styled.ul`
    position: absolute;
    width: 14rem;
    height: 18rem;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 700px){
        width: 60%;
        height: 50%;
        top: 40%;
        left: 50%;
        }
    > li {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 30vw;
        height: 50vh;
        /* line-height: 18rem; */
     
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 0.8rem;
        @media screen and (max-width: 700px){
            width: 100%;
            height: 100%;
        }
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
    /* transform: rotate(10deg); */
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