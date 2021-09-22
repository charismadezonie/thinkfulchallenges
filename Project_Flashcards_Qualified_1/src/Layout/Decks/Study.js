import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, readCard, listCards } from "../../utils/api";
import StudyBreadcrumb from "../StudyBreadcrumb";

function Study({ deck, setDeck, card, setCard }) {
  const { deckId } = useParams();
  const [cardList, setCardList] = useState([]);
  const [side, setSide] = useState("front");
  const [cardId, setCardId] = useState(1);
  const history = useHistory();

  console.log(deck);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchDeck() {
      const decksData = await readDeck(deckId, abortController.signal);
      setDeck(decksData);
    }
    fetchDeck();
  }, [deckId, setDeck]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCurrentCard() {
      const cardData = await readCard(cardId, abortController.signal);
      setCard(cardData);
    }
    fetchCurrentCard();
  }, [cardId, setCard]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCardList() {
      const cardsData = await listCards(deckId, abortController.signal);
      setCardList(cardsData);
    }
    fetchCardList();
  }, [deckId, setCardList]);

  function handleFlip() {
    setSide("back");
  }

  function handleNext() {
    if (cardId < cardList["length"]) {
      setCardId(cardId + 1);
    } else {
      if (window.confirm("Restart Cards?")) {
        setCardId(1);
      } else {
        history.push("/");
      }
    }
    setSide("front");
  }
  if (cardList["length"] <= 2) {
    return (
      <>
        <StudyBreadcrumb deck={deck} />
        <h1>{deck.name}: Study</h1>
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
        <h1>{deck.name}: Study</h1>
        <div className="card">
          <h1 className="card-title">
            Card {card.id} of {cardList["length"]}
          </h1>
          <p>{card.front}</p>
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
        <h1>{deck.name}: Study</h1>
        <div className="card">
          <h1 className="card-title">
            Card {cardId} of {cardList["length"]}
          </h1>
          <p>{card.back}</p>
          <button type="button" onClick={handleFlip}>
            Flip
          </button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Study;
