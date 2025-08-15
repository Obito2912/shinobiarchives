import "./KekkeiGenkai.css";
import Card from "../Card/Card";

function KekkeiGenkai({ kekkeiGenkai }) {
  const displayCharacters = () => {
    return kekkeiGenkai.map((kekkeiGenkai) => (
      <Card className="character__item" key={kekkeiGenkai.id}>
        <div className="character__content">
          <h2 className="character__title">{kekkeiGenkai.name}</h2>
        </div>
      </Card>
    ));
  };

  return (
    <div>
      <h1 className="characters__title">Kekkei-Genkai</h1>
      <div className="characters">
        <ul className="character__list">{displayCharacters()}</ul>
      </div>
    </div>
  );
}

export default KekkeiGenkai;
