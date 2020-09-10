import React, { useContext } from "react";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "../SubTotal/SubTotal";
import "./Checkout.css";

import { useStateValue } from "../ContextProvider/StateProvider";
function Checkout() {
  const [{ shop }] = useStateValue();
  console.log(shop);

  return (
    <div className="checkout">
      {shop?.length === 0 ? (
        <div>
          <h2>Your Ordering Food is empty</h2>
          <p>
            You have no items in your order.To buy one or more food please
            select "Add" button
          </p>
        </div>
      ) : (
        <div className="checkout__products__info">
          <h1> Your Food Ordering list</h1>
          <div className="table__name">
            <ul>
              <li className="product">
                <h3>Product</h3>
              </li>
              <li className="quantity">
                <h3>Quantity</h3>
              </li>
              <li className="price">
                <h3>Price</h3>
              </li>
              <li className="product">
                <h3>Total</h3>
              </li>
            </ul>
          </div>
          {shop?.map((item) => (
            <CheckoutProduct
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              Type={item.Type}
            />
          ))}
        </div>
      )}
      {shop?.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
