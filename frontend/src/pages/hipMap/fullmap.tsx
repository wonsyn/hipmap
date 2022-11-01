import FullMap from "./component/fullmap"
import Filter from "./component/filter"
import Sudogwan from "./component/sudogwan"
import Gwandong from "./component/gwandong"
import Hoseo from "./component/hoseo"
import Honam from "./component/honam"
import Yungnam from "./component/yungnam"
import Jeju from "./component/jeju"
import { WrappingDiv } from "./styles/fullmap"
function FullMapPage(){
    return(
        <WrappingDiv>
            <Filter/>
            {/* <FullMap/> */}
            {/* <Sudogwan/> */}
            {/* <Gwandong/> */}
            {/* <Hoseo/> */}
            {/* <Honam/> */}
            {/* <Yungnam/> */}
            <Jeju/>
        </WrappingDiv>
    )
}

export default FullMapPage