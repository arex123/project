import React from "react";
import Meal from "./Meal";

const mealItems = [
  {
    id:"12",
    name: "taqilantro",
    desc: "finish food",
    price: 20,
  },
  {
    id:"13",
    name: "panner tikka",
    desc: "protein rich spicy food",
    price: 5,
  },
  {
    id:"14",
    name: "fish curry",
    desc: "bengali style",
    price: 8,
  },
  {
    id:"15",
    name: "pizza",
    desc: "authentic italiana piazza",
    price: 4,
  },
  {
    id:"16",
    name: "thaali",
    desc: "complete rajasthani style meal",
    price: 15,
  },
  {
    id:"17",
    name: "momos",
    desc: "authentic nepali momo",
    price: 6,
  },
];
const List = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-40 w-[50%] bg-white p-8 rounded-md space-y-6">
        {mealItems.map((meal) => (
          <Meal key={meal.id} item={meal} />
        ))}
      </div>
    </div>
  );
};

export default List;
