import React from "react";
import { GoHeartFill } from "react-icons/go";

const simpleRecipes = [
  { title: "Big and Juicy Wagyu Beef Cheeseburger", src: "/simple_recipes/image 26 (7).png", category: "Snack" },
  { title: "Fresh Lime Roasted Salmon with Ginger Sauce", src: "/simple_recipes/image 26 (7).png", category: "Fish" },
  { title: "Strawberry Oatmeal Pancake with Honey Syrup", src: "/simple_recipes/image 26 (7).png", category: "Breakfast" },
  { title: "Fresh and Healthy Mixed Mayonnaise Salad", src: "/simple_recipes/image 26 (7).png", category: "Healthy" },
  { title: "Chicken Meatballs with Cream Cheese", src: "/simple_recipes/image 26 (7).png", category: "Meat" },
  { title: "Fruity Pancake with Orange & Blueberry", src: "/simple_recipes/image 26 (7).png", category: "Sweet" },
  { title: "The Best Easy One Pot Chicken and Rice", src: "/simple_recipes/image 26 (7).png", category: "Snack" },
  { title: "The Creamiest Creamy Chicken and Bacon Pasta", src: "/simple_recipes/image 26 (7).png", category: "Noodles" },
  { title: "Barbeque Spicy Sandwiches with Chips", src: "/simple_recipes/image 26 (7).png", category: "Snack" },
];

const SimpleRecipes = () => {
  return (
    <div className="simple_recipes">
      <h2>Simple and tasty recipes</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="box">
        {simpleRecipes.map((recipe, index) => (
          <div className="card" key={index}>
            <img loading="lazy" src={recipe.src} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <div className="buttons_container">
              <button>30 Minutes</button>
              <button>{recipe.category}</button>
            </div>
            <div className="favorite">
              <GoHeartFill size={20} fill="rgba(255, 99, 99, 1)" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleRecipes;
