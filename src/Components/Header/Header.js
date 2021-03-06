import React, { useEffect, useContext } from "react";
import logo from "../../Images/logo2.png";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

import { useStateValue } from "../ContextProvider/StateProvider";

function Header() {
  const history = useHistory();

  const [{ shop, user }, dispatch] = useStateValue();
  console.log(shop);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      history.push("/");
    } else {
      history.push("/");
    }
  }, []);

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="brand logo" />
        </Link>
      </div>
      <div className="header__right">
        <h5 style={{ marginRight: "10px" }}>
          {user && <p>Hi,</p>}
          {user?.name}
        </h5>
        <Link
          to={user?.name?.length > 0 ? "/checkout" : "/login"}
          className="shop__link"
        >
          <AddShoppingCartIcon />
          <span className="header__shop">{shop?.length}</span>
        </Link>

        {user && (
          <Link
            to="/"
            className="nav-link"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
            }}
          >
            Logout
          </Link>
        )}
        {!user && (
          <>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/signup">
              <button>Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
