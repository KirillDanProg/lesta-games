import { PropsWithChildren } from "react";
import s from "./modal.module.scss";

type ModalProps = PropsWithChildren & {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <div className={`${s.backdrop} ${isOpen ? s.open : ""}`} onClick={onClose}>
      <div className={`${s.content} ${isOpen ? s.open : ""}`} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
