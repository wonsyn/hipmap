import KakaoShare from "./component/result/kakaoShare"
import LabelingCharacter from "./component/result/labelingCharacter"
import LabelingDetail from "./component/result/labelingDetail"
import LabelingName from "./component/result/labelingName/indes"
import With from "./component/result/withButton"
import { WrappingDiv } from "./styles/result"
import { ContainerDiv } from "./styles/result"
import { SelectLabeling, SelectLabelingChar, SelectLabelingDetail } from "./component/result/labelingCalc";
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../hoc/useStoreHooks"
import { useUserInfoModify } from "../../hoc/useMutation"
import { userModify } from "../../store/login/loginStore"

function ResultPage(){
    const [labelingResult, setLabelingResult ] = useState<any>("");
    const [labelingChar, setLabelingChar ] = useState<any>("");
    const [labelingDetail, setLabelingDetail ] = useState<any>([]);
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const labelName = SelectLabeling()
    const labelChar = SelectLabelingChar()
    const labelDetail = SelectLabelingDetail()
    const isAuth = useAppSelector((store) => store.userReducer.auth);
    const isUser = useAppSelector((store) => store.userReducer.user);
    const { mutate, isLoading: mutateLoading } = useUserInfoModify();
    useEffect(()=>{
        setLabelingResult(labelName);
        setLabelingChar(labelChar);
        setLabelingDetail(labelDetail);
    },[])
    const clickEvent = () => {
        // usemutation 으로 수정 요청 보낸 후 마이페이지로 navigate
        if(isAuth){
            mutate(
                {
                  label: labelingResult,
                  followPrivate: true,
                  nickname: isUser.nickname,
                },
                {
                  onSuccess: () => {
                    dispatch(
                      userModify(
                        { 
                        nickname: isUser.nickname, 
                        labeling: labelingResult,
                        followPrivate: true
                    })
                    );
                  },
                }
              );
            navigate(`/myProfile/${isUser.user_id}`)
        }
        else{
            // 회원가입 페이지로 연결 
            if(location.state === null){
              navigate(`/signup`, {state : {
                labelingName: labelingResult
               }})
            }
            else{
              navigate(`/signup`, {state : {
                labelingName: labelingResult,
                email: location.state.email
               }})
            }
        }
    }

    return(
        <WrappingDiv>
            <ContainerDiv>
                <LabelingName name={labelingResult}/>
                <LabelingCharacter /> 
                <LabelingDetail list={labelingDetail}/>
                <With clickEvent={clickEvent} isAuth={isAuth}/>
                <KakaoShare/>
            </ContainerDiv>
        </WrappingDiv>
    )
}

export default ResultPage