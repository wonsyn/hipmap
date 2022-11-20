import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 100vw;
  position: fixed;
  min-height: 32px;
  height: 5vh;
  font-size: larger;
  font-weight: bolder;
  background-color: ${(props) => props.theme.colors.black};
  border-bottom: 2px solid;
  border-color: white;
  display: flex;
  align-items: center;
  padding-left: 3%;
  justify-content: center;
  padding-right: 3%;
  top: 0;
  left: 0;
  z-index: 9998;
  @media (min-width: 700px) {
    padding-left: 0%;
    padding-right: 0%;
  }
`;

export const HeaderTitleWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  @media (min-width: 700px) {
    width: 30%;
  }
`;

export const LogoImg = styled.img`
  max-height: 80%;
  :hover {
    cursor: pointer;
  }
  /* max-width: 100%; */
`;

export const HeaderTitleTextWrapper = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  height: 60%;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const HeaderContentsWrapperDiv = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  margin-left: 3%;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderShortsButtons = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  height: 3vh;
  margin-right: 1vw;
  :hover{
    cursor: pointer;
  }
`;

export const HeaderContentWriteButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  height: 5vh;
  margin-left: auto;
  margin-top: 2%;
  :hover{
    cursor: pointer;
  }
`;
