import React, { useContext } from "react";

import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import { getShopTotal } from "../ContextProvider/reducer";

import { useStateValue } from "../ContextProvider/StateProvider";
import { Link } from "react-router-dom";

function SubTotal({ savedButton }) {
  const [{ shop }, dispatch] = useStateValue();
  console.log(shop);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal( {shop.length}items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order container
            </small>
          </>
        )}
        decimalScale={2}
        value={getShopTotal(shop)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link className="payment_link" to="/checkoutform">
        {savedButton ? (
          <button>Proceed to CheckOut</button>
        ) : (
          <button disabled>Proceed to CheckOut</button>
        )}
      </Link>
    </div>
  );
}

export default SubTotal;
