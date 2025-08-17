import "./Card.css";

function Card({ children, className = "", style, onClick }) {
  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(e);
    }
  };
  return (
    <li
      className={`card ${className}`}
      style={style}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? "button" : undefined}
    >
      {children}
    </li>
  );
}

export default Card;
