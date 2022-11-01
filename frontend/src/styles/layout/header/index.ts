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
  /* max-width: 100%; */
`;

export const HeaderTitleTextWrapper = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  height: 80%;
  display: flex;
  align-items: center;
`;
