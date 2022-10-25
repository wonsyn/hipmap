import { useState } from "react";
import {
  SignUpEmail,
  SignUpEmailWrapper,
  SignUpInput,
  SignUpInputWrapper,
  SignUpLabelingDiv,
  SignUpLabelingWrapperDiv,
  SignUpOption,
  SignUpSelect,
  SignUpWrapperDiv,
  SignUpYourLabelingDiv,
} from "./style/signupWrapper";
import regTest from "./test";

interface userInfo {
  id: string;
  password: string;
  email: string;
  nickname: string;
}

const SignUpWrapper = () => {
  const [selectEmail, setSelectEmail] = useState("self");
  const [emailState, setEmailState] = useState("");
  const [userInfoState, setUserInfoState] = useState<userInfo>({
    id: "",
    password: "",
    email: "",
    nickname: "",
  });
  const [acceptId, setAcceptId] = useState<boolean>(false);
  const [acceptPassword, setAcceptPassword] = useState<boolean>(false);
  const [acceptEmail, setAcceptEmail] = useState<boolean>(false);
  const [acceptNickname, setAcceptNickname] = useState<boolean>(false);
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setSelectEmail(e.target.value);
    if (e.target.value === "self") {
      setEmailState("");
    } else {
      setEmailState(e.target.value);
    }
  };

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailState((prev) => {
      return e.target.value;
    });
  };

  return (
    <SignUpWrapperDiv>
      <SignUpLabelingWrapperDiv>
        <SignUpLabelingDiv>당신의 유형은</SignUpLabelingDiv>
        <SignUpYourLabelingDiv>조선 힙스터</SignUpYourLabelingDiv>
      </SignUpLabelingWrapperDiv>
      <SignUpInputWrapper>
        <SignUpInput placeholder="ID" />
        <SignUpInput
          placeholder="Password"
          id="password"
          type="password"
          onChange={(e) => {
            setAcceptPassword(regTest({ num: 3, content: e.target.value }));
          }}
        />
        <SignUpInput placeholder="Password 확인" type="password" />
        <SignUpEmailWrapper>
          <SignUpEmail placeholder="Email" type="email" /> @
          {selectEmail !== "self" ? (
            <SignUpEmail value={selectEmail} readOnly />
          ) : (
            <SignUpEmail value={emailState} onChange={emailInput} />
          )}
          <SignUpSelect onChange={onChange} defaultValue="self">
            <SignUpOption key="self" value="self">
              직접 입력
            </SignUpOption>
            <SignUpOption key="gmail.com" value="gmail.com">
              gmail.com
            </SignUpOption>
            <SignUpOption key="naver.com" value="naver.com">
              naver.com
            </SignUpOption>
            <SignUpOption key="hanmail.net" value="hanmail.net">
              hanmail.net
            </SignUpOption>
          </SignUpSelect>
        </SignUpEmailWrapper>
        <SignUpInput placeholder="닉네임" />
      </SignUpInputWrapper>
      <button disabled={false}>회원가입</button>
    </SignUpWrapperDiv>
  );
};

export default SignUpWrapper;
