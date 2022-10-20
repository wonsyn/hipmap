import styled from "@emotion/styled";

interface ButtonProps {
  color: string;
  width: string;
  height: string;
}

export const CommonButton = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
