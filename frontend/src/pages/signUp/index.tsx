import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hoc/useStoreHooks";
import { fetchSignUpThunk, signUpType } from "../../store/login/loginStore";
import http from "../../utils/http-commons";
import regex from "../../utils/regex";
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
  const location = useLocation();
  console.log(useLocation());
  const labelingName = location.state?.labelingName ?? "아직 정해지지 않음";
  const [snsSign, setSnsSign] = useState<boolean>(false);
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
  const [acceptId, setAcceptId] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.email) {
      setSnsSign(true);
    }
  }, [location]);

  useEffect(() => {
    if (snsSign && location.state && location.state.email) {
      const emailTemp = location.state.email;
      const emailfront = emailTemp.slice(0, emailTemp.indexOf("@"));
      const email = emailTemp.slice(emailTemp.indexOf("@") + 1);
      console.log(emailfront);
      console.log(email);
      setEmailFrontState(emailfront);
      setEmailState(email);
      setAcceptEmail(true);
    }
  }, [snsSign, location, location.state, location.state.email]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSignUpPressCheck(false);
    setSelectEmail(e.target.value);
    if (e.target.value === "self") {
      setEmailState("");
    } else {
      setEmailState(e.target.value);
    }
  };

  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpPressCheck(false);
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
    setSignUpPressCheck(false);
    setEmailState((prev) => {
      return e.target.value;
    });
  };

  const emailFront = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpPressCheck(false);
    setEmailFrontState((prev) => {
      return e.target.value;
    });
  };
  const correct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpPressCheck(false);
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
      } else if (passwordResult && emailResult && nicknameResult) {
        setAcceptPassword(true);
        setAcceptEmail(true);
        setAcceptNickname(true);
      }
    }
  };

  const IDCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    //id는 영어 숫자 혼합 가능 5자부터 20자까지
    const id = e.currentTarget.value;
    setSignUpPressCheck(false);
    setUserInfoState((prev) => {
      return {
        ...prev,
        id,
      };
    });
    const test = new RegExp(regex.userId);
    if (test.test(id)) {
      http.get(`/user/${id}/exists`).then((response) => {
        if (response.status === 200 && response.data.result) {
          setAcceptId(true);
        } else {
          setAcceptId(false);
        }
      });
    } else {
      setAcceptId(false);
    }
  };

  useEffect(() => {
    if (
      signUpPressCheck &&
      acceptPassword &&
      acceptEmail &&
      acceptId &&
      correctPassword
    ) {
      dispatch(
        fetchSignUpThunk({
          user_id: userInfoState.id,
          username: userInfoState.nickname,
          labeling: labelingName,
          email: emailFrontState + "@" + emailState,
          password: userInfoState.password,
        })
      )
        .unwrap()
        .then((res) => {
          navigate("/");
        });
    }
  }, [
    acceptEmail,
    acceptId,
    acceptPassword,
    correctPassword,
    emailFrontState,
    dispatch,
    emailState,
    signUpPressCheck,
    userInfoState.id,
    userInfoState.nickname,
    userInfoState.password,
  ]);

  return (
    <SignUpWrapperDiv>
      <SignUpLabelingWrapperDiv>
        <SignUpLabelingDiv>당신의 유형은</SignUpLabelingDiv>
        <SignUpYourLabelingDiv>{labelingName}</SignUpYourLabelingDiv>
      </SignUpLabelingWrapperDiv>
      <SignUpInputWrapper>
        <SignUpInput placeholder="ID" onChange={IDCheck} />
        <SignUpInformation>
          아이디는 영어와 숫자를 사용할 수 있으며 영어는 필수로 들어가야합니다.
          5자~20까지 가능합니다.
        </SignUpInformation>
        {!acceptId && userInfoState.id.length > 4 && (
          <h4>중복된 아이디입니다.</h4>
        )}
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

        {snsSign ? (
          <SignUpEmailWrapper>
            <SignUpEmail
              value={emailFrontState + "@" + emailState}
              disabled={true}
            />
          </SignUpEmailWrapper>
        ) : (
          <SignUpEmailWrapper>
            <SignUpEmail
              placeholder="Email"
              type="email"
              onChange={emailFront}
            />
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
        )}

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
          !acceptId ||
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
