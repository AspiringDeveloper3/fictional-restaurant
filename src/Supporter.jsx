import React from "react";

const Supporter = (props) => {
  return (
    <div className="smaller">
      <div className="food1">
        <h1 className="price">{props.price1}</h1>
        <img src={props.src1} alt = "food"/>
        <h3 className="food">{props.food1}</h3>
      </div>

      <div className="food2">
        <h1 className="price">{props.price2}</h1>
        <img src={props.src2} alt = "food"/>
        <h3 className="food">{props.food2}</h3>
      </div>
    </div>
  );
};

export default Supporter;
