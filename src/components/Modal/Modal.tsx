import React, { useEffect } from "react";
import "./style.css";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  ariaLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  ariaLabel,
}) => {
  useEffect(() => {
    function onKey(e: any) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  function handleBackdrop(e: any) {
    onClose();
  }

  function stop(e: any) {
    e.stopPropagation();
  }

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel ?? "modal"}
      onMouseDown={handleBackdrop}
    >
      <div className="modal" onMouseDown={stop}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
