import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import SubTotal from "../SubTotal/SubTotal";
import "./Checkout.css";

import { useStateValue } from "../ContextProvider/StateProvider";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [{ shop, user }] = useStateValue();
  console.log(user);

  return (
    <div className="checkout" key={Math.random()}>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="name"
                defaultValue={user.name}
                ref={register({ required: true })}
                placeholder="Your Name"
              />
              {errors.name && <span className="error">Name is required</span>}

              <input
                name="email"
                defaultValue={user.email}
                ref={register({ required: true })}
                placeholder="Your Email"
              />
              {errors.email && <span className="error">Email is required</span>}
              <input
                name="address"
                ref={register({ required: true })}
                placeholder="Address"
              />
              {errors.address && (
                <span className="error">Address is required</span>
              )}
              <input
                name="city"
                ref={register({ required: true })}
                placeholder="City"
              />
              {errors.city && <span className="error">City is required</span>}
              <input
                name="zip"
                ref={register({ required: true })}
                placeholder="Zip Code"
              />
              {errors.zip && (
                <span className="error">Zip Code is required</span>
              )}

              <input type="submit" className="button__submit" />
            </form>
          </div>
          <div className="checkout__right">
            {shop?.map((item) => (
              <CheckoutProduct
                key={Math.random()}
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
