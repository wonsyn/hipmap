import { StartButtonStyled } from "../../../styles/welcome"
import { useNavigate } from "react-router-dom"
function StartButton(){
    const navigate = useNavigate()
    const clickEvent = () => {
        navigate(`/labeling/processing`)
    }
    return(
            <StartButtonStyled onClick={clickEvent} >
                Let's Hip!
            </StartButtonStyled>
    )
}

export default StartButton