import "./Kara.css";
import Card from "../Card/Card";

function Kara({ kara }) {
  const displayCharacters = () => {
    return kara.map((kara) => (
      <Card className="character__item" key={kara.id}>
        <div className="character__content">
          <h2 className="character__title">{kara.name}</h2>
        </div>
      </Card>
    ));
  };

  return (
    <div>
      <h1 className="characters__title">Kara</h1>
      <div className="characters">
        <ul className="character__list">{displayCharacters()}</ul>
      </div>
    </div>
  );
}

export default Kara;
