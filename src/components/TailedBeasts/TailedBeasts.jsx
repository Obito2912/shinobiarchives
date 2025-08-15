import "./TailedBeasts.css";
import Card from "../Card/Card";

function TailedBeasts({ tailedBeasts }) {
  const displayCharacters = () => {
    return tailedBeasts.map((tailedBeast) => (
      <Card className="character__item" key={tailedBeast.id}>
        <div className="character__content">
          <h2 className="character__title">{tailedBeast.name}</h2>
        </div>
      </Card>
    ));
  };

  return (
    <div>
      <h1 className="characters__title">Tailed-Beasts</h1>
      <div className="characters">
        <ul className="character__list">{displayCharacters()}</ul>
      </div>
    </div>
  );
}

export default TailedBeasts;
