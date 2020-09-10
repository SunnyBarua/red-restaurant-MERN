import React from "react";

import "./FoodItem.css";

function FoodItem({ name, image, shortDescritption, price }) {
  return (
    <div className="food__item">
      <div className="card">
        <div className="food__image">
          <img src={image} alt={name} />
        </div>
        <div className="food__details">
          <div className="food__name">
            <h3>{name}</h3>
          </div>
          <div className="food__shortDescription">
            <p>{shortDescritption}</p>
          </div>

          <div className="price">
            <h3>${price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
