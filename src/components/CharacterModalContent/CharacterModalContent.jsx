import "./CharacterModalContent.css";

const labelize = (s = "") =>
  s
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^\w/, (c) => c.toUpperCase());

function CharacterModalContent({ card }) {
  if (!card) return null;

  const imgSrc =
    card.images?.[0] ||
    card.images?.[1] ||
    "https://via.placeholder.com/350x270";

  // Build safe debut list, filter empties, then take first two
  const debutPairs = card.debut
    ? Object.entries(card.debut).filter(([, v]) => !!String(v).trim())
    : [];

  const familyPairs = card.family
    ? Object.entries(card.family).filter(([, v]) => !!String(v).trim())
    : [];

  const hasNature =
    Array.isArray(card.natureType) && card.natureType.length > 0;

  const personalPairs = card.personal
    ? Object.entries(card.personal).filter(([k, v]) => {
        if (k === "titles") return false; // remove unwanted keys
        return v != null && (typeof v !== "string" || v.trim() !== "");
      })
    : [];

  const hasJutsus = Array.isArray(card.jutsu) && card.jutsu.length > 0;

  return (
    <article className="char-modal">
      <img
        src={imgSrc}
        alt={`${card.name} image`}
        className="char-modal__img"
        loading="lazy"
      />

      <div className="char-modal__info">
        {/* Name (optional) */}

        {/* Debut */}
        {debutPairs.length > 0 && (
          <>
            <h3 className="char-modal__title">Debut</h3>
            {debutPairs.slice(0, 2).map(([key, value]) => (
              <p className="char-modal__key" key={key}>
                {labelize(key)}:
                <span className="char-modal__value"> {value}</span>
              </p>
            ))}
          </>
        )}

        {/* Family */}
        {familyPairs.length > 0 && (
          <>
            <h3 className="char-modal__title">Family</h3>
            {familyPairs.map(([key, value]) => (
              <p className="char-modal__key" key={key}>
                {labelize(key)}:
                <span className="char-modal__value"> {value}</span>
              </p>
            ))}
          </>
        )}

        {/* Nature Type */}
        {hasNature && (
          <>
            <h3 className="char-modal__title">Nature Type</h3>
            <p className="char-modal__key">
              <span className="char-modal__value">
                {card.natureType.join(", ")}
              </span>
            </p>
          </>
        )}

        {/* Personal */}
        {personalPairs.length > 0 && (
          <>
            <h3 className="char-modal__title">Personal</h3>
            {personalPairs.map(([key, value]) => {
              const label = labelize(key);

              // Nested object: print parent once, combine sub-entries
              if (value && typeof value === "object" && !Array.isArray(value)) {
                const sub = Object.entries(value)
                  .filter(([, v]) => v != null && String(v).trim() !== "")
                  .map(([subKey, subVal]) => `${labelize(subKey)}: ${subVal}`)
                  .join(" • ");

                return (
                  <p className="char-modal__key" key={key}>
                    {label}:<span className="char-modal__value"> {sub}</span>
                  </p>
                );
              }

              // Array or simple value → one line
              return (
                <p className="char-modal__key" key={key}>
                  {label}:
                  <span className="char-modal__value">
                    {Array.isArray(value)
                      ? ` ${value.join(", ")}`
                      : ` ${value}`}
                  </span>
                </p>
              );
            })}
          </>
        )}
        {hasJutsus && (
          <>
            <h3 className="char-modal__title">Jutsus</h3>
            <p className="char-modal__key">
              <span className="char-modal__value">{card.jutsu.join(", ")}</span>
            </p>
          </>
        )}
      </div>
    </article>
  );
}

export default CharacterModalContent;
