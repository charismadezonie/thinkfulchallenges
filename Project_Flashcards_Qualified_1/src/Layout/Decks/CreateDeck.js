import React from "react";
import { Link } from "react-router-dom";

function CreateDeck() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">Create Deck</li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <form>
        <label htmlFor="name">
          Name
          <br />
          <input type="text" id="name" name="name" placeholder="Deck Name" />
        </label>
        <br />
        <label htmlFor="description">
          Description
          <br />
          <textarea
            id="description"
            name="description"
            className="text-area"
            placeholder="Brief description of the deck"
          />
        </label>
        <br />
        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
        <Link to="/decks/:slug">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </>
  );
}

export default CreateDeck;
