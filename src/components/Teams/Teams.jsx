import "./Teams.css";
import Card from "../Card/Card";

function Teams({ teams }) {
  const displayCharacters = () => {
    return teams.map((team) => (
      <Card className="character__item" key={team.id}>
        <div className="character__content">
          <h2 className="character__title">{team.name}</h2>
        </div>
      </Card>
    ));
  };

  return (
    <div>
      <h1 className="characters__title">Teams</h1>
      <div className="characters">
        <ul className="character__list">{displayCharacters()}</ul>
      </div>
    </div>
  );
}

export default Teams;
