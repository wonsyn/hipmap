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
`;
