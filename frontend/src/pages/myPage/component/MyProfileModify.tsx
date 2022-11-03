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
import { useState } from "react";

const MyProfileModify = () => {
  const [followOpen, setFollowOpen] = useState<boolean>(false);

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
            조선힙스터
          </MyProfileModifyLabelingNameDiv>
        </MyProfileModifyLabelingDiv>
      </MyProfileModifyLabelingWrapper>
      {/* 정보 바꾸기 */}
      <MyProfileModifyLabelingInputWrapper>
        <MyProfileModifyLabelingInput value="ID" disabled />
        <MyProfileModifyLabelingInput />
        <MyProfileModifyLabelingInput value="email" disabled />
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
        <MyProFileModifyLabelingModifyButton>
          수정
        </MyProFileModifyLabelingModifyButton>
      </MyProFileModifyLabelingModifyWrapper>
    </MyProfileModifyWrapper>
  );
};

export default MyProfileModify;
