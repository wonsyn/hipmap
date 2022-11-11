import { WrappingDiv } from "./styles/result"
import ResultMention from "./component/resultMention"
import ResultShorts from "./component/resultShorts"
import { useLocation } from "react-router-dom"
function HipMapResultPage(){
    const shorts = useLocation()?.state.shortsList
    console.log(shorts)
    return(
        <WrappingDiv>
            <ResultMention/>
            <ResultShorts shorts={shorts}/>
        </WrappingDiv>
    )
}

export default HipMapResultPage