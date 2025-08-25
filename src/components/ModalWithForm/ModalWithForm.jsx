import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

import "./ModalWithForm.css";
import button from "../../images/close-btn.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  isOpen,
  classNames = {},
  secondaryBtn = null,
  onSubmit = null,
}) {
  const methods = useForm({
    mode: "onChange", // 👈 live validity from RHF
    criteriaMode: "all",
  });

  const [success, setSuccess] = useState(false);

  return (
    <div
      className={`modal ${isOpen && "modal__opened"}`}
      onClick={(e) => {
        if (e.target.classList.contains("modal")) {
          onClose();
        }
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">
          {success ? "You have signed up/in" : title}
        </h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img className="modal__close-btn" src={button} alt="Close button" />
        </button>

        <FormProvider {...methods}>
          <form
            // Let the parent handler run with the real event.
            onSubmit={(e) => {
              // block submit if RHF thinks the form is invalid
              if (!methods.formState.isValid) {
                e.preventDefault();
                return;
              }
              onSubmit && onSubmit(e);
              setSuccess(true);
              methods.reset();
            }}
            className={`modal__form ${classNames.form}`}
            noValidate
          >
            {children}
            <div className="modal__button-container">
              <button
                type="submit"
                className="modal__submit"
                disabled={!methods.formState.isValid}
              >
                {buttonText}
              </button>
              {secondaryBtn}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default ModalWithForm;
