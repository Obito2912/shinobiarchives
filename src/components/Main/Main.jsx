import "./Main.css";
import content from "../../utils/mainContent";
import narutoPicture from "../../images/naruto.webp";
import narutoMedium from "../../images/naruto-medium.webp";

const { narutoIntro, history, curiosities, statsArr } = content;

function Main({
  numOfAkatsuki,
  numOfCharacters,
  numOfClans,
  numOfKara,
  numOfKekkeiGenkai,
  numOfTailedBeasts,
  numOfTeams,
  numOfVillages,
}) {
  const statsInfo = statsArr(
    numOfAkatsuki,
    numOfCharacters,
    numOfClans,
    numOfKara,
    numOfKekkeiGenkai,
    numOfTailedBeasts,
    numOfTeams,
    numOfVillages
  );

  return (
    <main className="main">
      <div
        className="main__hero"
        role="img"
        aria-label="A hero image of the hidden leaf village"
      ></div>
      <h1 className="main__title">Step Into the World of Naruto</h1>
      <section className="naruto">
        <h2 className="naruto__title">Introduction</h2>
        <div className="naruto__content">
          <picture className="naruto__img-container">
            <source
              type="image/webp"
              srcSet={narutoMedium}
              media="(max-width: 1115px)"
            />
            <img
              className="naruto__image"
              src={narutoPicture}
              alt="Naruto image"
              width={70}
              height={100}
            ></img>
          </picture>
          <p className="naruto__intro">{narutoIntro}</p>
        </div>
      </section>
      <section className="history">
        <h2 className="history__title">History</h2>
        <div className="history__content">
          {history.map(({ paragraph }, i) => (
            <p className="history__paragraph" key={i}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <section className="curiosities">
        <h2 className="curiosities__title">Curiosities</h2>
        <div className="curiosities__content">
          <ul className="curiosities__list">
            {curiosities.map(({ curiosity }, i) => (
              <li key={i} className="curiosities__item">
                {curiosity}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="stats">
        <h2 className="stats__title">Site Statistics</h2>
        <ul className="stats__list">
          {statsInfo.map((stat) => (
            <li className="stats__item" key={stat.name}>
              <span className="stats__name">{stat.name}</span>{" "}
              <span className="stats__number">{stat.stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
