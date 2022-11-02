import { LabelingDetailDiv } from "../../../styles/result"
import { MappingDiv} from "../../../styles/result"

interface LabelingDetailProps{
    list: string[];
}

function LabelingDetail({list}: LabelingDetailProps){
    return(
        <LabelingDetailDiv>
            {list.map(list => (
                <MappingDiv>
                    {list}
                </MappingDiv>
            ))}
        </LabelingDetailDiv>
    )
}

export default LabelingDetail