import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  min-height: 18px;
  height: 3vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainColor};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContentsWrapperDiv = styled.div`
  display: flex;
  width: 100%;
  height: 3vh;
  align-items: center;
  justify-content: space-around;
`;

export const FooterShortsButtons = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  height: 3vh;
`;

export const FooterShortsImg = styled.img`
  height: 5vh;
`;

export const FooterWriteButton = styled.button`
  width: 70px;
  height: 70px;
  margin-bottom: 10%;
  display: flex;
  align-items: center;
  background: none;
  border: none;
`;

export const FooterWriteImg = styled.img`
  width: 70px;
  height: 70px;
`;
