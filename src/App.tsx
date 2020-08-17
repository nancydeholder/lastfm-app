import React from "react";
import "./App.css";
import { ArtistSearch } from "./components/ArtistSearch";
import { ArtistInfo } from "./components/ArtistInfo";
import { ArtistWidget } from "./components/ArtistWidget";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "fontsource-roboto";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ArtistSearch />
        </Route>
        <Route exact path="/similar-artists">
          <ArtistWidget />
        </Route>
        <Route path="/artist/:id">
          <ArtistInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
