import React from "react";
import { createPortal } from "react-dom";
import { ModalBackDrop, ModalContent } from "../../styles/modal";

interface ModalHandlerProps {
  modalHandler: () => void;
}

const Modal = ({ modalHandler }: ModalHandlerProps) => {
  return createPortal(
    <>
      <ModalContent
        width="100px"
        height="100px"
        border_radius={null}
        backgroundcolor={null}
      >
        test
      </ModalContent>
      <ModalBackDrop onClick={modalHandler} />
    </>,
    document.getElementById("modalDiv") as HTMLElement
  );
};

export default Modal;
