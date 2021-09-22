import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyBreadcrumb from "../StudyBreadcrumb";

export function Study({ deck, setDeck }) {
  const history = useHistory();
  const { deckId } = useParams();
  const [study, setStudy] = useState({
    cards: [],
    currentCard: 0,
    cardMax: 0,
    front: true,
    flipped: false,
  });

  useEffect(() => {
    async function loadDecks() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
      setStudy({
        currentCard: 0,
        front: true,
        flipped: false,
        cards: loadedDeck.cards,
        cardMax: loadedDeck.cards.length,
      });
    }
    loadDecks();
  }, [deckId]);

  function handleFlip() {
    setStudy({
      ...study,
      front: !study.front,
      flipped: true,
    });
  }

  function handleNext() {
    if (study.currentCard < study.cardMax) {
      setStudy({
        ...study,
        currentCard: study.currentCard + 1,
        flipped: false,
        front: true,
      });
    } else {
      if (window.confirm("Start Over?")) {
        setStudy({
          ...study,
          currentCard: 0,
          flipped: false,
          front: true,
        });
      } else {
        history.push("/");
      }
    }
  }

  if (study.cards.length < 3) {
    return (
      <>
        <StudyBreadcrumb deck={deck} />
        <h1>{deck.name}: Study</h1>
        <h2>Not enough cards.</h2>
        <p>
          You need at least 3 cards to study. There are {study.cards.length}{" "}
          cards in this deck.
        </p>
      </>
    );
  } else {
    return (
      <div>
        <StudyBreadcrumb deck={deck} />
        <h1>Study: {deck.name}</h1>
        <div className="card">
          <h6>Card {`${study.currentCard + 1} of ${study.cardMax}`}</h6>
          <p className="card-text">
            {study.front
              ? study.cards[study.currentCard].front
              : study.cards[study.currentCard].back}
          </p>
          <button type="button" onClick={handleFlip}>
            Flip
          </button>
          {study.flipped ? (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Study;
