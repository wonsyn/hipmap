import { WrappingDiv } from "./styles/result"
import ResultMention from "./component/resultMention"
import ResultShorts from "./component/resultShorts"
function HipMapResultPage(){
    return(
        <WrappingDiv>
            <ResultMention/>
            <ResultShorts/>
        </WrappingDiv>
    )
}

export default HipMapResultPage