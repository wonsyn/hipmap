import styled from "@emotion/styled";

export const ShortsWrapperDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* overflow-y: hidden; */
  -webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  margin-bottom: 10vh;
`;

export const ShortsVideoWrapperDiv = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ShortsVideoAreaDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ShortsVideoElementDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShortsVideoDiv = styled.div`
  width: 80vw;
  height: 80vh;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.subColorGradient4};
`;
