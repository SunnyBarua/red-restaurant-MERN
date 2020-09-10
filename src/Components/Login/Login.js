import React, { useState, useContext, createContext } from "react";
import "./Login.css";
import Background from "../../Images/bannerbackground.png";
import logo from "../../Images/logo2.png";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

import { useStateValue } from "../ContextProvider/StateProvider";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [profile, setProfile] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginData = (e) => {
    e.preventDefault();
    const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validateEmail.test(email)) {
      M.toast({ html: "invalid email", classes: "red" });
      return;
    }
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.error) {
          M.toast({ html: data.error, classes: "red" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", user: data.user.name });

          M.toast({
            html: "logged in sucess",
            classes: "green",
          });
          history.push("/checkout");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <div className="background__image">
        <img src={Background} />
        <div className="login__form">
          <div className="logo">
            <img className="logo" src={logo} />
          </div>

          <div className="form">
            <form>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button onClick={LoginData}>Login</Button>
              <Link className="login__link" to="/signup">
                Sign up if you don't have an Account?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
