import "./Card.css";

function Card({ children, className = "", props }) {
  return (
    <li className={`card ${className}`} {...props}>
      {children}
    </li>
  );
}

export default Card;
