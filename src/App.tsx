import React from "react";
import "./App.css";
import { Search } from "./components/Search";
import { ArtistInfo } from "./components/ArtistInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route path="/artist/:id">
          <ArtistInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
