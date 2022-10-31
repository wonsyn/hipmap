import FullMap from "./component/fullmap"
import Filter from "./component/filter"
import { WrappingDiv } from "./styles/fullmap"
function FullMapPage(){
    return(
        <WrappingDiv>
            <Filter/>
            <FullMap/>
        </WrappingDiv>
    )
}

export default FullMapPage