import React from "react";
import Supporter from "./Supporter";

const Head = () => {
  return (
    <div className="head">
      <div className="bigger">
        <div className="top">
          <img
            src="https://images.unsplash.com/photo-1601002177343-070d8f2d3496?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
            alt="Chef"
          />
        </div>

        <div className="bottom">
          <h1 className="relish">Relish the freshness</h1>
          <p>
            Food represents the never-ending battle of mankind against hunger
            and HungerPedia offers to end that battle. HungerPedia is dedicated
            to deliver taste with added cherry of freshness to your palate. We
            have world- chefs and the best ambience for you to enter the
            heaven of eating.
            <br />
            <br />
            <br />
            <span className="sub">Happy Hunger!</span>
          </p>
        </div>
      </div>
      <Supporter price1="$1.50" src1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWTeeAmEQuStEjSzfgGtNHyWnE7xAnUdKrw&usqp=CAU" food1="Taco" price2="$2.99" food2="Burrito" src2 = "https://www.196flavors.com/wp-content/uploads/2014/09/burrito-3b-FP.jpg" />
    </div>
  );
};

export default Head;
