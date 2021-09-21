import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { readDeck, readCard, listCards } from "../../utils/api";

function Study() {
  const { params } = useRouteMatch();
  const deckId = params.slug;
  let cardId = 1;
  const [currentDeck, setCurrentDeck] = useState({});
  const [currentCard, setCurrentCard] = useState({});
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCards() {
      const decksData = await readDeck(deckId, abortController.signal);
      setCurrentDeck(decksData);
    }
    fetchCards();
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCurrentCard() {
      const cardData = await readCard(cardId, abortController.signal);
      setCurrentCard(cardData);
    }
    fetchCurrentCard();
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCardList() {
      const cardsData = await listCards(deckId, abortController.signal);
      setCardList(cardsData);
    }
    fetchCardList();
  }, []);

  function handleFlip() {
    console.log("flip NOW DO IT");
  }

  console.log(cardList);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">{currentDeck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
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
}

export default Study;
