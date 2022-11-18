import { LabelingNameDiv, LabelingNameUl, LabelingNameLi } from "../../../styles/result";

interface LabelingNameProps{
    name: string
}

function LabelingName({name}: LabelingNameProps){
    return(
        <LabelingNameDiv>
            {/* <LabelingNameUl>
                <LabelingNameLi number={1}>{name}</LabelingNameLi>
                <LabelingNameLi number={2}>{name}</LabelingNameLi>
                <LabelingNameLi number={3}>{name}</LabelingNameLi>
                <LabelingNameLi number={4}>{name}</LabelingNameLi>
                <LabelingNameLi number={5}>{name}</LabelingNameLi>
                <LabelingNameLi number={6}>{name}</LabelingNameLi>
            </LabelingNameUl> */}
           {name}
        </LabelingNameDiv>
    )
}

export default LabelingName