import "./RouteElement.css";
import Preloader from "../Preloader/Preloader";
import Centered from "../Centered/Centered";

function RouteElement({ error, loading, label, children }) {
  if (error) {
    return (
      <Centered>
        <p className="re__error" role="alert" aria-live="assertive">
          {error}
        </p>
      </Centered>
    );
  }
  if (loading) {
    return (
      <Centered>
        <div role="status" aria-live="polite" aria-label={`Loading ${label}`}>
          <Preloader />
        </div>
      </Centered>
    );
  }
  return children;
}

export default RouteElement;
