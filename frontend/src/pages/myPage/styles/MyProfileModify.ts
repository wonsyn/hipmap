import styled from "@emotion/styled";

export const MyProfileModifyWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const MyProfileModifyLabelingWrapper = styled.div`
  width: 85%;
  display: flex;
  margin-bottom: auto;
  margin-top: 5%;
  flex-direction: column;
`;

export const MyProfileModifyLabelingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
  margin-top: 3%;
  margin-bottom: 3%;
`;

export const MyProfileModifyLabelingButton = styled.button`
  width: 25vh;
  max-width: 150px;
  font-size: 1rem;
  font-weight: bolder;
  color: white;
  background: ${(props) => props.theme.colors.subColorGradient4};
  border-radius: 8px;
  padding: 3%;
  border: none;
`;

export const MyProfileModifyLabelingNameDiv = styled.h1`
  width: 100%;
  font-weight: bolder;
  font-size: 3rem;
  margin-left: auto;
  background: ${(props) => props.theme.colors.subColorGradient4};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MyProfileModifyLabelingInputWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyProfileModifyLabelingInput = styled.input`
  padding-left: 5%;
  width: 90%;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 3px solid;
  border-image: ${(props) => props.theme.colors.subColorGradient1};
  border-image-slice: 1;
  color: gray;
  height: 5vh;
  margin-top: 2vh;
`;

export const MyProfileModifyLabelingFollowOpenWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-top: 3vh;
  justify-content: space-around;
  align-items: center;
`;

export const MyProFileModifyLabelingFollowOpenButton = styled.button`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  height: 2vh;
  color: white;
  background: ${(props) => props.theme.colors.subColorGradient2};
  border-radius: 8px;
  padding: 18px;
  border: none;
`;

export const MyProFileModifyLabelingModifyButton = styled.button`
  width: 150px;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  height: 2vh;
  color: white;
  background: ${(props) => props.theme.colors.subColorGradient1};
  border-radius: 8px;
  padding: 18px;
  border: none;
`;
export const MyProFileModifyLabelingModifyWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
  margin-top: 5vh;
`;

export const MyModifyProfileWrapperDiv = styled.div<{ url: string }>`
  width: 10vh;
  max-width: 100px;
  max-height: 100px;
  height: 10vh;
  border-radius: 50%;
  margin-right: 2%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
`;
