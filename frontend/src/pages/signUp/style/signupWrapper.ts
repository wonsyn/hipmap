import styled from "@emotion/styled";

export const SignUpWrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignUpInput = styled.input`
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid;
  border-image: ${(props) => props.theme.colors.subColorGradient1};
  border-image-slice: 1;
  color: white;
  width: 85%;
  height: 5vh;
`;
export const SignUpEmailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
export const SignUpEmail = styled.input`
  width: 25%;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid;
  border-image: ${(props) => props.theme.colors.subColorGradient1};
  border-image-slice: 1;
  color: white;
  height: 5vh;
  margin-right: 2%;
  margin-left: 2%;
`;

export const SignUpPassword = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SignUpInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 70%;
`;

export const SignUpLabelingWrapperDiv = styled.div`
  display: flex;
  width: 85%;
  height: 30%;
  flex-direction: column;
`;

export const SignUpLabelingDiv = styled.div`
  margin-top: 5%;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SignUpYourLabelingDiv = styled.div`
  margin-top: 2%;
  font-size: 2.5rem;
  font-weight: bolder;
  margin-left: auto;
  margin-bottom: 10%;
  background: ${(props) => props.theme.colors.subColorGradient4};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* color: ${(props) => props.theme.colors.subColorFuchsia}; */
`;

export const SignUpSelect = styled.select`
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid;
  border-image: ${(props) => props.theme.colors.subColorGradient1};
  border-image-slice: 1;
  color: white;
  height: 5vh;
  width: 25%;
`;

export const SignUpOption = styled.option`
  background: black;
  border: none;
  color: white;
`;
