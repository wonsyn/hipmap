import { SelectButton } from "../../../styles/processing";

interface SelectButtonProps{
    text: string;
    clickEvent: ()=>void;
    number: number;
}

function Select({text,clickEvent,number}: SelectButtonProps){
    return(
        <SelectButton onClick={clickEvent} number={number}>
            {text &&
          text.split("\n").map((line, index) => {
            return (
              <>
                {line}
                <br />
              </>
            );
          })}
        </SelectButton>
    )
}

export default Select