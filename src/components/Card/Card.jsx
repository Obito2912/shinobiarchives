import "./Card.css";

function Card({ children, className = "", style, onClick }) {
  return (
    <li className={`card ${className}`} style={style} onClick={onClick}>
      {children}
    </li>
  );
}

export default Card;
