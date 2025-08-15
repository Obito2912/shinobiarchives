import "./Akatsuki.css";
import Card from "../Card/Card";

function Akatsuki({ akatsuki }) {
  const displayCharacters = () => {
    return akatsuki.map((akatsuki) => (
      <Card className="character__item" key={akatsuki.id}>
        <div className="character__content">
          <h2 className="character__title">{akatsuki.name}</h2>
        </div>
      </Card>
    ));
  };

  return (
    <div>
      <h1 className="characters__title">Akatsuki</h1>
      <div className="characters">
        <ul className="character__list">{displayCharacters()}</ul>
      </div>
    </div>
  );
}

export default Akatsuki;
