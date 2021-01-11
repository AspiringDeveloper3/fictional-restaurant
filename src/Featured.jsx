import React from "react";
import food from './food.jpg';

function Featured(props) {
  return (
    <div>
      {/* <div className="name">
        <h1>{props.name}</h1>
      </div>
      <div className="food-image">
        <img src={props.image} alt="food-img" />
      </div>
      <div className="spice-rating">
        <p>
          <span className="heading">Spice Rating</span>: <br /> {props.spice}
        </p>
      </div>
      <div className="ingredients">
        <p>
          <span className="heading">Ingredients</span>:
          <br/>
            <ul>
              <li>{props.i1}</li>
              <li>{props.i2}</li>
              <li>{props.i3}</li>
              <li>{props.i4}</li>
            </ul>
        </p>
      </div> */}
      <img src={food} alt = "food-img" />
    </div>
  );
}

export default Featured;