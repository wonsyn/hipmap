import styled from "@emotion/styled";

interface CardProps {
  display: string;
  justify_content: string;
  align_items: string;
  overflow: string;
  color: string;
  border_radius: number;
  background: string;
  width: string;
  height: string;
  font_size: string;
}

export const CardContainer = styled.div<CardProps>`
  display: ${(props) => props.display};
  align-items: ${(props) => props.align_items};
  justify-content: ${(props) => props.justify_content};
  color: ${(props) => props.color};
  border-radius: ${(props) => `${props.border_radius}px`};
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.font_size};
  overflow: ${(props) => props.overflow};
`;
