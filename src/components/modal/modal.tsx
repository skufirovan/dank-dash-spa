import ReactDOM from 'react-dom';
import { ReactNode } from 'react';
import * as s from './modal.module.css';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const closeByEsc = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className={s.modalOverlay}
      onClick={onClose}
      onKeyDown={closeByEsc}
      tabIndex={0}
      role="button"
    >
      <div
        className={s.modalContent}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={closeByEsc}
        tabIndex={0}
        role="button"
      >
        <button type="button" className={s.modalClose} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modals')!,
  );
};

export default Modal;
