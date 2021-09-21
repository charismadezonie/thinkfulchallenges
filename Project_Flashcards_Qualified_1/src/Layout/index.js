import React, { useState } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import Study from "./Decks/Study";
import Deck from "./Decks/Deck";
import CreateDeck from "./Decks/CreateDeck";

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
            <Deck />
          </Route>
          <Route path="/decks/:slug/study">
            <Study deckId={slug} />
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
