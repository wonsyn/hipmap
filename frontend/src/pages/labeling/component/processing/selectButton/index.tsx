import { SelectButton } from "../../../styles/processing";

interface SelectButtonProps{
    text: string;
    clickEvent: ()=>void;
}

function Select({text,clickEvent}: SelectButtonProps){
    return(
        <SelectButton onClick={clickEvent}>
            {text}
        </SelectButton>
    )
}

export default Select