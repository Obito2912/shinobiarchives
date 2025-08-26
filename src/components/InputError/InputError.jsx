import "./InputError.css";
import { MdError } from "react-icons/md";
import { motion } from "framer-motion";

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

const MotionP = motion.p;

function InputError({ message }) {
  return (
    <MotionP className="error" {...framer_error}>
      <MdError />
      {message}
    </MotionP>
  );
}

export default InputError;
