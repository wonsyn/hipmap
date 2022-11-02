import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ModalBackDrop, ModalContent } from "../../styles/modal";

interface ModalHandlerProps {
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
  margin_bottom: string;
  modalHandler: () => void;
  children: JSX.Element | string;
}

const Modal = ({
  modalHandler,
  width,
  height,
  border_radius,
  backgroundcolor,
  display,
  font_size,
  font_weight,
  justify_content,
  align_items,
  overflow,
  color,
  margin_bottom,
  children,
}: ModalHandlerProps) => {
  return createPortal(
    <>
      <ModalContent
        width={width}
        height={height}
        border_radius={border_radius}
        backgroundcolor={backgroundcolor}
        display={display}
        font_size={font_size}
        font_weight={font_weight}
        justify_content={justify_content}
        align_items={align_items}
        color={color}
        margin_bottom={margin_bottom}
        overflow={overflow}
      >
        {children}
      </ModalContent>
      <ModalBackDrop onClick={modalHandler} />
    </>,
    document.getElementById("modalDiv") as HTMLElement
  );
};

export default Modal;

Modal.defaultProps = {
  width: "50vw",
  height: "50vh",
  border_radius: "8px",
  backgroundcolor: "white",
  display: "flex",
  font_size: "1.5rem",
  font_weight: "bolder",
  justify_content: "center",
  align_items: "center",
  overflow: "",
  margin_bottom: "",
  color: "black",
};
