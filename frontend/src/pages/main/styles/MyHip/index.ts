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
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const MyHipContentImg = styled.img<MyHipContentImgProps>`
  width: auto;
  height: 90%;
  display: flex;
  margin-left: auto;
  margin-right: ${(props) => `${props.rightPercent + 3}%`};
  /* position: absolute; */
  border-radius: 8px;
  @media (min-width: 1024px) {
    max-width: 90%;
    width: auto;
    height: 100%;
    max-height: 75%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const MyHipContentWrapperDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 100px;
  position: relative;
  @media (min-width: 1024px) {
    flex-direction: column;
    overflow: hidden;
  }
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

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    margin-top: 2%;
    margin-bottom: 5%;
  }
`;
