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
  padding-right: 3%;
  top: 0;
  left: 0;
  z-index: 9998;
`;

export const HeaderTitleWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  height: 80%;
  width: auto;
`;

export const HeaderTitleTextWrapper = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  height: 80%;
  display: flex;
  align-items: center;
`;
