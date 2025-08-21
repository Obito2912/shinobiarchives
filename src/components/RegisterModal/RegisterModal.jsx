import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

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
      <label htmlFor="register-email">
        Email*
        <input
          type="email"
          required
          name="email"
          id="register-email"
          placeholder="Enter your email"
        />
      </label>
      <label htmlFor="register-password">
        Password*
        <input
          type="password"
          required
          name="password"
          id="register-password"
          placeholder="Enter your password"
        />
      </label>
      <label htmlFor="register-name">
        Name*
        <input
          type="text"
          required
          name="name"
          id="register-name"
          placeholder="Enter your name"
        />
      </label>
      <label htmlFor="register-avatar">
        Avatar URL*
        <input
          type="url"
          required
          name="avatar"
          id="register-avatar"
          placeholder="Enter the new avatar's url"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
