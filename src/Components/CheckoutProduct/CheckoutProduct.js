import React, { useContext, useState } from "react";

import "./CheckoutProduct.css";

import { useStateValue } from "../ContextProvider/StateProvider";

function CheckoutProduct({ name, Type, image, price, id, quantity }) {
  const [{ shop }, dispatch] = useStateValue();
  console.log(shop?.quantity);
  const removeFromOrder = () => {
    dispatch({
      type: "REMOVE_FROM_SHOP",
      id: id,
    });
  };
  return (
    <div className="checkout__products">
      <div className="checkout__all">
        <div className="checkout__details">
          <div className="checkoutProductImage">
            <img
              className="checkoutProduct__image"
              src={image}
              alt="product image"
            />
          </div>
          <div className="checkoutProductInfo">
            <div className="checkoutProduct__info">
              <div>
                <div className="checkoutProduct__name_type">
                  <div className="checkoutProduct__name">{name}</div>
                </div>

                <div className="checkoutProduct__total">
                  <span className="total__price">
                    ${price} x {quantity}=$ {price * quantity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="remove__button">
          <button onClick={removeFromOrder}>X Remove from Order</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
