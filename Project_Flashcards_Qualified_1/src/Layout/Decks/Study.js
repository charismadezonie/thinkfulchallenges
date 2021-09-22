import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck, readCard, listCards } from "../../utils/api";
import StudyBreadcrumb from "../StudyBreadcrumb";

function Study({ deck, setDeck }) {
  const { deckId } = useParams();
  const history = useHistory();
  const [currentCard, setCurrentCard] = useState({});
  const [cardList, setCardList] = useState([]);
  const [side, setSide] = useState("front");
  const [cardId, setCardId] = useState(1);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCards() {
      const decksData = await readDeck(deckId, abortController.signal);
      setDeck(decksData);
    }
    fetchCards();
  }, [deckId, setDeck]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCurrentCard() {
      const cardData = await readCard(cardId, abortController.signal);
      setCurrentCard(cardData);
    }
    fetchCurrentCard();
  }, [cardId]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCardList() {
      const cardsData = await listCards(deckId, abortController.signal);
      setCardList(cardsData);
    }
    fetchCardList();
  }, [deckId]);

  function handleFlip() {
    setSide("back");
  }

  function handleNext() {
    if (cardId < cardList["length"]) {
      setCardId(cardId + 1);
    } else {
      if (window.confirm("Restart Cards?")) {
        setCardId(1);
      }
    }
    setSide("front");
  }
  if (cardList["length"] <= 2) {
    return (
      <>
        <h1>Not enough cards.</h1>
        <p>
          You need at least 3 cards to study. There are {cardList["length"]}{" "}
          cards in this deck.
        </p>
        <Link to="/decks/new">
          <button type="button">Add Cards</button>
        </Link>
      </>
    );
  } else if (side === "front") {
    return (
      <>
        <StudyBreadcrumb deck={deck} />
        <div className="card">
          <h1 className="card-title">
            Card {currentCard.id} of {cardList["length"]}
          </h1>
          <p>{currentCard.front}</p>
          <button type="button" onClick={handleFlip}>
            Flip
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <StudyBreadcrumb deck={deck} />
        <div className="card">
          <h1 className="card-title">
            Card {cardId} of {cardList["length"]}
          </h1>
          <p>{currentCard.back}</p>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Study;
