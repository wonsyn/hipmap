import styled from "@emotion/styled";

interface modalProps {
  width: string;
  height: string;
  border_radius: string | null;
  backgroundcolor: string | null;
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
  transform: translate(-50%, -50%);
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
