import React, { useState, useEffect } from "react";
import "./SignUp.css";
import Background from "../../Images/bannerbackground.png";
import logo from "../../Images/logo2.png";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUpData = (e) => {
    e.preventDefault();

    console.log("clicked");
    const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validateEmail.test(email)) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch("https://red-restaurant-server.herokuapp.com/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "red" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          M.toast({
            html: data.message,
            classes: "green",
          });
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signup">
      <div className="background__image">
        <img src={Background} />
        <div className="signup__form">
          <div className="logo">
            <img className="logo" src={logo} alt={logo.name} />
          </div>

          <div className="form">
            <form>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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

              <Button onClick={SignUpData}>Sign Up</Button>
              <Link className="login__link" to="/login">
                ALready have an Account?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
