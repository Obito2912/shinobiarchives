import "./RegisterModal.css";

import Input from "../Input/Input";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import {
  name_validation,
  email_validation,
  password_validation,
  avatar_url_validation,
} from "../../utils/inputValidations";

function RegisterModal({ onClose, isOpen, handleLogInClick, onRegister }) {
  return (
    <ModalWithForm
      title={"Sign Up"}
      buttonText={"Sign Up"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onRegister}
      classNames={{
        form: "register__form",
      }}
      secondaryBtn={
        <button
          type="button"
          onClick={handleLogInClick}
          className="modal__submit secondary__option"
        >
          Or Log In
        </button>
      }
    >
      <Input {...email_validation} />
      <Input {...password_validation} />
      <Input {...name_validation} />
      <Input {...avatar_url_validation} />
    </ModalWithForm>
  );
}

export default RegisterModal;
