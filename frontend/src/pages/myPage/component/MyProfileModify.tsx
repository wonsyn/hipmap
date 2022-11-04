import {
  MyProfileModifyLabelingButton,
  MyProfileModifyLabelingDiv,
  MyProFileModifyLabelingFollowOpenButton,
  MyProfileModifyLabelingFollowOpenWrapper,
  MyProfileModifyLabelingInput,
  MyProfileModifyLabelingInputWrapper,
  MyProFileModifyLabelingModifyButton,
  MyProFileModifyLabelingModifyWrapper,
  MyProfileModifyLabelingNameDiv,
  MyProfileModifyLabelingWrapper,
  MyProfileModifyWrapper,
} from "../styles/MyProfileModify";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hoc/useStoreHooks";
import { useFetchUserInfo } from "../../../hoc/useFetch";
import { useNavigate } from "react-router-dom";
import { useUserInfoModify } from "../../../hoc/useMutation";
import { userModify } from "../../../store/login/loginStore";

const MyProfileModify = () => {
  const userInfo = useAppSelector((store) => store.userReducer.user);
  const { data, isLoading, isError } = useFetchUserInfo(userInfo.user_id);
  const [followOpen, setFollowOpen] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");
  const navigator = useNavigate();
  const { mutate, isLoading: mutateLoading } = useUserInfoModify();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      !isLoading &&
      data &&
      data.followPrivate !== undefined &&
      data.nickname
    ) {
      setFollowOpen(data.followPrivate);
      setNickname(data.nickname);
    }
  }, [isLoading, data]);
  if (isLoading) {
    return <div>로딩중?</div>;
  } else if (!isLoading && data) {
    return (
      <MyProfileModifyWrapper>
        {/* 레이블링 */}
        <MyProfileModifyLabelingWrapper>
          <h2>당신의 레이블링</h2>

          <MyProfileModifyLabelingDiv>
            <MyProfileModifyLabelingButton>
              재검사 하러가기
            </MyProfileModifyLabelingButton>
            <MyProfileModifyLabelingNameDiv>
              {data.labelName}
            </MyProfileModifyLabelingNameDiv>
          </MyProfileModifyLabelingDiv>
        </MyProfileModifyLabelingWrapper>
        {/* 정보 바꾸기 */}
        <MyProfileModifyLabelingInputWrapper>
          <MyProfileModifyLabelingInput value={data.username} disabled />
          <MyProfileModifyLabelingInput
            value={nickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNickname((prev) => {
                return e.target.value;
              });
            }}
          />
          <MyProfileModifyLabelingInput value={data.email} disabled />
        </MyProfileModifyLabelingInputWrapper>
        {/* 팔로워 팔로잉 공개 여부 */}
        <MyProfileModifyLabelingFollowOpenWrapper>
          <div> 팔로워, 팔로잉 공개여부</div>
          <MyProFileModifyLabelingFollowOpenButton
            onClick={() => {
              setFollowOpen((prev) => {
                return !prev;
              });
            }}
          >
            {followOpen ? "공개" : "비공개"}
          </MyProFileModifyLabelingFollowOpenButton>
        </MyProfileModifyLabelingFollowOpenWrapper>
        {/* 수정 버튼 */}
        <MyProFileModifyLabelingModifyWrapper>
          <MyProFileModifyLabelingModifyButton
            onClick={() => {
              mutate(
                {
                  label: userInfo.labeling,
                  followPrivate: followOpen,
                  nickname,
                },
                {
                  onSuccess: () => {
                    dispatch(
                      userModify({ nickname, labeling: userInfo.labeling })
                    );
                    alert("회?원?정?보?변?경?완?료?");
                  },
                }
              );
            }}
          >
            수정
          </MyProFileModifyLabelingModifyButton>
        </MyProFileModifyLabelingModifyWrapper>
      </MyProfileModifyWrapper>
    );
  } else {
    console.log(isError);
    return (
      <div>
        에러가 발생하였습니다.
        <button
          onClick={() => {
            navigator("/");
          }}
        >
          홈으로 이동
        </button>
      </div>
    );
  }
};

export default MyProfileModify;
