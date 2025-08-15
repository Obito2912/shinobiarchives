import "./CardDetailsModal.css";
import { useEffect, useRef } from "react";

function CardDetailsModal({
  children,
  isOpen,
  onClose,
  classNames = "",
  title = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;

    if (isOpen && !dlg.open) dlg.showModal();
    if (!isOpen && dlg.open) dlg.close();

    return () => {
      if (dlg.open) dlg.close();
    };
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="dialog-title"
      onCancel={onClose}
      onClick={(e) => {
        const dialog = ref.current;
        if (e.target === dialog) onClose();
      }}
      className={`dialog ${isOpen && "dialog__opened"} ${classNames}`}
    >
      <header className="dialog__header">
        <h2 className="dialog__title">{title}</h2>
        <div className="dialog__close_container">
          <button
            onClick={onClose}
            aria-label="Close"
            className="dialog__close"
          ></button>
        </div>
      </header>
      <div className="dialog__content">
        <div className="dialog__dynamic-content">{children}</div>
      </div>
    </dialog>
  );
}

export default CardDetailsModal;
