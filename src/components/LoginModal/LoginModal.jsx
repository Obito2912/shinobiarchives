import "./LoginModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Input from "../Input/Input";
import {
  email_validation,
  password_validation,
} from "../../utils/inputValidations";

function LoginModal({ onClose, isOpen, handleSignUpClick, onSignIn }) {
  return (
    <ModalWithForm
      title={"Log In"}
      buttonText={"Log In"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSignIn}
      classNames={{
        form: "login__form",
      }}
      secondaryBtn={
        <button
          type="button"
          onClick={handleSignUpClick}
          className="modal__submit secondary__option"
        >
          Or Sign Up
        </button>
      }
    >
      <Input {...email_validation} />
      <Input {...password_validation} />
    </ModalWithForm>
  );
}

export default LoginModal;
