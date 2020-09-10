import React, { useContext } from "react";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "../SubTotal/SubTotal";
import "./Checkout.css";

import { useStateValue } from "../ContextProvider/StateProvider";
import { Button, Link } from "@material-ui/core";
function Checkout() {
  const [{ shop, user }] = useStateValue();
  console.log(user);

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
        <div className="checkout_all__details">
          <div className="checkout__left">
            <form>
              <input type="text" value={user?.name} />
              <input type="email" value={user?.email} />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Flat ,Suit or Floor" />

              <input type="text" value="Red-Onion Restaurant" />

              <Button className="button">Save & Continue</Button>
            </form>
          </div>
          <div className="checkout__right">
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
        </div>
      )}
      {shop?.length > 0 && (
        <div className="checkout__Subtotal">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
