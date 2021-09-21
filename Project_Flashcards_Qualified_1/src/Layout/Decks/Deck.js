import React, { useState, useEffect } from "react";
import { deleteDeck, readDeck, listCards } from "../../utils/api";
import { useRouteMatch, Link, useHistory } from "react-router-dom";

function Deck({ slug }) {
  const { params } = useRouteMatch();
  const deckId = params.slug;
  const [currentDeck, setCurrentDeck] = useState({});
  const [cardList, setCardList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCards() {
      const decksData = await readDeck(deckId, abortController.signal);
      setCurrentDeck(decksData);
    }
    fetchCards();
  }, [deckId]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchCardList() {
      const cardsData = await listCards(deckId, abortController.signal);
      setCardList(cardsData);
    }
    fetchCardList();
  }, [deckId]);

  function handleDelete() {
    if (window.confirm("Are you sure?")) {
      deleteDeck(deckId);
      history.push("/");
    }
  }

  console.log(cardList);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">{currentDeck.name}</li>
        </ol>
      </nav>
      <div>
        <h1>{currentDeck.name}</h1>
        <p>{currentDeck.description}</p>
        <Link to={`/decks/${slug}/edit`}>
          <button type="button">Edit</button>
        </Link>
        <Link to={`/decks/${slug}/study`}>
          <button type="button">Study</button>
        </Link>
        <Link to={`/decks/${slug}/cards/new`}>
          <button type="button">Add Cards</button>
        </Link>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <h1>Cards</h1>
      </div>
      <div></div>
    </>
  );
}

export default Deck;
