import React, { useContext } from "react";

import "./CheckoutProduct.css";

import { useStateValue } from "../ContextProvider/StateProvider";

function CheckoutProduct({ name, Type, image, price, id, quantity }) {
  console.log(id, image);
  const [{ shop }, dispatch] = useStateValue();
  const removeFromOrder = () => {
    dispatch({
      type: "REMOVE_FROM_SHOP",
      id: id,
    });
  };
  return (
    <div className="checkout__product">
      <div className="checkoutProduct">
        <img
          className="checkoutProduct__image"
          src={image}
          alt="product image"
        />
        <div className="checkoutProduct__info">
          <div className="checkoutProduct__name_type">
            <div className="checkoutProduct__name">{name}</div>
            <div className="checkoutProduct__type">{Type}</div>
          </div>

          <div className="checkoutProduct__quantity">{quantity}</div>
          <div className="checkoutProduct__price">${price}</div>
          <div className="checkoutProduct__total">$ {price * quantity}</div>
        </div>
        <div className="remove__button">
          <button onClick={removeFromOrder}>X Remove from Order</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
