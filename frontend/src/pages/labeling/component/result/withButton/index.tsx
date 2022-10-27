import { WithButton } from "../../../styles/result";

interface WithProps{
    clickEvent: ()=>void;
}

function With({clickEvent}: WithProps){
    return(
        <WithButton onClick={clickEvent}>
            같은 감성의 사람들을 경험하고 싶다면
        </WithButton>
    )
}

export default With