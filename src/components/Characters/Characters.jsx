// export default Characters;
// src/components/Characters/Characters.jsx
import { useEffect, useState } from "react";
import { getCharacters } from "../../utils/dattebayoApi";

import Card from "../Card/Card";
import CardDetailsModal from "../CardDetailsModal/CardDetailsModal";
import CharacterModalContent from "../CharacterModalContent/CharacterModalContent";

import "./Characters.css";

function Characters() {
  const [selectedCard, setSelectedCard] = useState(null);

  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setErr("");

    getCharacters(page)
      .then((data) => {
        if (cancelled) return;
        // API shape: { characters: [...], total, pageSize, currentPage }
        setItems(data.characters || []);
        const pages =
          data.total && data.pageSize
            ? Math.ceil(data.total / data.pageSize)
            : 1;
        setTotalPages(pages);
      })
      .catch((e) => {
        if (!cancelled) setErr(String(e));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [page]);

  const getCardStyle = (character) => {
    const imgSrc = character?.images?.[0] || character?.images?.[1];
    return imgSrc
      ? {
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : {};
  };

  return (
    <>
      <div className="characters">
        <h1 className="characters__title">Characters</h1>

        <div className="characters__content">
          {/* Error message */}
          {err && (
            <div role="alert" style={{ color: "#ffbb00" }}>
              Sorry, something went wrong during the request. There may be a
              connection issue or the server may be down. Please try again later
            </div>
          )}

          {/* Nothing found */}
          {!loading && !err && items.length === 0 && (
            <p
              style={{ color: "#ffbb00" }}
              aria-live="polite"
              className="characters__status characters__status--empty"
            >
              Nothing found
            </p>
          )}

          {!loading && !err && items.length > 0 && (
            <>
              <ul className="character__list">
                {/* {console.log(items)} */}
                {items.map((character) => (
                  <Card
                    className="character__item"
                    key={character.id}
                    style={getCardStyle(character)}
                    onClick={() => setSelectedCard(character)}
                    aria-label={`Open details for ${character.name}`}
                    aria-haspopups="dialog"
                  >
                    <div className="character__content">
                      <h2 className="character__title">{character.name}</h2>
                      <div className="character__subtitles">
                        {Object.entries(character)
                          .filter(
                            ([key]) =>
                              key !== "id" &&
                              key !== "images" &&
                              key !== "name" &&
                              key !== "voiceActors"
                          )
                          .map(
                            ([key]) =>
                              key && (
                                <span className="character__subtitle" key={key}>
                                  {key}
                                </span>
                              )
                          )}
                      </div>
                    </div>
                  </Card>
                ))}
              </ul>

              {/* super simple pagination controls */}
              <div className="pagination">
                <button
                  className="pagination__btn"
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                >
                  Prev
                </button>
                <span>
                  Page <span className="pagination__page">{page}</span> of
                  <span className="pagination__total">{` ${totalPages}`}</span>
                </span>
                <button
                  className="pagination__btn"
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <CardDetailsModal
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        title={selectedCard?.name}
      >
        {selectedCard && <CharacterModalContent card={selectedCard} />}
      </CardDetailsModal>
    </>
  );
}

export default Characters;
