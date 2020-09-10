import React, { useContext } from "react";

import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import { getShopTotal } from "../ContextProvider/reducer";

import { useStateValue } from "../ContextProvider/StateProvider";

function SubTotal() {
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
      <button>Proceed to CheckOut</button>
    </div>
  );
}

export default SubTotal;
