import styled from "@emotion/styled";

interface MyHipContentImgProps {
  rightPercent: number;
}

export const MyHipContainerDiv = styled.div`
  display: flex;
  margin-top: 3%;
  width: 100%;
  justify-content: center;
`;

export const MyHipCardFont = styled.div`
  font-size: 1.5rem;
  padding: 3%;
  color: black;
  font-weight: bolder;
`;

export const MyHipContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyHipContentImg = styled.img<MyHipContentImgProps>`
  width: auto;
  height: 90%;
  display: flex;
  margin-left: auto;
  margin-right: ${(props) => `${props.rightPercent + 3}%`};
  /* position: absolute; */
  border-radius: 8px;
`;

export const MyHipContentWrapperDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  position: relative;
`;

export const MyHipContentCardWrapperDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vh;
`;

export const MyHipContentTextDiv = styled.div`
  font-size: 1rem;
  font-weight: bolder;
  margin-left: 3%;
`;
