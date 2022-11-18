import { StartButtonStyled, LoginDiv } from "../../../styles/welcome"
import { useNavigate } from "react-router-dom"
function StartButton(kakaoData: any){
    const navigate = useNavigate()
    const goProcessing = () => {
        if(kakaoData.kakaoData.snsSign){
            navigate(`/labeling/processing`, {state : {
                email: kakaoData.kakaoData.email,
                snsSign: kakaoData.kakaoData.snsSign
            }})
        }
        else{
            navigate(`/labeling/processing`)
        }
    }
    const goLogin = () => {
        navigate(`/login`)
    }
    return(
        <>
            <StartButtonStyled onClick={goProcessing} >
                Let's Hip!
            </StartButtonStyled>
            <LoginDiv onClick={goLogin}>
                이미 회원이시라면 이곳을 클릭!
            </LoginDiv>

        </>
    )
}

export default StartButton