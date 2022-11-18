import { WithButton } from "../../../styles/result";

interface WithProps{
    clickEvent: ()=>void;
    isAuth: boolean
}

function With({clickEvent, isAuth}: WithProps){
    return(
    <>
    {isAuth
    ?(
        <WithButton onClick={clickEvent}>
            변경한 레이블링 저장
        </WithButton>
    ):(
        <WithButton onClick={clickEvent}>
            같은 감성의 사람들과 함께하고 싶다면
        </WithButton>
    )}
    </>
    )
}

export default With