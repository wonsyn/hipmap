import styled from "@emotion/styled";

interface ButtonProps {
  color: string;
  width: string;
  height: string;
}

export const CommonButtonWrapper = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.theme.colors.subColorGradient2};
  border: none;
`;
