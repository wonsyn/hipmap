import styled from "@emotion/styled";

export const SingleShortsVideoDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.subColorGradient4};
  position: relative;
  max-width: 1024px;
`;

export const SingleShortsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SingleShortsVoteProgressBarWrapperDiv = styled.div`
  /* flex: 1; */
  width: 80%;
  background: #f4d9ff;
  height: 10px;
  border-radius: 8px;
`;

export const SingleShortsVoteProgressBarDiv = styled.div<{ width: number }>`
  height: 10px;
  width: ${(props) => props.width}%;
  background: #800080;
  border-radius: 8px;
`;

export const SingleShortsVoteProgressBar = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 699px) {
    width: 55%;
  }
`;
