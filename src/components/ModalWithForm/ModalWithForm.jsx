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
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onFormSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
    onSubmit();
  });
  const [isValid, setIsValid] = useState(false);
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
            onChange={(e) => setIsValid(e.currentTarget.checkValidity())}
            onSubmit={(e) => e.preventDefault()}
            className={`modal__form ${classNames.form}`}
          >
            {children}
            <div className="modal__button-container">
              <button
                type="submit"
                className="modal__submit"
                disabled={!isValid}
                onClick={onFormSubmit}
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
