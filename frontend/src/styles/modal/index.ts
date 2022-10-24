import styled from "@emotion/styled";

interface modalProps {
  width: string;
  height: string;
  border_radius: string;
  backgroundcolor: string;
  display: string;
  font_size: string;
  font_weight: string;
  justify_content: string;
  align_items: string;
  overflow: string;
  color: string;
}

export const ModalContent = styled.div<modalProps>`
  position: fixed;
  z-index: 10000;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) =>
    props.border_radius === null ? "8px" : props.border_radius};
  background: ${(props) =>
    props.backgroundcolor === null ? "white" : props.backgroundcolor};
  left: 50%;
  top: 50%;
  color:${(props) => props.color};
  transform: translate(-50%, -50%);
  display: ${(props) => props.display};
  background: ${(props) => props.backgroundcolor};
  font-size: ${(props) => props.font_size};
  font-weight: ${(props) => props.font_weight};
  justify-content: ${(props) => props.justify_content};
  align-items: ${(props) => props.align_items};
  overflow: ${(props) => props.overflow};
`;

export const ModalBackDrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 75%;
`;
