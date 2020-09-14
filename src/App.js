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
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Login from "./Components/Login/Login";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Components/SignUp/SignUp";
import Checkout from "./Components/Chheckout/Checkout";
import { useStateValue } from "./Components/ContextProvider/StateProvider";
import CheckoutForm from "./Components/CheckoutForm/CheckoutForm";
const stripePromise = loadStripe("pk_test_XEg2kRmKDHS2Pe9W8fjilGbX00WH8UE9tK");

function App() {
  const { user } = useStateValue();
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
          <Route exact path="/checkoutform">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
