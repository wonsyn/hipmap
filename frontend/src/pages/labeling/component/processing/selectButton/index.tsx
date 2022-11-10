import { SelectButton } from "../../../styles/processing";

interface SelectButtonProps{
    text: string;
    clickEvent: ()=>void;
    number: number;
}

function Select({text,clickEvent,number}: SelectButtonProps){
    return(
        <SelectButton onClick={clickEvent} number={number}>
            {text}
        </SelectButton>
    )
}

export default Select