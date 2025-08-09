import Card from "../Card/Card";
import "./Characters.css";

function Characters({ characters }) {
  const displayCharacters = () => {
    return characters.map((character) => (
      <Card className="character__item" key={character.id}>
        <h2 className="character__title">{character.name}</h2>
        {character.images?.[0] || character.images?.[1] ? (
          <img
            className="character__image"
            src={character.images?.[0] || character.images?.[1]}
            alt={`${character.name} image`}
            width={100}
            height={100}
          />
        ) : (
          <img
            className="character__image"
            src={character.images}
            alt={`${character.name} image`}
            width={100}
            height={100}
          />
        )}
      </Card>
    ));
  };

  return (
    <div>
      <h1 className="characters__title">Characters</h1>
      <div className="characters">
        <ul className="character__list">{displayCharacters()}</ul>
      </div>
    </div>
  );
}

export default Characters;
