import "./Villages.css";
import Card from "../Card/Card";

function Villages({ villages }) {
  const displayCharacters = () => {
    return villages.map((village) => (
      <Card className="character__item" key={village.id}>
        <div className="character__content">
          <h2 className="character__title">{village.name}</h2>
        </div>
      </Card>
    ));
  };

  return (
    <div>
      <h1 className="characters__title">Villages</h1>
      <div className="characters">
        <ul className="character__list">{displayCharacters()}</ul>
      </div>
    </div>
  );
}

export default Villages;
