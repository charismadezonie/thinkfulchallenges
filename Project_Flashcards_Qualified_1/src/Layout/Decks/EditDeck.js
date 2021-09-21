import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";

function EditDeck() {
  const { params } = useRouteMatch();
  const deckId = params.slug;
  const [deckToEdit, setDeckToEdit] = useState();
  const [editedData, setEditedData] = useState({
    id: deckId,
    name: "",
    description: "",
  });
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      const deckData = await readDeck(deckId, abortController.signal);
      setDeckToEdit(deckData);
    }
    fetchData();
  }, [deckId]);

  function handleChange({ target }) {
    setEditedData({
      ...editedData,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await updateDeck(editedData);
    history.push(`/decks/${response.id}`);
  }

  if (deckToEdit) {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deckToEdit.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          </ol>
        </nav>
        <div>
          <h1>Edit Deck</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder={deckToEdit.name}
                onChange={handleChange}
                value={editedData.name}
              />
            </label>
            <br />
            <label htmlFor="description">
              Description
              <br />
              <textarea
                id="description"
                name="description"
                className="text-area"
                placeholder={deckToEdit.description}
                onChange={handleChange}
                value={editedData.description}
              />
            </label>
            <br />
            <Link to={`/decks/${deckId}`}>
              <button type="button">Cancel</button>
            </Link>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default EditDeck;
