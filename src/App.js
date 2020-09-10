import React, { createContext, useReducer } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/SignUp/SignUp";
import Checkout from "./Components/Chheckout/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/food/:id">
            <FoodDetails />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
