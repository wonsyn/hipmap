import React, { useState } from "react";
import {
  SignUpAlert,
  SignUpButton,
  SignUpEmail,
  SignUpEmailWrapper,
  SignUpInformation,
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
  password2: string;
  email: string;
  nickname: string;
}

const SignUpWrapper = () => {
  const [selectEmail, setSelectEmail] = useState("self");
  const [emailState, setEmailState] = useState("");
  const [emailFrontState, setEmailFrontState] = useState("");
  const [signUpPressCheck, setSignUpPressCheck] = useState(false);
  const [userInfoState, setUserInfoState] = useState<userInfo>({
    id: "",
    password: "",
    password2: "",
    email: "",
    nickname: "",
  });
  const [acceptPassword, setAcceptPassword] = useState<boolean>(false);
  const [correctPassword, setCorretPassword] = useState<boolean>(false);
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

  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfoState((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
    if (e.target.value === userInfoState.password2) {
      setCorretPassword(true);
    } else {
      setCorretPassword(false);
    }
  };

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailState((prev) => {
      return e.target.value;
    });
  };

  const emailFront = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailFrontState((prev) => {
      return e.target.value;
    });
  };
  const correct = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === userInfoState.password) {
      setCorretPassword(true);
    } else {
      setCorretPassword(false);
    }
    setUserInfoState((prev) => {
      return {
        ...prev,
        password2: e.target.value,
      };
    });
  };
  const regExpTest = () => {
    setSignUpPressCheck(true);
    const reg = /^s+|s+$/g;
    const test = /[\s]/g;
    if (
      userInfoState.id.replace(reg, "") !== "" &&
      test.test(userInfoState.id) !== true &&
      correctPassword
    ) {
      console.log("test");
      const passwordResult = regTest({
        num: 3,
        content: userInfoState.password,
      });
      const emailResult = regTest({
        num: 2,
        content: emailFrontState + "@" + emailState,
      });
      const nicknameResult = regTest({
        num: 1,
        content: userInfoState.nickname,
      });
      if (!passwordResult || !emailResult || !nicknameResult) {
        setAcceptPassword(passwordResult);
        setAcceptEmail(emailResult);
        setAcceptNickname(nicknameResult);
      }
    }
  };

  return (
    <SignUpWrapperDiv>
      <SignUpLabelingWrapperDiv>
        <SignUpLabelingDiv>당신의 유형은</SignUpLabelingDiv>
        <SignUpYourLabelingDiv>조선 힙스터</SignUpYourLabelingDiv>
      </SignUpLabelingWrapperDiv>
      <SignUpInputWrapper>
        <SignUpInput
          placeholder="ID"
          onChange={(e) => {
            setUserInfoState((prev) => {
              return {
                ...prev,
                id: e.target.value,
              };
            });
          }}
        />
        <SignUpInput
          placeholder="Password"
          id="password"
          type="password"
          onChange={passwordInput}
        />
        <SignUpInformation>
          비밀번호는 영어와 숫자, 특수문자를 최소 하나 이상은 사용해야 하며
          8자~20자 까지 가능합니다.
        </SignUpInformation>

        <SignUpInput
          placeholder="Password 확인"
          id="passwordCorrect"
          type="password"
          onChange={correct}
        />
        <SignUpEmailWrapper>
          <SignUpEmail placeholder="Email" type="email" onChange={emailFront} />
          @
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
        <SignUpInput
          placeholder="닉네임"
          onChange={(e) => {
            setAcceptPassword(regTest({ num: 1, content: e.target.value }));
            setUserInfoState((prev) => {
              return {
                ...prev,
                nickname: e.target.value,
              };
            });
          }}
        />
        <SignUpInformation>
          닉네임은 3자~10자 까지 가능합니다.
        </SignUpInformation>
      </SignUpInputWrapper>
      {signUpPressCheck &&
        (!acceptPassword ||
          !correctPassword ||
          !acceptEmail ||
          !acceptNickname) && (
          <SignUpAlert>다시 한번 확인해주시기 바랍니다.</SignUpAlert>
        )}
      <SignUpButton onClick={regExpTest}>회원가입</SignUpButton>
    </SignUpWrapperDiv>
  );
};

export default SignUpWrapper;
