import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";

import LandingPage from "pages/landingpage";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";

import Checkout from "../src/pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/Checkout" component={Checkout}></Route>

        <Route exact path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
