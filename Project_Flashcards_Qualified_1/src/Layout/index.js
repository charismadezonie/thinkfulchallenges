import React, { useState } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Study from "./Decks/Study";
import Deck from "./Decks/Deck";
import CreateDeck from "./Decks/CreateDeck";
import EditDeck from "./Decks/EditDeck";
import AddCard from "./Decks/Cards/AddCard";
import EditCard from "./Decks/Cards/EditCard";

function Layout() {
  const [decks, setDecks] = useState([]);
  let { slug } = useParams();
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:slug">
            <Deck slug={slug} />
          </Route>
          <Route path="/decks/:slug/study">
            <Study deckId={slug} />
          </Route>
          <Route path="/decks/:slug/edit">
            <EditDeck slug={slug} />
          </Route>
          <Route path="/decks/:slug/cards/new">
            <AddCard deckId={slug} />
          </Route>
          <Route path="/decks/:slug/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
