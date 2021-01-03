import React from "react";
import ReactDom from "react-dom";
import Navbar from "./Navbar";
import Head from "./Head";
import FoodItems from "./Food";


ReactDom.render(
  <div>
    <Navbar />
    <Head />
    <FoodItems description1 = "lorem ipsum dolor sit amet, consectetur adipiscing elit" foodEmoji1 = "🍔" food1 = "Burger" food2 = "Lobster" food3= "Pastry" food4 = "Coffee" food5 = "Chinese" foodEmoji2 = "🦞" foodEmoji3 = "🍰" foodEmoji4 = "☕" foodEmoji5 = "🍜" description2 = "lorem ipsum dolor sit amet, consectetur adipiscing elit" description3 = "lorem ipsum dolor sit amet, consectetur adipiscing elit" description4 = "lorem ipsum dolor sit amet, consectetur adipiscing elit" description5 = "lorem ipsum dolor sit amet, consectur adipiscing elit"/>
  </div>,
  document.getElementById("root")
);