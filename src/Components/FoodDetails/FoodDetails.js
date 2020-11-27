import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import "./FoodDetails.css";

import { useStateValue } from "../ContextProvider/StateProvider";
import { Button } from "@material-ui/core";
import PreLoader from "../PreLoader/PreLoader";

function FoodDetails() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPreloader, setShowPreloader] = useState("block");
  const [{ user }, dispatch] = useStateValue();
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
    setIsSuccess(true);
  };
  if (isSuccess) {
    setTimeout(() => setIsSuccess(false), 1300);
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://red-restaurant-server.herokuapp.com/allfood")
      .then((res) => res.json())
      .then((result) => {
        setData(result.foods);
        setShowPreloader("none");
      });
    window.scrollTo(0, 0);
  }, [data.name]);
  console.log(data.name);

  const id = useParams().id;
  const currentFood = data.find((food) => food._id == id);
  console.log(currentFood);

  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <PreLoader showPreloader={showPreloader} />

      {currentFood?.name && (
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
                    onClick={() =>
                      setQuantity(quantity <= 1 ? 1 : quantity - 1)
                    }
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

              <Button className="add__button" onClick={addToShop}>
                <div className="shopiing__logo">
                  <AddShoppingCartIcon />
                </div>
                <span className="add__text">Add</span>
              </Button>
              {isSuccess && (
                <div className="message__success">
                  <span className="check__icon">
                    <CheckCircleOutlineIcon />
                  </span>

                  <span className="check__icon__text">Item added to Cart</span>
                </div>
              )}

              <div className="food__sample__images">
                <img src={currentFood?.image_1} alt={currentFood?.name} />
                <img src={currentFood?.image_2} alt={createContext?.name} />
              </div>
            </div>
          </div>
          <div className="food__detail__right">
            <img src={currentFood?.image_1} alt="sample image" />
          </div>
        </div>
      )}
    </>
  );
}

export default FoodDetails;
