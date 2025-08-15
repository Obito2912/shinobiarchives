import "./Clans.css";
import Card from "../Card/Card";

function Clans({ clans }) {
  const displayCharacters = () => {
    return clans.map((clan) => (
      <Card className="character__item" key={clan.id}>
        <div className="character__content">
          <h2 className="character__title">{clan.name}</h2>
        </div>
      </Card>
    ));
  };

  return (
    <div>
      <h1 className="characters__title">Clans</h1>
      <div className="characters">
        <ul className="character__list">{displayCharacters()}</ul>
      </div>
    </div>
  );
}

export default Clans;
