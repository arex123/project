import React from "react";
import MealItemForm from "./MealItemForm";

const Meal = ({ item }) => {
  return (
    <div className="border-b-2 flex justify-between pb-2 space-y-2">
      <div>
        <p className="font-bold">{item.name}</p>
        <p className="font-ligh">{item.desc}</p>
        <p className="font-bold text-[#7F3814]">${item.price}</p>
      </div>
      <div>
        <MealItemForm id={item.id} item={item}/>
      </div>
    </div>
  );
};

export default Meal;
