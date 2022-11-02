import styled from "@emotion/styled";

export const MyPageDiv = styled.div`
  width: 100%;
  margin-top: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyInfoWrapperDiv = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyInfoDiv = styled.div`
  width: 40%;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const MyInfoNicknameDiv = styled.div``;

export const MyInfoButtonWrapperDiv = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyButton = styled.button`
  border-radius: 8px;
  width: 60%;
  max-width: 100px;
  height: 3vh;
  color: white;
  margin-top: 15%;
  border: none;
  background: ${(props) => props.theme.colors.subColorGradient2};
`;
