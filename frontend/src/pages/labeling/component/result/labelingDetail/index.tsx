import { LabelingDetailDiv } from "../../../styles/result"
import { MappingDiv} from "../../../styles/result"

interface LabelingDetailProps{
    list: string[];
}

function LabelingDetail({list}: LabelingDetailProps){
    return(
        <LabelingDetailDiv>
            <ul>
                {list.map(list => (
                    <MappingDiv>
                        <li>
                            {list}
                        </li>
                    </MappingDiv>
                ))}
            </ul>
        </LabelingDetailDiv>
    )
}

export default LabelingDetail