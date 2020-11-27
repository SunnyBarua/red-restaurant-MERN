import React, { useState, useEffect } from "react";
import Banner from "../../Images/bannerbackground.png";
import "./Home.css";
import FoodItem from "../FoodItem/FoodItem";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import image1 from "../../Images/Image/fast-delivery.png";
import image2 from "../../Images/Image/chef-cook-food.png";
import image3 from "../../Images/Image/home-delivery.png";
import { useStateValue } from "../ContextProvider/StateProvider";
import PreLoader from "../PreLoader/PreLoader";

function Home() {
  const history = useHistory();
  const [{ shop, user }] = useStateValue();
  const [showPreloader, setShowPreloader] = useState("block");
  console.log(user?.lenght);
  const [food, setFood] = useState([]);
  const [item, setItem] = useState("Breakfast");
  useEffect(() => {
    fetch("https://red-restaurant-server.herokuapp.com/allfood")
      .then((res) => res.json())
      .then((result) => {
        setFood(result.foods);
        setShowPreloader("none");
      });
  }, []);
  console.log(food);

  const selectedFood = food.filter((it) => it.type == item);
  const clickingCheckout = () => {
    {
      user?.name?.length > 0
        ? history.push("/checkout")
        : history.push("/login");
    }
  };
  return (
    <div className="home">
      <div className="home__banner">
        <img src={Banner} alt="banner" />
        <div className="title__search">
          <h1>Best food waiting for your belly!</h1>
          <div className="search">
            <div className="searching__portion">
              <input className="inp" placeholder="Search for food" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home__menu">
        <div className="menu">
          <div
            className={item === "Breakfast" ? "active nav__link" : "nav__link"}
            onClick={() => setItem("Breakfast")}
          >
            <h3>Breakfast</h3>
          </div>

          <div
            className={item === "Lunch" ? "active nav__link" : "nav__link"}
            onClick={() => setItem("Lunch")}
          >
            <h3>Lunch</h3>
          </div>
          <div
            className={item === "Dinner" ? "active nav__link" : "nav__link"}
            onClick={() => setItem("Dinner")}
          >
            <h3>Dinner</h3>
          </div>
        </div>
      </div>
      <PreLoader showPreloader={showPreloader} />
      <div className="selected__food__item">
        {selectedFood.map((food) => (
          <Link className="link" key={food._id} to={"/food/" + food._id}>
            <FoodItem
              key={food._id}
              name={food.name}
              image={food.image_1}
              shortDescritption={food.shortDescription}
              price={food.price}
            />
          </Link>
        ))}
      </div>
      <div className="home__checkout__button">
        {shop?.length > 0 ? (
          <Button className="active" onClick={clickingCheckout}>
            Check You Food
          </Button>
        ) : (
          <Button className="deactive" disabled>
            Check You Food
          </Button>
        )}
      </div>
      <div className="home__introduction">
        <div className="home__introduction__top">
          <h1>Why you choose use</h1>
          <p>
            Barton waited twenty always repair in within we do.An delighted
            offending curiosity my is dashwoods at.Boy prosperious increasing
            surrounded.
          </p>
        </div>
        <div className="home__introduction__bottom">
          <div className="picture__1">
            <img src={image1} alt="home-images" />
          </div>
          <div className="picture__2">
            <img src={image2} alt="home-images" />
          </div>
          <div className="picture__3">
            <img src={image3} alt="home-images" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
