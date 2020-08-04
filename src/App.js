import Header from "./components/Header";
import Footer from "./components/Footer";
import Offers from "./containers/Offers.js";
import Offer from "./containers/Offer.js";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faBell,
  faEye,
  faUser,
  faPlusSquare,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faClock,
  faBell,
  faEye,
  faUser,
  faPlusSquare,
  faSearch,
  faShoppingCart
);

function App() {
  const token = Cookies.get("token");
  const [user, setUser] = useState(token || null);

  return (
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>

          <Route path="/user/sign_up">
            <SignUp />
          </Route>

          <Route path="/user/log_in">
            <Login setUser={setUser} />
          </Route>

          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/publish">
            <Publish />
          </Route>

          <Route exact path="/">
            <Offers />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
