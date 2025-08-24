import "./Input.css";
import { findInputError } from "../../utils/findInputError";
import { isFormInvalid } from "../../utils/isFormInvalid";
import { useFormContext } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import InputError from "../InputError/InputError";

function Input({
  name,
  label,
  type,
  id,
  placeholder,
  validation /* multiline */,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <>
      <div className="field">
        <label htmlFor={id} className="label">
          {`${label} *`}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className={"input"}
          {...register(name, validation)}
        />
      </div>
    </>
  );
}

export default Input;
