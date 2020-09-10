import React, { useState, useEffect, useContext } from "react";
import { useParams, Redirect, useHistory } from "react-router";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import "./FoodDetails.css";

import { useStateValue } from "../ContextProvider/StateProvider";

function FoodDetails() {
  const history = useHistory();
  const [{ shop }, dispatch] = useStateValue();
  const addToShop = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_SHOP",
      item: {
        id: currentFood._id,
        name: currentFood.name,
        price: currentFood.price,
        image: currentFood.image_1,
        quantity: quantity,
        Type: currentFood.type,
      },
    });
    history.push("/checkout");
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allfood")
      .then((res) => res.json())
      .then((result) => {
        setData(result.foods);
      });
    window.scrollTo(0, 0);
  }, [data.name]);

  const id = useParams().id;
  const currentFood = data.find((food) => food._id == id);
  console.log(currentFood);
  const [quantity, setQuantity] = useState(1);
  const [add, setAdd] = useState(false);
  const addFood = (quantity) => {
    setQuantity(quantity);
  };
  console.log(quantity);

  return (
    <div className="food__detail">
      <div className="food__detail__left">
        <div className="food__description">
          <div className="food__name">
            <h1>{currentFood?.name}</h1>
          </div>
          <div className="food__fullDescription">
            <p>{currentFood?.fullDescription}</p>
          </div>
          <div className="priceAndButton">
            <div className="food__price">
              <h1>$ {currentFood?.price}</h1>
            </div>
            <div className="quantity__button">
              <button
                className="minus__button"
                onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}
              >
                -
              </button>
              <span className="quantitiy_number">{quantity}</span>
              <button
                className="plus__button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="add__button" onClick={addToShop}>
            <div className="shopiing__logo">
              <AddShoppingCartIcon />
            </div>
            <span className="add__text"> Add</span>
          </div>
          <div className="food__sample__images">
            <img src={currentFood?.image_1} alt="sample image" />
            <img src={currentFood?.image_2} alt="sample image" />
          </div>
        </div>
      </div>
      <div className="food__detail__right">
        <img src={currentFood?.image_1} alt="sample image" />
      </div>
    </div>
  );
}

export default FoodDetails;
