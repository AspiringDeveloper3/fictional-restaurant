import React from "react";

function foodItems(props) {
  return (
    <div className="food-collection">
      <div className="product1">
        <h3 className="food">{props.food1}</h3>
        <p className="desc">{props.description1}</p>
        <p className="food-emoji">{props.foodEmoji1}</p>
      </div>
      <div className="product2">
        <h3 className="food">{props.food2}</h3>
        <p className="desc">{props.description2}</p>
        <p className="food-emoji">{props.foodEmoji2}</p>
      </div>
      <div className="product3">
        <h3 className="food">{props.food3}</h3>
        <p className="desc">{props.description3}</p>
        <p className="food-emoji">{props.foodEmoji3}</p>
      </div>
      <div className="product4">
        <h3 className="food">{props.food4}</h3>
        <p className="desc">{props.description4}</p>
        <p className="food-emoji">{props.foodEmoji4}</p>
      </div>
      <div className="product5">
        <h3 className="food">{props.food5}</h3>
        <p className="desc">{props.description5}</p>
        <p className="food-emoji">{props.foodEmoji5}</p>
      </div>
    </div>
  );
}

export default foodItems;
